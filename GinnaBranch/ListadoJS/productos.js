const CARDS_CONTAINER = document.querySelector("#card-container");

PRODUCTOS =[ {
    "id": 1,
    "producto": "Blusa",
    "precio": 100,
    "imagen": "blusa1.webp"
},
    {
        "id": 2,
        "producto": "Blusa ",
        "precio": 200,
        "imagen":"blusa2.webp"
    },
    {
        "id": 3,
        "producto": "Chamarra",
        "precio": 300,
        "imagen": "chamarra1.webp"
    },
    {
        "id": 4,
        "producto": " Jeans",
        "precio": 400,
        "imagen": "jeans1.webp"
    },
    {
        "id": 5,
        "producto": "Jeans ",
        "precio": 500,
        "imagen": "jeans2 (1).webp"
    },
    {
        "id": 6,
        "producto": "Pijama",
        "precio": 600,
        "imagen":"pijama.webp"
    },
    {
        "id": 7,
        "producto": "Pijama",
        "precio": 700,
        "imagen": "pijama2.webp"
    },
    {
        "id": 8,
        "producto": "Short",
        "precio": 800,
        "imagen": "short1.webp"
    },
    {
        "id": 9,
        "producto": "Short ",
        "precio": 900,
        "imagen": "short2.webp"

    },
    {
        "id": 10,
        "producto": "Sudadera",
        "precio": 1000,
        "imagen": "sudadera1.webp"
    }
]

function createElements() {
    const cardObj = {
      img_section: document.createElement("img"),
      name_section: document.createElement("h3"),
      precio_section: document.createElement("p"),
      id_section: document.createElement("p"),
      
    };
    return cardObj;

  }


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
  });