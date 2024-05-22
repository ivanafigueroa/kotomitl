document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nombreInput = document.getElementById('nombre-usuario');
    const apellidosInput = document.querySelector('input[aria-label="Username"]:nth-of-type(2)');
    const telefonoInput = document.getElementById('numero-telefono');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const checkInput = document.getElementById('check');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let valid = true;

        // Validación de campos vacíos
        if (!nombreInput.value.trim()) {
            showAlert('El campo Nombre(s) es obligatorio.');
            valid = false;
        }

        if (!apellidosInput.value.trim()) {
            showAlert('El campo Apellidos es obligatorio.');
            valid = false;
        }

        if (!telefonoInput.value.trim()) {
            showAlert('El campo Número de teléfono es obligatorio.');
            valid = false;
        }

        if (!emailInput.value.trim()) {
            showAlert('El campo Email es obligatorio.');
            valid = false;
        }

        if (!passwordInput.value.trim()) {
            showAlert('El campo Contraseña es obligatorio.');
            valid = false;
        }

        if (!checkInput.checked) {
            showAlert('Debes aceptar los términos y condiciones.');
            valid = false;
        }

        // Validación de correo electrónico
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            showAlert('El correo electrónico no es válido.');
            valid = false;
        }

        // Validación de número de teléfono
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(telefonoInput.value.trim())) {
            showAlert('El número de teléfono no es válido. Debe tener 10 dígitos.');
            valid = false;
        }

        if (valid) {
            const userData = {
                nombre: nombreInput.value.trim(),
                apellidos: apellidosInput.value.trim(),
                telefono: telefonoInput.value.trim(),
                email: emailInput.value.trim(),
            };

            // Llamar a la función para crear el JSON y manejar el envío
            handleFormSubmission(userData);
        }
    });

    function showAlert(message) {
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-danger';
        alertDiv.role = 'alert';
        alertDiv.innerText = message;
        document.body.prepend(alertDiv);

        setTimeout(() => {
            alertDiv.remove();
        }, 3000);
    }
});