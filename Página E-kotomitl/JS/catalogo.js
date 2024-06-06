//Aquí estará el código de la página principal


//Seleccionar la seccion del main antes de usarla.
const contenedorTarjetas = document.getElementById("productos-container"); //Me creo una función para crear las tarjetas de producto que reciba un array de productos.
 //voy a agarrar los productos con un foreach.
function crearTarjetasProductosInicio(productos) {
   productos.forEach( producto => {                            //voy a crear un elemento para cada prenda que tenemos
    const nuevaPrenda = document.createElement("div");
    nuevaPrenda.classList = "tarjeta-producto";
    nuevaPrenda.innerHTML=`                                  <img src="../Assents/productos/${producto.imagen}">
    <h3>${producto.producto}</h3>
    <p>${producto.talla}</p>
    <p>$${producto.precio}</p>
    <button>Agregar al carrito</button>
    `
    contenedorTarjetas.appendChild(nuevaPrenda);               //voy a agregar esta nueva prenda o producto al body.
//para que se agreguen lo sproducto vengo a contenedor de tarjetas 
    nuevaPrenda.getElementsByTagName("button")[0].addEventListener("click", ()=> agregarAlCarrito(producto));
  });
}
//ejecuto y le envío el array de nuestras prendas:
crearTarjetasProductosInicio(prendas);
//aquí ya debieron cargarse las prendas, si damos en inspeccionar deben verse los elementos.


