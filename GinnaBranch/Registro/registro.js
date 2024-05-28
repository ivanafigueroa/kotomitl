document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir la acción predeterminada del formulario
    
    // Obtener los valores del formulario
    var nombre = document.getElementById("nombre-usuario").value.trim();
    var apellidos = document.getElementById("apellidos").value.trim();
    var telefono = document.getElementById("numero-telefono").value.trim();
    var email = document.getElementById("emailInput").value.trim();
    var password = document.getElementById("passwordInput").value.trim();
    var tycCheck = document.getElementById("tycCheck").checked;
  
    // Validación
    if (nombre === "" || apellidos === "" || telefono === "" || email === "" || password === "" || !tycCheck) {
      alert("Por favor, complete todos los campos y acepte los términos y condiciones.");
    } else if (!validateEmail(email)) {
      alert("Por favor, introduzca una dirección de correo electrónico válida.");
    } else {
      alert("¡Datos correctos! El registro se realizará ahora.");
      // Aquí podrías agregar código para enviar el formulario a través de AJAX o realizar otras acciones
      // En este ejemplo, simplemente mostramos la alerta de que los datos son correctos
    }
  });
  
  // Función para validar el formato de correo electrónico
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  