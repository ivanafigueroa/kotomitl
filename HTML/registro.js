const botonEnviar = document.getElementsByClassName('.btn btn-primary');

const validacion = (e) => {
    e.preventDefault();
    const nombreUsuario = document.getElementsByClassName('.nombre-usuario');
    const direccionCorreo= document.getElementById('#emailInput');
    const numeroTelefono = document.getElementById('#numero-telefono');
    const contraseña = document.getElementById('#passwordInput');

    if(nombreUsuario.value===""){
        alert("Por favor,escribe tu nombre de usurio");
        usuario.focus();
        return false;
    }
    if (direccionCorreo.value === ""){
        alert("Por favor,escribasu correo electrónico");
        direccionCorreo.focus();
        return false;
    }

    if(numeroTelefono.value===0){
        alert("Por favor,ingresa tu número telefonico");
        numeroTelefono.focus();
        return false;
    }
    return true;
}
const emailValido =direccionCorreo =>{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(direccionCorreo);
}


subitBtn.addEventListener('click',validate);