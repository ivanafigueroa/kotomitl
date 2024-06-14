const $imgArticles = document.querySelector("#imgArticles");
$category = document.querySelector("#category"),
$desArticle = document.querySelector("#desArticle");

$imgArticles.onsubmit = evento => {
    console.log("Subido");
};

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener las imágenes
    const imgArticles = document.getElementById('imgArticles').files;

    // Obtener la categoría seleccionada
    const category = document.getElementById('category').value;

    // Obtener la descripción de la prenda
    const desArticle = document.getElementById('desArticle').value;

    // Obtener el valor del radio button seleccionado
    const gridRadios = document.querySelector('input[name="gridRadios"]:checked').value;

    // Obtener la descripción del detalle de la prenda
    const detail = document.getElementById('detail').value;

    const titular = document.getElementById('titular').value;

    const card = document.getElementById('card').value;


    // Crear un array de imágenes
    let imgArray = [];
    for (let i = 0; i < imgArticles.length; i++) {
        imgArray.push(imgArticles[i].name); // Agrega el nombre del archivo de imagen al array
    }

    // Crear el objeto JSON con la información del formulario
    const formData = {
        imgArticles: imgArray,
        category: category,
        desArticle: desArticle,
        gridRadios: gridRadios,
        detail: detail,
        titular: titular,
        card: card
    };

    // Convertir el objeto a formato JSON
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
});