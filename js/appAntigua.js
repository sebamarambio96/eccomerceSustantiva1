const manga =
{
    nombre: "One Piece Español Tomo 2 East Blue",
    id: 0,
    autor: 'Eiichirō Oda',
    precio: 8990,
    cantidad: 0,
    imagen: "x"
};

const horror =
{
    nombre: "La llamada de Cthulu",
    id: 1,
    autor: 'H.P Lovecraft',
    precio: 11000,
    cantidad: 0,
    imagen: "x"
};

const harry =
{
    nombre: "Harry Potter y la Piedra Filosofal",
    id: 2,
    autor: 'J.K Rowling',
    precio: 10000,
    cantidad: 0,
    imagen: "x"
};

const naruto =
{
    nombre: "Naruto tomo 1",
    id: 3,
    autor: 'Masashi Kishimoto',
    precio: 8000,
    cantidad: 0,
    imagen: "X"
};

const animales =
{
    nombre: "Animales Fántasticos y donde encontrarlos",
    id: 4,
    autor: 'J.K Rowling',
    precio: 15000,
    cantidad: 0,
    imagen: "X"
};

const it =
{
    nombre: "IT",
    id: 5,
    autor: 'Stephen King',
    precio: 13000,
    cantidad: 0,
    imagen: "x"
};

const cupon10 =
{
    descuento: 0.10,
}

let precioFinal = [];
let carrito = [];
let productos = [manga, horror, harry, naruto, animales, it, cupon10];

function productoCarrito(nombre, id, autor, precio, cantidad) {
    this.nombre = nombre;
    this.id = id;
    this.autor = autor
    this.precio = precio;
    this.cantidad = cantidad;
}

function agregar(a) {
    carrito.push(carrito[a]);
}

function eliminar(b) {
    carrito = carrito.filter(i => i != carrito[b]);
}

function vaciar() {
    carrito = carrito.filter(i => i === 'vacio');
}

let menu1;
let menu2;
let menu3;
let terminarCompra;
let opcion1;
let opcion2;
let opcion3;
let i = 0;
let indice = 0;

while (i === 0) {
    let opcion1 = parseInt(prompt('Bienvenido al sistema de compra !ZAP!: \n Elija una categoría: \n 1. Horror Cósmico \n 2. Mangas \n 3. Fantasía \n 4. Ver carrito \n 5. Terminar compra'));
    if (opcion1 === 1) {
        opcion2 = parseInt(prompt('Elija un producto:\n 1. La llamada de Cthulu - H.P Lovecraft \n 2. IT - Stephen King'));
        if (opcion2 === 1) {
            opcion3 = parseInt(prompt('¿Cuantas unidades desea comprar? \n (Pulsa "cancelar" para volver al menú principal)'));
            carrito[indice] = new productoCarrito(horror.nombre, horror.id, horror.autor, horror.precio, opcion3);
            
            window.alert('Usted a agregado: ' + opcion3 + ' unidades de " ' + horror.nombre + '" a su carrito.');
        }
        else if (opcion2 === 2) {
            opcion3 = parseInt(prompt('¿Cuantas unidades desea comprar? \n (Pulsa "cancelar para volver al menú principal)'));
            carrito[indice] = new productoCarrito(it.nombre, it.id, it.autor, it.precio, opcion3);
            
            window.alert('Usted a agregado: ' + opcion3 + ' unidades de " ' + it.nombre + '" a su carrito.');
        }
    }
    else if (opcion1 === 2) {
        opcion2 = parseInt(prompt('Elija un producto:\n 1. One Piece Español Tomo 2 East Blue - Eiichirō Oda \n 2. Naruto tomo 1 - Masashi Kishimoto'))
        if (opcion2 === 1) {
            opcion3 = parseInt(prompt('¿Cuantas unidades desea comprar? \n (Pulsa "cancelar" para volver al menú principal)'));
            carrito[indice] = new productoCarrito(manga.nombre, manga.id, manga.autor, manga.precio, opcion3);
            
            window.alert('Usted a agregado: ' + opcion3 + ' unidades de " ' + manga.nombre + '" a su carrito.');
        }
        else if (opcion2 === 2) {
            opcion3 = parseInt(prompt('¿Cuantas unidades desea comprar? \n (Pulsa "cancelar para volver al menú principal)'));
            carrito[indice] = new productoCarrito(naruto.nombre, naruto.id, naruto.autor, naruto.precio, opcion3);
            
            window.alert('Usted a agregado: ' + opcion3 + ' unidades de " ' + naruto.nombre + '" a su carrito.');
        }
    }
    else if (opcion1 === 3) {
        opcion2 = parseInt(prompt('Elija un producto:\n 1. Harry Potter y la Piedra Filosofal - J.K Rowling \n 2. Animales Fántasticos y donde encontrarlos - J.K Rowling'))
        if (opcion2 === 1) {
            opcion3 = parseInt(prompt('¿Cuantas unidades desea comprar? \n (Pulsa "cancelar" para volver al menú principal)'));
            carrito[indice] = new productoCarrito(harry.nombre, harry.id, harry.autor, harry.precio, opcion3);
            
            window.alert('Usted a agregado: ' + opcion3 + ' unidades de " ' + harry.nombre + '" a su carrito.');
        }
        else if (opcion2 === 2) {
            opcion3 = parseInt(prompt('¿Cuantas unidades desea comprar? \n (Pulsa "cancelar para volver al menú principal)'));
            carrito[indice] = new productoCarrito(animales.nombre, animales.id, animales.autor, animales.precio, opcion3);
            
            window.alert('Usted a agregado: ' + opcion3 + ' unidades de " ' + animales.nombre + '" a su carrito.');
        }
    }
    else if (opcion1 === 4) {
        let listaCarro = '';
        for (x in carrito) {
            let o = "\n" + carrito.indexOf(carrito[x]) + ". " + carrito[x].cantidad + ' unidades de "' + carrito[x].nombre + '".';
            listaCarro = listaCarro + o;
            console.log(listaCarro)
        }
        let precioTotal = 0;
        for (x in carrito) {
            let precio = carrito[x].precio*carrito[x].cantidad;
            precioTotal = precioTotal + precio;
            console.log(precioTotal)
        }
        let cupon = prompt('¿Tienes algún descuento? S/N')
        if (cupon == 'S' || cupon == 's') {
            let descuento = parseInt(prompt('Ingrese el % de descuento:\n (sin el %)'))
            precioTotal = precioTotal - (precioTotal*descuento)/100;
            console.log(precioTotal)
        }
        let identificador = prompt('Su carrito tiene: ' + listaCarro + '\n\n COSTO TOTAL= '+ precioTotal +'\n\n *Si deseas eliminar un producto escribe el número lista a eliminar.\n *Si deseas vaciar el carro escribe "VACIAR". \n (Pulsa "cancelar" para volver al menú principal)')
        if (identificador === 'VACIAR') {
            vaciar();
        }
        else if (identificador <= carrito.length) {
            eliminar(identificador);
        }
    }
    else if (opcion1 === 5) {
        i += 1
    }
    else {
        window.alert('Ingrese una opción valida')
    }
    indice += 1;
}