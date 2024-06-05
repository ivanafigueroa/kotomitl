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

// update password
document.addEventListener("DOMContentLoaded", () => {
    const updatePasswordForm = document.getElementById('updatePasswordForm');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmNewPasswordInput = document.getElementById('confirmNewPassword');
    const passwordErrorDiv = document.getElementById('passwordError');

    updatePasswordForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const newPassword = newPasswordInput.value;
        const confirmNewPassword = confirmNewPasswordInput.value;
        const passwordValidate = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[@!-.]).{6,12}$/;

        if(newPassword !== confirmNewPassword) {
            alert("Las contraseñas no coinciden.");
        } else if(!passwordValidate.test(newPassword)) {
            alert("Tu nueva contraseña debe contener un número, una mayúscula, un carácter especial, y tener entre 6 y 12 dígitos.");
        } else {
            passwordErrorDiv.textContent = "";
            alert("Tu contraseña ha sido actualizada.");

            localStorage.setItem('newPassword', newPassword);

            document.getElementById('updatePasswordForm').reset();

        }       
    })
})