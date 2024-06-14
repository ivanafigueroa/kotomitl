document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginUser');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const checkInput = document.getElementById('remember');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let valid = true;

        // Validación de campos vacíos
        if (!emailInput.value.trim()) {
            showAlert('El correo no pude estar vacío.');
            valid = false;
        }

        if (!passwordInput.value.trim()) {
            showAlert('La contraseña no puede estar vacía.');
            valid = false;
        }

        //Validacion contraseña de 4 a 12 digitos
        const passwordPattern =  /^(?=.*[A-Z])(?=.*\d)(?=.*[@.\-!])[A-Za-z\d@.\-!]{6,12}$/; // se añaden carácteres especiales
        if (!passwordPattern.test(passwordInput.value.trim())) {
            showAlert('Revisa el formato de tu contraseña.');
            valid = false;
        }

        // Validación de correo electrónico
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            showAlert('Revisa el formato de tu email.');
            valid = false;
        }

        if (valid) {
            const userData = {
                password: passwordInput.value.trim(),
                email: emailInput.value.trim(),
            };

            // Llamar a la función para crear el JSON y manejar el envío
            handleFormSubmission(userData);

            form.reset(); // eliminar los datos colocados en el formulario

            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
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

document.getElementById('successModalButton').addEventListener('click', () => {
    window.close();
});

// function abrirVentana() {
//     window.open('iniciosesion.html', 'popup', 'width=400,height=485');
// }

function abrirVentana() {
    const nuevaVentana = window.open('iniciosesion.html', 'popup', 'width=400, height=485');
    nuevaVentana.focus();
}