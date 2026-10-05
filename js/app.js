const conceptos = [
    {
        nombre: "RESPETO",
        significado: "Reconocer y valorar a todas las personas, sus ideas, límites y derechos dentro del ámbito laboral.",
        imagen: "img/respeto.jpeg"
    },
    {
        nombre: "IGUALDAD",
        significado: "Las mismas oportunidades, sin discriminación",
        imagen: "img/igualdad.jpeg"
    },
    {
        nombre: "DIVERSIDAD",
        significado: "Distintas entidades, el mismo valor",
        imagen: "img/diversidad.jpeg"
    },
    {
        nombre: "DERECHOS",
        significado: "Un trato digno y una vida libre de violencia",
        imagen: "img/derechos.jpeg"
    }
];

// Capturar el ID (ELEMENTO HTML)
const contenedor = document.getElementById("lista-conceptos");

// Recorrer el array de objetos MAP
 conceptos.map(function(concepto){ 
    contenedor.innerHTML += `
          
        <div class="concepto" style="background-color: ${concepto.color} ;">
            <h2>${concepto.nombre}</h2>
            <img src="${concepto.imagen}" alt="${concepto.nombre}">
            <p>${concepto.significado}</p>
        </div>
    `
})
