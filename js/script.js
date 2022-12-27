fetch("./../JSON/productos.json")
    .then((resp) => resp.json())
    .then(data => {

        const productos = data.categorias
        console.log(productos)

        const containerHorror = document.getElementById('containerHorror')
        const fragment = document.createDocumentFragment()
        const template = document.getElementById('templateProducto').content;
        console.log(template);

        productos.horror.forEach(producto => {
            let imgProducto = template.getElementById('imgProducto')
            let autorProducto = template.getElementById('autorProducto')
            let tituloProducto = template.getElementById('nombreProducto')
            let precioProducto = template.getElementById('precioProducto')
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
            imgProducto.src = producto.imagen
            imgProducto.alt = producto.nombre
            autorProducto.textContent = producto.autor
            tituloProducto.textContent = producto.nombre
            precioProducto.textContent = `$ ${producto.precio}`
            const clone = template.cloneNode(true)

            fragment3.appendChild(clone)
        })
        containerJuvenil.appendChild(fragment3)
    })
.catch ()