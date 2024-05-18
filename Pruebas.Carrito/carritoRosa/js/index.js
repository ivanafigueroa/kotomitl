const contenedorTarjetas = document.getElementById("productos-container");

/* Crea las tarjetas de productos teniendo en cuenta la lista prendas.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevaPrenda = document.createElement("div");
    nuevaPrenda.classList = "tarjeta-producto"
    nuevaPrenda.innerHTML = `
    <img src="./Assets/${producto.imagen}">
    <h3>${producto.producto}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`;
    contenedorTarjetas.appendChild(nuevaPrenda);
    nuevaPrenda.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(prendas);