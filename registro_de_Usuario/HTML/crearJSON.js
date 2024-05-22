function handleFormSubmission(userData) {
    const userJson = JSON.stringify(userData);
    console.log('Usuario registrado:', userJson);

   

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