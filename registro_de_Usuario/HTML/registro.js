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

        //Validacion nombre
        const nombrePattern =  /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        if (!nombrePattern.test(nombreInput.value.trim())) {
            showAlert('El nombre no es válido.');
            valid = false;
        }
        //Validacion apellido
        const apellidosPattern =  /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        if (!apellidosPattern.test(apellidosInput.value.trim())) {
            showAlert('El apellido no es válido.');
            valid = false;
        }
        //Validacion contraseña de 4 a 12 digitos
        const passwordPattern =  /^.{4,12}$/;
        if (!passwordPattern.test(passwordInput.value.trim())) {
            showAlert('La contraseña no es válida.');
            valid = false;
        }


        // Validación de correo electrónico
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            showAlert('El correo electrónico no es válido.');
            valid = false;
        }

        // Validación de número de teléfono
        const telefonoPattern = /^\d{10}$/; 
        if (!telefonoPattern.test(telefonoInput.value.trim())) {
            showAlert('El número de teléfono no es válido. Debe tener 10 dígitos.Solo se aceptan numeros');
            valid = false;
        }

        if (valid) {
            const userData = {
                nombre: nombreInput.value.trim(),
                apellidos: apellidosInput.value.trim(),
                password: passwordInput.value.trim(),
                telefono: telefonoInput.value.trim(),
                email: emailInput.value.trim(),
            };

            // Llamar a la función para crear el JSON y manejar el envío
            handleFormSubmission(userData);

            form.reset(); // eliminar los datos colocados en el formulario

            if(confirm('Se te redirigirá a Inicio')) {
                window.location.href = '';//página de inicio de sesión
            }
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