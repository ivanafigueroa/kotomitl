document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validateForm);
})
//evita que se envíe el formulario
function validateForm(event) {
    event.preventDefault();

    if(!validateTitular()) return false;
    if(!validateCard()) return false;
    if(!validateMonth()) return false;
    if(!validateYear()) return false;
    if(!validateCvc()) return false;

    // if(!validateEntrega()) return false;
    //guarda los datos en local storage
    if(document.getElementById("saveData").checked) {
        saveFormData();
    }
 // Mostrar el modal de agradecimiento
 const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
 modal.show();

 // Resetear el formulario
 document.getElementById("formulario").reset();

 return true;
}

    function validateTitular() {
        const titular = document.getElementById("titular").value;
        if(titular.split(" ").length < 2) {
            alert("El nombre del titular debe tener al menos nombre y apellido.");
            return false;
        }
        return true;
    }

    function validateCard() {
        const card = document.getElementById("card").value;
        if(isNaN(card)) {
            alert("La tarjeta debe contener únicamente números");
        } else if(card.length !== 16) {
            alert("La tarjeta debe contener 16 dígitos.");
            return false;
        }
        return true;
    }

    function validateMonth() {
        const month = document.getElementById("month").value;
        const currentMonth = new Date().getMonth() + 1;
        if(isNaN(month) || month < 1 || month > 12 || (month < currentMonth && document.getElementById("year").value == new Date().getFullYear() % 100)) {
            alert("El mes de vencimiento no es válido.");
            return false;
        }
        return true;
    }

    function validateYear() {
        const year = document.getElementById("year").value;
        const currentYear = new Date().getFullYear() % 100;
        if(isNaN(year) || year < currentYear) {
            alert("El año de vencimiento no es válido.")
            return false;
        }
        return true;
    }

    function validateCvc() {
        const cvc = document.getElementById("cvc").value;
        if(cvc.length !== 3 || isNaN(cvc)) {
            alert("El CVV/CVC debe tener 3 dígitos.")
            return false;
        }
        return true;
    }

    // function validateEntrega() {
    //     const recibe = document.getElementById('recibe').value;
    //     const linea = document.getElementById("del").value;
    //     const metro = document.getElementById("direc").value;
    //     const ref = document.getElementById("ref").value;

    //     if(recibe.trim() == '' || linea.trim() == '' || metro.trim() == '' || ref.trim() == '') {
    //         alert("Todos campos de Entrega son necesarios.");
    //         return false;
    //     }
    //     return true;
    // }

//guardar la data del usuario
function saveFormData() {
    const formData = {
        titular: document.getElementById("titular").value,
        card: document.getElementById("card").value,
        month: document.getElementById("month").value,
        year: document.getElementById("year").value
        // recibe: document.getElementById("recibe").value,
        // del: document.getElementById("del").value,
        // metro: document.getElementById("direc").value,
        // ref: document.getElementById("ref").value
        //se omite CVV/CVC por seguridad
    };

    const formDataJSON = JSON.stringify(formData);
    //enviar la data
    localStorage.setItem("formData", formDataJSON);
}  