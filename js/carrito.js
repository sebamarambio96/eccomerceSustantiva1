fetch("../JSON/productos.json")
    .then((resp) => resp.json())
    .then(data => {
        const productos = data.categorias
        let carritoGuardado = JSON.parse(localStorage.getItem('compras'))
        console.log(carritoGuardado)

        function pintarCarro() {
            const templateCarritoContenido = document.getElementById('templateCarritoContenido').content
            const templateCarritoTotal = document.getElementById('templateCarritoTotal').content
            const contenedorCarro = document.getElementById('contenedorCarro')
            const fragmentCarro = document.createDocumentFragment()

            while (contenedorCarro.firstChild) {
                contenedorCarro.removeChild(contenedorCarro.firstChild);
            }


            carritoGuardado.forEach(producto => {
                /* console.log(producto) */
                let idProducto = templateCarritoContenido.getElementById('idProducto')
                let cantidadProducto = templateCarritoContenido.getElementById('cantidadProducto')
                let nombreProducto = templateCarritoContenido.getElementById('nombreProducto')
                let precioProducto = templateCarritoContenido.getElementById('precioProducto')
                let botonPlus = templateCarritoContenido.getElementById('botonPlus')
                let botonMinus = templateCarritoContenido.getElementById('botonMinus')
                botonPlus.dataset.id = producto.id
                botonMinus.dataset.id = producto.id
                cantidadProducto.dataset.id = producto.id
                idProducto.textContent = producto.id
                cantidadProducto.textContent = producto.cantidad
                nombreProducto.textContent = producto.nombre
                precioProducto.textContent = `$ ${producto.precio * producto.cantidad}`

                const clone = templateCarritoContenido.cloneNode(true)
                fragmentCarro.appendChild(clone)
            })

            contenedorCarro.appendChild(fragmentCarro)

        }

        function pintarTotal() {
            const templateCarritoContenido = document.getElementById('templateCarritoTotal').content
            const totalCarro = document.getElementById('totalCarro')
            const fragmentCarro = document.createDocumentFragment()
            let contador = JSON.parse(localStorage.getItem('contador'))
            while (totalCarro.firstChild) {
                totalCarro.removeChild(totalCarro.firstChild);
            }

            let cantidadTotal = templateCarritoContenido.getElementById('cantidadTotal')
            let totalPrecio = templateCarritoContenido.getElementById('totalPrecio')
            console.log(contador)
            cantidadTotal.textContent = contador
            let total = 0
            carritoGuardado.map((producto) => {
                console.log(producto)
                let sumaProducto = producto.precio * producto.cantidad
                console.log(sumaProducto)
                total += sumaProducto
            })
            totalPrecio.textContent = `$ ${total}`

            const clone = templateCarritoContenido.cloneNode(true)
            fragmentCarro.appendChild(clone)
            totalCarro.appendChild(fragmentCarro)

        }
        function vaciarCarro() {
            const botonVaciar = document.getElementById('botonVaciar')
            botonVaciar.addEventListener('click', () => {
                localStorage.clear()
                location.reload()
            })
        }



        pintarTotal()
        pintarCarro()
        
        //Modificar Carrito

        let carrito = {}
        if (carritoGuardado == null) {
            carrito = {}
        } else {
            carritoGuardado.map(producto => {
                carrito[producto.id] = { ...producto }
            })
        }

        let arrayCompras = []
        const detectarBotonesPlus = (productos) => {
            let botones = document.querySelectorAll('#botonPlus')
            console.log(botones)
            botones.forEach(btn => {
                btn.addEventListener('click', () => {
                    console.log(btn)
                    let producto = {}
                    console.log(btn.dataset.id)
                    if (btn.dataset.id < 2000) {
                        producto = productos.mangas.find(item => item.id == btn.dataset.id)
                    } else if (btn.dataset.id >= 2000 && btn.dataset.id < 3000) {
                        producto = productos.horror.find(item => item.id == btn.dataset.id)
                    } else if (btn.dataset.id >= 3000 && btn.dataset.id < 4000) {
                        producto = productos.juvenil.find(item => item.id == btn.dataset.id)
                    }
                    console.log(producto)
                    producto.cantidad = 1
                    if (carrito.hasOwnProperty(producto.id)) {
                        producto.cantidad = carrito[producto.id].cantidad + 1
                    }
                    carrito[producto.id] = { ...producto }
                    arrayCompras = Object.values(carrito)
                    let contadorInterno = 0
                    arrayCompras.map(producto => {
                        contadorInterno += producto.cantidad
                    })
                    console.log(arrayCompras)
                    localStorage.setItem('compras', JSON.stringify(arrayCompras))
                    localStorage.setItem('contador', JSON.stringify(contadorInterno))
                    localStorage.setItem('carrito', JSON.stringify(carrito))
                    carritoGuardado = JSON.parse(localStorage.getItem('compras'))
                    pintarCarro()
                    detectarBotonesPlus(productos)
                    detectarBotonesMinus(productos)
                    pintarTotal()
                    vaciarCarro()
                })
            })
        }

        const detectarBotonesMinus = (productos) => {
            let botones = document.querySelectorAll('#botonMinus')
            console.log(botones)
            botones.forEach(btn => {
                btn.addEventListener('click', () => {
                    console.log(btn)
                    let producto = {}
                    console.log(btn.dataset.id)
                    if (btn.dataset.id < 2000) {
                        producto = productos.mangas.find(item => item.id == btn.dataset.id)
                    } else if (btn.dataset.id >= 2000 && btn.dataset.id < 3000) {
                        producto = productos.horror.find(item => item.id == btn.dataset.id)
                    } else if (btn.dataset.id >= 3000 && btn.dataset.id < 4000) {
                        producto = productos.juvenil.find(item => item.id == btn.dataset.id)
                    }
                    console.log(producto)
                    producto.cantidad = 1
                    if (carrito.hasOwnProperty(producto.id)) {
                        producto.cantidad = carrito[producto.id].cantidad - 1
                    }
                    if (producto.cantidad <= 0) {
                        producto.cantidad = 0
                    }
                    carrito[producto.id] = { ...producto }
                    arrayCompras = Object.values(carrito)


                    let contadorInterno = 0
                    arrayCompras.map(producto => {
                        contadorInterno += producto.cantidad
                    })
                    localStorage.setItem('compras', JSON.stringify(arrayCompras))
                    localStorage.setItem('contador', JSON.stringify(contadorInterno))
                    localStorage.setItem('carrito', JSON.stringify(carrito))
                    carritoGuardado = JSON.parse(localStorage.getItem('compras'))
                    pintarCarro()
                    detectarBotonesPlus(productos)
                    detectarBotonesMinus(productos)
                    pintarTotal()
                    vaciarCarro()
                })
            })
        }


        detectarBotonesPlus(productos)
        detectarBotonesMinus(productos)
        vaciarCarro()

    })

    .catch()