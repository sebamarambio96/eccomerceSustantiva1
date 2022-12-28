let carritoGuardado = JSON.parse(localStorage.getItem('compras'))
let carrito = {}
if (carritoGuardado == null) {
    carrito = {}
} else {
    carritoGuardado.map(producto => {
        carrito[producto.id] = { ...producto }

    })
}


let contador = JSON.parse(localStorage.getItem('contador'))
if (contador == null) {
    contador = 0
} else if (contador !== null) {
    const contadorCompras = document.getElementById('contadorCompras')
    contadorCompras.textContent = contador
}


const templateCompras = document.getElementById('templateCompras').content
const containerCompras = document.getElementById('containerCompras')
const fragmentCompras = document.createDocumentFragment()
const btnCompras = document.getElementById('btnCompras');
let arrayCompras = JSON.parse(localStorage.getItem('compras'))

if (arrayCompras !== null) {
    arrayCompras.map(producto => {
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