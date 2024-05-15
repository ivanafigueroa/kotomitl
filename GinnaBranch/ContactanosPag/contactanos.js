// Función para validar el formulario
function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('inputName').value.trim();
    var telefono = document.getElementById('inputPhone').value.trim();
    var email = document.getElementById('inputEmail').value.trim();
    var mensaje = document.getElementById('inputMessagge').value.trim();

    // Expresiones regulares para validar formato de teléfono y email
    var telefonoReg = /^\d{10}$/;
    var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar campos
    if (nombre === '' || telefono === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }
    
    if (!telefonoReg.test(telefono)) {
        alert('Por favor, introduce un número de teléfono válido.');
        return;
    }

    if (!emailReg.test(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    document.getElementById('inputName').value = '';
    document.getElementById('inputPhone').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputMessagge').value = '';

    alert('¡Formulario enviado correctamente!');
}

// Agregar un event listener al formulario para capturar el evento de envío
document.querySelector('form').addEventListener('submit', validarFormulario);
