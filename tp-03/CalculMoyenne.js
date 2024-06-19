// Soit le tableau suivant : let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
console.log("Array elements:");
console.log("--------------");
console.log(array);


// Calculer et afficher la moyenne des éléments du tableau ?
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

console.log("\nSum of the array elements:", sum);
console.log("Count of array elements:", array.length);

let average = sum / array.length;

console.log("\nAverage of the array elements (sum /count):", average);

