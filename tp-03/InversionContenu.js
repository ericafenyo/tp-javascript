// Soit le tableau suivant : let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Créer un tableau arrayCopy et copier tous les éléments de array dans arrayCopy mais
// dans l’ordre inverse.

let arrayCopy = [];
for (let i = array.length - 1; i >= 0; i--) {
  arrayCopy.push(array[i]);
}

// Afficher l’ensemble des éléments des 2 tableaux
console.log("Array elements:");
console.log("--------------");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log("\nArray copy elements:");
console.log("--------------");

for (let i = 0; i < arrayCopy.length; i++) {
  console.log(arrayCopy[i]);
}

