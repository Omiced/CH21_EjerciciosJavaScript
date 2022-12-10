const greatest = function (arr) {
  let mayor = 0;
  arr.forEach((numero) => {
    numero > mayor ? (mayor = numero) : (mayor = mayor);
  });
  return mayor;
};

console.log(greatest([3, 5, 7, 1, 30, 127, 6, 10, 20]));

const smaller = function (arr) {
  let menor = 0;
  arr.forEach((numero) => {
    numero < menor ? (menor = numero) : (menor = menor);
  });
  return menor;
};
console.log(smaller([-1, 3, 4, 2, -6, 10, -7]));

const numRepeated = function (arr) {};

console.log(numRepeated([1, 22, 5, 17, 10, 5, 40, 5]));
console.log(numRepeated([7, 41, 5, 7, 10, 13, 2]));
console.log(numRepeated([1, 22, 5, 14, 24, 31, 27, 15, 105]));
