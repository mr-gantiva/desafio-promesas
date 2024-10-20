// Requerimientos 1, 2, 3 y 4
const recuperarDatos = async () => {
  let url = "https://jsonplaceholder.typicode.com/photos";

  try {
    let response = await fetch(url); // Función asincrona
    let datos = await response.json();
    // console.log(datos);
    datos.map((element) => {
      if (element.id <= 20) {
        console.log(`${element.id} - ${element.title}`);
      }
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

recuperarDatos();

// Requerimiento 5
//Crear una función que retorne una promesa después de tres (3) segundos utilizando
//setTimeout. El mensaje a retornar debe ser un string que indique: “Información
//Enviada”.
const enviarInformacion = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Enviando información");
    }, 3000);
  });
};

// Requerimiento 6

let invocarMensaje = async () => {
  let respuesta = await enviarInformacion();
  console.log(respuesta);
};

// Invocamos a la función invocarMensaje
invocarMensaje();
