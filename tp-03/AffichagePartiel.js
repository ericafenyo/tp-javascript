// Soit le tableau suivant : let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
console.log("Array elements:");
console.log("--------------");
console.log(array);

// Combiner une boucle et un test de manière à n’afficher que les entiers supérieurs à 3
console.log("Array elements greater than 3:");
console.log("--------------");
for (let i = 0; i < array.length; i++) {
  if (array[i] > 3) {
    console.log(array[i]);
  }
}

// Combiner une boucle et un test de manière à n’afficher que les entiers pairs
console.log("\nArray elements that are even:");
console.log("--------------");
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log(array[i]);
  }
}

// Combiner une boucle et un test de manière à n’afficher que les valeurs correspondant
// aux index pairs
console.log("\nArray elements at even indexes:");
console.log("--------------");
for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    console.log(array[i]);
  }
}

// Combiner une boucle et un test de manière à n’afficher que les entiers impairs
console.log("\nArray elements that are odd:");
console.log("--------------");
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 !== 0) {
    console.log(array[i]);
  }
}

