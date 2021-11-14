//Elmentos del DOM
let button = document.getElementById("button");
let textSelect = document.getElementById("textSelect");
let textoP = document.getElementById("texto");

/** 
//Expresiones
let aritmetica = new RegExp(
  "([0-9]+\\+[0-9]+)|" +
    "([0-9]+\\-[0-9]+)|" +
    "([0-9]+\\*[0-9]+)|" +
    "([0-9]+\\/[0-9]+)"
);

let asignacion = new RegExp("[a-zA-Z]+=[0-9]+");

let relacional = new RegExp(
  "([0-9]+>[0-9]+)|" +
    "([0-9]+<[0-9]+)|" +
    "([0-9]+>=[0-9]+)|" +
    "([0-9]+<=[0-9]+)|" +
    "([0-9]+==[0-9]+)|"
);

let logicos = new RegExp(
  "((TRUE|true|FALSE|false)&&(TRUE|true|FALSE|false))|" +
    "((TRUE|true|FALSE|false)\\|\\|(TRUE|true|FALSE|false))|" +
    "((TRUE|true|FALSE|false)!=(TRUE|true|FALSE|false))|" +
    "((TRUE|true|FALSE|false)==(TRUE|true|FALSE|false))|"
);

let alfanumerica = new RegExp("([a-zA-Z]+[0-9]*[a-zA-Z]*[0-9]*)+"); 

*/
textSelect.addEventListener("change", (e) => {
  switch (Number(e.target.value)) {
    case 1:
      textoP.innerHTML = ""+
        "Expresion Relacional <br>" +
        "Utilizada en mi proyecto para compara los precios de los videojuegos.";
      break;

    case 2:
      textoP.innerHTML = ""+
        "Expresion Aritmetica <br>" +
        "Utilizada para calcular el numnero de resultados optenidos";
      break;

    case 3:
      textoP.innerHTML = ""+
        "Expresion de asignacion <br>" +
        "Utilizada para la creacion de objetos para su posterior tratamiento.";

      break;

    case 4:
      textoP.innerHTML = ""+
        "Expresión logica<br>" +
        "Utilizada para las condionales dentro del programa.";

      break;
    default:
      textoP.innerHTML = "Expresion sin seleccionar";
      break;
  }
});
