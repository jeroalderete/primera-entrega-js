// variable fija de costo de envio

const costoEnvio = 500;

// Definicion de objetos
//creamos la clase Productos con los atributos cod nomb cant y precio

class Producto {
  constructor(nombre, cantidad, precio) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
  }
}

/* Instanciamos la clase */

const bata1 = new Producto("BATA INVERNAL VOGA BLANCA", 4, 20000);
const bata2 = new Producto("BATA CORTA ARD", 3, 18000);
const bata3 = new Producto("BATA LARGA MISUR NEGRA", 2, 22000);
const bata4 = new Producto("BATA CORTA OBI NEGRA", 2, 16000);
const bata5 = new Producto("BATA CORTA NEGRA AMUR", 5, 24000);
const bata6 = new Producto("BATA INVERNAL VOLGA BLANCA", 6, 25000);
const bata7 = new Producto("VESTIDO LARGO MISURI", 3, 23000);
const vestido1 = new Producto("VESTIDO LARGO MISURI", 5, 24000);
const vestido2 = new Producto("VESTIDO VOGUE", 9, 19000);

// CREO LOS  ARRAY DE PRODUCTO Y STOCK

let productosEnStock = [
  "BATA INVERNAL VOGA BLANCA",
  "BATA CORTA ARD",
  "BATA LARGA MISUR NEGRA",
  "BATA CORTA OBI NEGRA",
  "VESTIDO LARGO MISURI BLANCO",
  "BATA CORTA NEGRA AMUR",
  "BATA INVERNAL VOLGA BLANCA",
  "VESTIDO VOGUE",
  "BATA SEMILARGA BUR NEGRA",
];

/* ARRAY DE STOCK  */

let stock = [
  bata1,
  bata2,
  bata3,
  bata4,
  bata5,
  bata6,
  bata7,
  vestido1,
  vestido2,
];

//declaro una Funcion para calcular el valor segun la cantidad de unidades 

function precioCantidad(valor) {
  let cantidad = parseInt(
    prompt(
      `Seleccionaste ${stock[valor - 1].nombre}, cuantas unidades quieres? `
    )
  );
  return cantidad * stock[valor - 1].precio;
}

// OPCIONES CLIENTE

// Informamos la cantidad de productos disponibles
alert(

  // utilizo el metodo lenght para decirle al usuario cuantos productos tengo disponibles

  `Hola! Tenemos ` +
    productosEnStock.length +
    ` productos diferentes para ofrecerte.`
);

// le pido al usuario que ingrese su nombre

let nombreCliente = prompt(
  "Bienvenida/o a Batacazo ! Cuentanos como es tu nombre:"
);

/* creo un menu de opciones para que el usuario elija que producto desea llevar  */

let eleccionCliente = parseInt(
  prompt(`Hola ${nombreCliente}, gracias por elegirnos! Selecciona la opcion de lo que deseas comprar:
  1. para elegir nuestras batas.
  2. para elegir nuestros vestidos.
  3. para salir.`)
);

if (eleccionCliente === 1) {
  opcionCliente = parseInt(
    prompt(`Ahora ${nombreCliente} dinos que bata quieres:
    1. para ${bata1.nombre} a $${bata1.precio}.
    2. para ${bata2.nombre} a $${bata2.precio}.
    3. para ${bata3.nombre} a $${bata3.precio}.
    4. para ${bata4.nombre} a $${bata4.precio}.
    5. para ${bata5.nombre} a $${bata5.precio}.
    6. para ${bata6.nombre} a $${bata6.precio}.
    7. para ${bata7.nombre} a $${bata7.precio}.
    `)
  );
} else if (eleccionCliente === 2) {
  opcionCliente =
    4 +
    parseInt(
      prompt(`Ahora ${nombreCliente} dinos que vestido quieres:
      1. para ${vestido1.nombre} a $${vestido1.precio}.
      2. para ${vestido2.nombre} a $${vestido2.precio}.`)
    );
} else if (eleccionCliente === 3) {
  // Mensaje de salida
  mensajeSalida = prompt(
    "Muchas gracias por visitar Batacazo ! te esperamos pronto !"
  );
}

// Ofrecer envio a domicilio. Detallar pedido y costo
if (eleccionCliente == 1 || eleccionCliente == 2) {
  let envio = prompt(
    `Quieres envio a domicilio? Tendra un costo extra de  $${costoEnvio}, seleccione:
    1. para obtener envio a domicilio.
    2. para retirar en el local.`
  );

  if (envio == 1) {
    let valorTotalEnvio = precioCantidad(opcionCliente) + costoEnvio;
    alert(
      `Su pedido fue realizado con éxito. Puede pasar a retirar sus ${
        stock[opcionCliente - 1].nombre
      } a partir de mañana abonando en tienda $ ${valorTotalEnvio}.`
    );
  } else if (envio == 2) {
    let valorTotal = precioCantidad(opcionCliente);
    alert(
      `Su pedido fue realizado con éxito. Puede pasar a retirar sus ${
        stock[opcionCliente - 1].nombre
      } a partir de mañana abonando en tienda $ ${valorTotal}.`
    );
  } else {
    while (envio != 1 && envio != 2 && eleccionCliente != 3) {
      let envio2 = undefined;
      envio2 = parseInt(
        prompt(`El ${envio} no es un valor correcto, por favor elige uno de estos 2:
        1. para obtener envio a domicilio.
        2. para retirar en el local.`)
      );
      envio = envio2;
    }
  }
}

// fin del simulador
