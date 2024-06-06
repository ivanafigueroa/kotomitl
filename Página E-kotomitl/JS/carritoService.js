//Aquí vamos a trabajar la funcionalidad del carrito
function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("prendas"));     //primero pido que cheque si ya hay producto en la mempria 
    console.log(memoria);
    let cuenta = 0;
    if(!memoria) {
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        localStorage.setItem("prendas", JSON.stringify([nuevoProducto]));
        cuenta = 1;
    }else {
        const indiceProducto = memoria.findIndex(prenda => prenda.id === producto.id);
        console.log(indiceProducto);
        const nuevaMemoria = memoria;
        if(indiceProducto === -1) {
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
            cuenta = 1;
        }else {
            nuevaMemoria[indiceProducto].cantidad ++;
            cuenta = nuevaMemoria[indiceProducto].cantidad;
        }
        localStorage.setItem("prendas", JSON.stringify(nuevaMemoria));
    }
    actualizarNumeroCarrito();
    return cuenta;
}


function restarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("prendas"));
    const indiceProducto = memoria.findIndex(prenda => prenda.id === producto.id);
    if(memoria[indiceProducto].cantidad === 1){
        memoria.splice(indiceProducto, 1);
    }else {
        memoria[indiceProducto].cantidad --;
    }
    localStorage.setItem("prendas", JSON.stringify(memoria));
    actualizarNumeroCarrito();
}

/*toma un elemento o producto, agrega cantidad uno y lo devuelve*/

function getNuevoProductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

const cuentaCarritoElement = document.getElementById("cuenta-carrito");
function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("prendas"));
    if(memoria && memoria.length > 0){
    const cuenta = memoria.reduce((acum, current) => acum+current.cantidad, 0);
    cuentaCarritoElement.innerText = cuenta;
    console.log(cuenta);
    }else {
    cuentaCarritoElement.innerText = 0;
    }
}


actualizarNumeroCarrito();

function abrirVentana() {
    window.open('pagpago.html', 'popup', 'width=400,height=550');
}