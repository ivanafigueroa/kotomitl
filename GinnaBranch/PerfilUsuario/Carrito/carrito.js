const PRODUCTOS =[ {
    id: 1,
    producto: "Blusa",
    precio: 100,
    imagen: "./Assets/blusa1.webp"
},
    {
        id: 2,
        producto: "Blusa 2",
        precio: 200,
        imagen:"./Assets/blusa2.webp"
    },
    {
        id: 3,
        producto: "Chamarra",
        precio: 300,
        imagen: "./Assets/chamarra1.webp"
    },
    {
        id: 4,
        producto: " Jeans",
        precio: 400,
        imagen: "./Assets/jeans1"
    },
    {
        id: 5,
        producto: "Jeans 2",
        precio: 500,
        imagen: "./Assets/jeans2(1).webp"
    },
    {
        id: 6,
        producto: "Pijama",
        precio: 600,
        imagen:"./Assets/pijama.webp"
    },
    {
        id: 7,
        producto: "Pijama",
        precio: 700,
        imagen: "./Assets/pijama2.webp"
    },
    {
        id: 8,
        producto: "Short",
        precio: 800,
        imagen: "./Assets/short1.webp"
    },
    {
        id: 9,
        producto: "Short 2",
        precio: 900,
        imagen: "./Assets/short2.webp"

    },
    {
        id: 10,
        producto: "Sudadera",
        precio: 1000,
        imagen: "./Assets/sudadera1.webp"
    }
];




let carrito = [];
const moneda = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function renderizarProductos() {
    PRODUCTOS.forEach((info) => {
        // Estructura
        const miCard = document.createElement('div');
        miCard.classList.add('card', 'col-sm-4');
        // Body
        const miCardBody = document.createElement('div');
        miCardBody.classList.add('card-body');
        // Titulo
        const miTitle = document.createElement('h5');
        miTitle.classList.add('card-title');
        miTitle.textContent = info.producto;
        // Imagen
        const miImagen = document.createElement('img');
        miImagen.classList.add('img-fluid');
        miImagen.setAttribute('src', info.imagen);
        // Precio
        const miPrecio = document.createElement('p');
        miPrecio.classList.add('card-text');
        miPrecio.textContent = `${info.precio}${moneda}`;
        // Boton
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-primary');
        miBoton.textContent = '+';
        miBoton.setAttribute('marcador', info.id);
        miBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miCardBody.appendChild(miImagen);
        miCardBody.appendChild(miTitle);
        miCardBody.appendChild(miPrecio);
        miCardBody.appendChild(miBoton);
        miCard.appendChild(miCardBody);
        DOMitems.appendChild(miCard);
    });
}