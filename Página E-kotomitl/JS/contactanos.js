const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...'; //Valor en el botón mientas se envía

    const serviceID = 'default_service'; //constante de EmailJS
    const templateID = 'template_wthe96m'; //constante de EmailJS

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar';
        const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();

        this.reset(); //Limpiar formulario después de enviarlo
      }, (err) => {
        btn.value = 'Enviar';
        alert(JSON.stringify(err));
      });
  });