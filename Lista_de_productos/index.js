const CARDS_CONTAINER = document.querySelector("#card-container");

PRODUCTOS =[ {
    "id": 1,
    "producto": "Blusa",
    "precio": 100,
},
    {
        "id": 2,
        "producto": "Pantalon",
        "precio": 200,
    },
    {
        "id": 3,
        "producto": "Camisa",
        "precio": 300,
    },
    {
        "id": 4,
        "producto": "Zapatos",
        "precio": 400,
    },
    {
        "id": 5,
        "producto": "Short",
        "precio": 500,
    },
    {
        "id": 6,
        "producto": "Jeans",
        "precio": 600,
    },
    {
        "id": 7,
        "producto": "Chaqueta",
        "precio": 700,
    },
    {
        "id": 8,
        "producto": "Sudadera",
        "precio": 800,
    },
    {
        "id": 9,
        "producto": "Vestido",
        "precio": 900,
    },
    {
        "id": 10,
        "producto": "Abrigo",
        "precio": 1000,
    }
]


function createElements() {
    const cardObj = {
      name_section: document.createElement("h3"),
      precio_section: document.createElement("p"),
      id_section: document.createElement("p"),
      img_section: document.createElement("img")
    };
    return cardObj;
  }


  function injectData(obj, producto) {
    obj.name_section.textContent = producto.producto;
    obj.precio_section.textContent = producto.precio;
    obj.id_section.textContent = producto.id;
    obj.img_section.src = "${user.image}";

    renderCard(obj);
  }
  
  function renderCard(cardObj) {
    const card = document.createElement("div");
    card.append(
      cardObj.name_section,
      cardObj.precio_section,
      cardObj.id_section,
      cardObj.img_section,
      );
    card.className = "div-creado";
    CARDS_CONTAINER.appendChild(card);
  }
  
  PRODUCTOS.forEach((producto) => {
    const cardData = createElements();
    injectData(cardData, producto);
  });