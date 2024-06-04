function handleFormSubmission(userData) {
    const userJson = JSON.stringify(userData);
    console.log('Usuario registrado:', userJson);

    // Guardar los datos en localStorage
    localStorage.setItem('user', userJson);

    // Mostrar una alerta de éxito (opcional)
    const successAlert = document.createElement('div');
    successAlert.className = 'alert alert-success';
    successAlert.role = 'alert';
    successAlert.innerText = '¡Registro exitoso!';
    document.body.prepend(successAlert);

    setTimeout(() => {
        successAlert.remove();
    }, 3000);
}

// Función para leer los datos del usuario desde localStorage
function getUserFromLocalStorage() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
        const userData = JSON.parse(userJson);
        console.log('Datos del usuario recuperados:', userData);
        return userData;
    } else {
        console.log('No hay datos de usuario guardados en localStorage.');
        return null;
    }
}