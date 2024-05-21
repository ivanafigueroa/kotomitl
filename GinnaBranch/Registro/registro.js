function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (nombre === '' || telefono === '' || email === '' || password === '') {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    var telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono)) {
        alert("Por favor, ingrese un número de teléfono válido de 10 dígitos.");
        return false;
    }

    return true; 