// ESTO ES SOLO UNA PRUEBA
function cargarPaginaCarrito() {
    // URL de la página del carrito, este carrito no es el definitivo, esto es una prueba nada mas
    var urlCarrito = '/Carrito/carrito.html';
    
    // Realizar una solicitud para obtener el contenido de la página del carrito
    fetch(urlCarrito)
    .then(response => response.text())
    .then(data => {
        // Crear un contenedor temporal para el contenido de la página del carrito
        var tempContainer = document.createElement('div');
        tempContainer.innerHTML = data;

        // Obtener el contenido de la página del carrito
        var carritoContent = tempContainer.querySelector('#list-change-carrito').innerHTML;

        // Insertar el contenido en la sección "list-change-carrito" de la página actual
        document.getElementById('list-change-carrito').innerHTML = carritoContent;
    })
    .catch(error => console.error('Error al cargar la página del carrito:', error));
}
