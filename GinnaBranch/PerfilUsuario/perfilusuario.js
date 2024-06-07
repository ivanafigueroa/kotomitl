//Abrir un html dentro de un div
function abrir_pagina(url, id){
    const contentDiv = document.getElementById(id);
    // Realizar una solicitud para obtener el contenido de la página
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo abrir la página');
            }
            return response.text();
        })
        .then(data => {
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('Error al abrir la página:', error);
        });
}

// Abrir las páginas al cargar la página, si se necesita otra solo se copia/pega y cambian los nombres.
document.addEventListener("DOMContentLoaded", function() {
    abrir_pagina('cart.html', 'list-change-carrito');
});


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