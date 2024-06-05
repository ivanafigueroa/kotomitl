//Aquí trabajaré la pàgina del carrito, en donde se ven los elementos agregados, si se suman o restan y su actualización

//voy a tener que leer en el localstorage qué productos hay.

const contenedorTarjetas = document.getElementById("productos-container");
const unidadesElement = document.getElementById("unidades"); 
const precioElement = document.getElementById("precio");   
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesElement = document.getElementById("totales");
const reiniciarCarritoElement = document.getElementById("reiniciar");


function crearTarjetasProductosInicio(){
    contenedorTarjetas.innerHTML= "";
   const productos = JSON.parse(localStorage.getItem("prendas"));
   console.log(productos);
   if(productos && productos.length > 0) {
   productos.forEach( producto => {                        
    const nuevaPrenda = document.createElement("div");
    nuevaPrenda.classList = "tarjeta-producto";
    nuevaPrenda.innerHTML=`                                 
    <img src="../Assents/productos/${producto.imagen}">
    <h3>${producto.producto}</h3>
    <p>${producto.talla}</p>
    <p>$${producto.precio}</p>
    <div>
    <button>-</button>
    <span class="cantidad">${producto.cantidad}</span>
    </div>
    `;
    contenedorTarjetas.appendChild(nuevaPrenda); 

    nuevaPrenda.getElementsByTagName("button")[0].addEventListener("click", (e) => {
        restarAlCarrito(producto);
        crearTarjetasProductosInicio();
        actualizarTotales();
    });
  });
 }
}

crearTarjetasProductosInicio();
actualizarTotales();


/*para actualizar los totales creo una función nueva*/

function actualizarTotales(){
    const productos = JSON.parse(localStorage.getItem("prendas"));
    let unidades = 0;
    let precio = 0;
    if(productos && productos.length > 0){
        productos.forEach(producto => {
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;

    });
    unidadesElement.innerText = unidades;
    precioElement.innerText = precio;
    }
    revisarMensajeVacio();
}

function revisarMensajeVacio(){
    const productos = JSON.parse(localStorage.getItem("prendas"));
    carritoVacioElement.classList.toggle("escondido", productos && productos.length >0);
    totalesElement.classList.toggle("escondido", !(productos && productos.length >0));
}

revisarMensajeVacio();
 

 reiniciarCarritoElement.addEventListener("click", reiniciarCarrito);
 function reiniciarCarrito(){
    localStorage.removeItem("prendas");
    actualizarTotales();
    crearTarjetasProductosInicio();
    actualizarNumeroCarrito();

}
