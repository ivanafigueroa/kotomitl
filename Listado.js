document.addEventListener("DOMContentLoaded", function() {

let PRODUCTS_LIST = [];

//Llamar a la base de datos
fetch("./Raquel.json")
      .then(response => response.json())
      .then(data => {
            PRODUCTS_LIST = data;
            renderCard(PRODUCTS_LIST);

      })



//Mostrar las prendas
function renderCard(selectProducts) {

    const catalogueFragment = document.createDocumentFragment();

    selectProducts.forEach(clothing => {
   
        const divCol = document.createElement("div")
        divCol.classList.add("col");

        const divCardH = document.createElement("div");
          divCardH.classList.add("card");

        const imgClothing = document.createElement("img");
        imgClothing.src = `${clothing.imagen}`;
        imgClothing.classList.add("imagen-clothing");
        imgClothing.alt =`${clothing.prenda}`;

        const divCardProduct = document.createElement("div");
        divCardProduct.classList.add("card-product");

        const hCardTitle = document.createElement("h5");
        hCardTitle.classList.add("card-title");
        hCardTitle.textContent = `${clothing.prenda}`;

        const pCardText = document.createElement("p");
        pCardText.classList.add("card-text");
        pCardText.textContent = `${clothing.descripcion}`;

        const pCardPrice = document.createElement("p");
        pCardPrice.classList.add("card-price");
        pCardPrice.textContent = `$${clothing.precio}`;

        const buttonAdd = document.createElement("button");
        buttonAdd.classList.add("add-product");
        buttonAdd.setAttribute("id", `${clothing.id}`);
        buttonAdd.textContent = "Agregar al carrito";

        divCol.appendChild(divCardH);

        divCardH.appendChild(imgClothing);
        divCardH.appendChild(divCardProduct);

        divCardProduct.appendChild(hCardTitle);
        divCardProduct.appendChild(pCardText);
        divCardProduct.appendChild(pCardPrice);
        divCardProduct.appendChild(buttonAdd);
/*
                <div class="card h-100">
                    <img src="${clothing.imagen}" class="imagen-clothing" alt="${clothing.prenda}">
                    <div class="card-product">
                        <h5 class="card-title">${clothing.prenda}</h3>
                        <p class="card-text">${clothing.descripción}</p>
                        <p class="card-price">$${clothing.precio}</p>
                        <button class="add-product" id="${clothing.id}">Agregar al carrito</button>
                    </div>
                </div>
        `;
        */
        catalogueFragment.appendChild(divCol);
    });
    const colProducts = document.querySelector("#row.row-cols-4 row-cols-md-3 g-4");
    colProducts.appendChild(catalogueFragment);
}

});

/*
function refreshAddBotton() {
    addBotton = document.querySelectorAll(".add-product");

    addBotton.forEach(botton => {
        botton.addEventListener("click", addShopingCart);
    });
}



let clothingOnCard;
let clothingOnCardSave = localStorage.getItem("clothing-on-card");

if (clothingOnCardSave) {
    clothingOnCard = JSON.parse(clothingOnCardSave);
    refreshNumbert();
} else {
    clothingOnCard = [];
}



/*
  function injectData(obj, producto) {
    obj.img_section.src = `./Assets/${producto.imagen}`;
    obj.name_section.textContent = producto.producto;
    obj.precio_section.textContent = `Precio: $ ${producto.precio}`;
    obj.id_section.textContent = `id: ${producto.id}`;
    

    renderCard(obj);
  }
  
  function renderCard(cardObj) {
    const card = document.createElement("div");
    card.append(
      cardObj.img_section,
      cardObj.name_section,
      cardObj.precio_section,
      cardObj.id_section,
    
      );
    card.className = "div-creado";
    CARDS_CONTAINER.appendChild(card);
  }
  
  PRODUCTOS.forEach((producto) => {
    const cardData = createElements();
    injectData(cardData, producto);
  }); */