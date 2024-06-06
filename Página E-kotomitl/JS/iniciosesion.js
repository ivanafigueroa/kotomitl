document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const checkInput = document.getElementById('check');

   

    form.addEventListener('submit', (e) => {
        e.preventDefault();


        // Validación de campos vacíos
        

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



        //Validacion contraseña de 4 a 12 digitos
        const passwordPattern =  /^(?=.*[A-Z])(?=.*\d)(?=.*[@.\-!])[A-Za-z\d@.\-!]{6,12}$/; // se añaden carácteres especiales
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

        if (valid) {
            const userData = {
                password: passwordInput.value.trim(),
                email: emailInput.value.trim(),
                referencias: referencias
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
function abrirVentana() {
    window.open('iniciosesion.html', 'popup', 'width=400,height=485');
}