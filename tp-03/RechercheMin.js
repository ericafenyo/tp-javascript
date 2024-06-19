// Soit le tableau suivant : let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
console.log("Array elements:");
console.log("--------------");
console.log(array);

// Rechercher le plus petit élément du tableau
let min = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}

console.log("\nMinimum element in the array:", min);

