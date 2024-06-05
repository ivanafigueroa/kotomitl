//Mandamos a llamar los elementos del html
const carousel = document.querySelector(".carousel");
const box = document.querySelector(".box");
const cards = box.querySelector(".card").offsetWidth;
const bottons = document.querySelectorAll(".carousel i");
const boxChildrens = [...box.children];

//Determinamos variables y asignamos valores para el posicionamiento del cursor y para el inicio automático
let mouseSelect = false;
let isAutoPlay = true;
let startX; 
let startScrollLeft; 
let timeoutId;

// Obtenemos la cantidad de tarjetas que pueden caber en el carrusel
let cardsView = Math.round(box.offsetWidth / cards);

//Efecto infinito
// Colocamos las tarjetas finales al inicio
boxChildrens.slice(-cardsView).reverse().forEach(card => {
    box.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Colocamos las tarjetas iniciales al final
boxChildrens.slice(0, cardsView).forEach(card => {
    box.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Desplazamiento del carrusel para poder ocultar las primeras tarjetas colocadas
box.classList.add("no-transition");
box.scrollLeft = box.offsetWidth;
box.classList.remove("no-transition");

// Agregamos eventos "click" para poder desplazar el carrusel a la izquierda o derecha
bottons.forEach(btn => {
    btn.addEventListener("click", () => {
        box.scrollLeft += btn.id == "left" ? -cards : cards;
    });
});


const startCarrousel = (e) => {
    mouseSelect = true;
    box.classList.add("scrollCarrousel");
    // Registra la posición inicial del cursor y el scroll del carrusel
    startX = e.pageX;
    startScrollLeft = box.scrollLeft;
}

const scrollCarrousel = (e) => {
     // Condición si no detecta el cursor en el carrusel
    if(!mouseSelect) return;
    // Actualiza la posición del movimientp del carrusel según el movimiento del cursor
    box.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const stopCarrousel = () => {
    mouseSelect = false;
    box.classList.remove("scrollCarrousel");
}

const infiniteScroll = () => {
    // Desplazamiento de las tarjetas iniciales, al final
    if(box.scrollLeft === 0) {
        box.classList.add("no-transition");
        box.scrollLeft = box.scrollWidth - (2 * box.offsetWidth);
        box.classList.remove("no-transition");
    }
    // Desplazamiento de las tarjetas finales, al inicio
    else if(Math.ceil(box.scrollLeft) === box.scrollWidth - box.offsetWidth) {
        box.classList.add("no-transition");
        box.scrollLeft = carousel.offsetWidth;
        box.classList.remove("no-transition");
    }

    // Borra el tiempo que estuvo parado el carrusel y comienza el movimiento si el cursor no está sobre el carrusel
    clearTimeout(timeoutId);
    if(!carousel.matches(":hover")) autoPlay();
}

// Movimiento automático del carrousel
const autoPlay = () => {
    // Termina si la ventana es menor que 800 o si isAutoPlay es falso
    if(window.innerWidth < 800 || !isAutoPlay) return; 
    // Comienza el movimiento automatico del carrusel despues de 2.5s
    timeoutId = setTimeout(() => box.scrollLeft += cards, 2000);
}

// Agregamos eventos al cursor para inicializar las funciones dependiedo de su posición en el carrusel
autoPlay();
box.addEventListener("mousedown", startCarrousel);
box.addEventListener("mousemove", scrollCarrousel);
document.addEventListener("mouseup", stopCarrousel);
box.addEventListener("scroll", infiniteScroll);
carousel.addEventListener("mouseenter", () => clearTimeout(timeoutId));
carousel.addEventListener("mouseleave", autoPlay);
