const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// Las pizzas que tengan un id impar

const idImpar = pizzas.filter((pizza) => pizza.id % 2 !== 0);
console.log("Pizzas con ID Impar:");

idImpar.forEach((pizza) => console.log(`${pizza.nombre} ID: ${pizza.id}`));

console.log("========================================================");
console.log("¿Hay alguna pizza que valga menos de $600?");

const seisciento = pizzas.find((pizza) => pizza.precio < 600);

console.log(
  `Si y es la ${seisciento.nombre} con un precio de ${seisciento.precio}`
);

console.log("========================================================");

console.log("El nombre de cada pizza con su respectivo precio.");

pizzas.forEach((pizza) => {
  console.log(`Nombre: ${pizza.nombre}, Precio: ${pizza.precio}`);
});

console.log("========================================================");

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

console.log("Todos los ingredientes de cada pizza");

pizzas.forEach((pizza) => {
  console.log(`Nombre: ${pizza.nombre},\nIngredientes: ${pizza.ingredientes}`);
});
