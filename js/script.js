fetch("../JSON/productos.json")
    .then((resp) => resp.json())
    .then(data => {

        const productos = data.categorias
        /* console.log(productos) */

        const containerHorror = document.getElementById('containerHorror')
        const fragment = document.createDocumentFragment()
        const template = document.getElementById('templateProducto').content;
        /* console.log(template); */

        productos.horror.forEach(producto => {
            let imgProducto = template.getElementById('imgProducto')
            let autorProducto = template.getElementById('autorProducto')
            let tituloProducto = template.getElementById('nombreProducto')
            let precioProducto = template.getElementById('precioProducto')
            let botonAgregar = template.getElementById('agregarProducto')
            botonAgregar.dataset.id = producto.id
            imgProducto.src = producto.imagen
            imgProducto.alt = producto.nombre
            autorProducto.textContent = producto.autor
            tituloProducto.textContent = producto.nombre
            precioProducto.textContent = `$ ${producto.precio}`
            const clone = template.cloneNode(true)

            fragment.appendChild(clone)
        })
        containerHorror.appendChild(fragment)

        const containerMangas = document.getElementById('containerMangas')
        const fragment2 = document.createDocumentFragment()

        productos.mangas.forEach(producto => {
            let imgProducto = template.getElementById('imgProducto')
            let autorProducto = template.getElementById('autorProducto')
            let tituloProducto = template.getElementById('nombreProducto')
            let precioProducto = template.getElementById('precioProducto')
            let botonAgregar = template.getElementById('agregarProducto')
            botonAgregar.dataset.id = producto.id
            imgProducto.src = producto.imagen
            imgProducto.alt = producto.nombre
            autorProducto.textContent = producto.autor
            tituloProducto.textContent = producto.nombre
            precioProducto.textContent = `$ ${producto.precio}`
            const clone = template.cloneNode(true)

            fragment2.appendChild(clone)
        })
        containerMangas.appendChild(fragment2)

        const containerJuvenil = document.getElementById('containerJuvenil')
        const fragment3 = document.createDocumentFragment()

        productos.juvenil.forEach(producto => {
            let imgProducto = template.getElementById('imgProducto')
            let autorProducto = template.getElementById('autorProducto')
            let tituloProducto = template.getElementById('nombreProducto')
            let precioProducto = template.getElementById('precioProducto')
            let botonAgregar = template.getElementById('agregarProducto')
            botonAgregar.dataset.id = producto.id
            imgProducto.src = producto.imagen
            imgProducto.alt = producto.nombre
            autorProducto.textContent = producto.autor
            tituloProducto.textContent = producto.nombre
            precioProducto.textContent = `$ ${producto.precio}`
            const clone = template.cloneNode(true)

            fragment3.appendChild(clone)
        })
        containerJuvenil.appendChild(fragment3)

        //CARRITO
        let carrito = {}
        let arrayCompras = []

        let contador = JSON.parse(localStorage.getItem('contador'))
        /* console.log(contador) */
        if (contador == null) {
            contador = 0
        } else if (contador !== null) {
            const contadorCompras = document.getElementById('contadorCompras')
            contadorCompras.textContent = contador
        }

        /* console.log(contador) */
        const detectarBotones = (productos) => {
            const botones = document.querySelectorAll('.card button')
            botones.forEach(btn => {
                btn.addEventListener('click', () => {
                    let producto = {}
                    /* console.log(btn.dataset.id) */
                    if (btn.dataset.id < 2000) {
                        producto = productos.mangas.find(item => item.id == btn.dataset.id)
                    } else if (btn.dataset.id >= 2000 && btn.dataset.id < 3000) {
                        producto = productos.horror.find(item => item.id == btn.dataset.id)
                    } else if (btn.dataset.id >= 3000 && btn.dataset.id < 4000) {
                        producto = productos.juvenil.find(item => item.id == btn.dataset.id)
                    }
                    producto.cantidad = 1
                    if (carrito.hasOwnProperty(producto.id)) {
                        producto.cantidad = carrito[producto.id].cantidad + 1
                        /* console.log(producto.cantidad) */
                    }

                    carrito[producto.id] = { ...producto }
                    /* console.log(carrito) */

                    arrayCompras = Object.values(carrito)
                    /* console.log(arrayCompras) */


                    /* console.log(carrito) */
                    let contadorInterno = 0
                    arrayCompras.map(producto => {
                        contadorInterno += producto.cantidad
                        /* console.log(producto.cantidad) */
                        /* console.log(contadorInterno) */
                    })
                    /* console.log(contador) */
                    /* console.log(contador + contadorInterno) */

                    const contadorCompras = document.getElementById('contadorCompras')
                    contadorCompras.textContent = `${contador + contadorInterno}`

                    localStorage.setItem('contador', JSON.stringify(contador + contadorInterno))
                    localStorage.setItem('compras', JSON.stringify(arrayCompras))
                })
            })

        }

        /*         let usuaria = JSON.parse(sessionStorage.getItem('user')) */
        detectarBotones(productos)

        const templateCompras = document.getElementById('templateCompras').content
        const containerCompras = document.getElementById('containerCompras')
        const fragmentCompras = document.createDocumentFragment()
        const btnCompras = document.getElementById('btnCompras');


        arrayCompras = JSON.parse(localStorage.getItem('compras'))
        console.log(arrayCompras)
        if (arrayCompras !== null) {
            arrayCompras.map(producto => {
                /* console.log(producto) */
                let imgProducto = templateCompras.getElementById('imgProductoCompras')
                let cantidadProducto = templateCompras.getElementById('cantidadProductoCompras')
                let tituloProducto = templateCompras.getElementById('tituloProductoCompras')
                let precioProducto = templateCompras.getElementById('precioProductoCompras')
                imgProducto.src = producto.imagen
                imgProducto.alt = producto.nombre
                cantidadProducto.textContent = `Cantidad: ${producto.cantidad}`
                tituloProducto.textContent = producto.nombre
                precioProducto.textContent = `$ ${producto.precio}`

                const clone = templateCompras.cloneNode(true)
                fragmentCompras.appendChild(clone)
            })
            containerCompras.appendChild(fragmentCompras)
        }



        btnCompras.addEventListener('click', () => {
            /* containerCompras.parentNode.removeChild(templateCompras) */
            while (containerCompras.firstChild) {
                containerCompras.removeChild(containerCompras.firstChild);
            }
            arrayCompras.map(producto => {
                /* console.log(producto) */
                let imgProducto = templateCompras.getElementById('imgProductoCompras')
                let cantidadProducto = templateCompras.getElementById('cantidadProductoCompras')
                let tituloProducto = templateCompras.getElementById('tituloProductoCompras')
                let precioProducto = templateCompras.getElementById('precioProductoCompras')
                imgProducto.src = producto.imagen
                imgProducto.alt = producto.nombre
                cantidadProducto.textContent = `Cantidad: ${producto.cantidad}`
                tituloProducto.textContent = producto.nombre
                precioProducto.textContent = `$ ${producto.precio}`

                const clone = templateCompras.cloneNode(true)
                fragmentCompras.appendChild(clone)
            })

            containerCompras.appendChild(fragmentCompras)

        })

    })
    .catch()