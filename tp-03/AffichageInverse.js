// Soit le tableau suivant : let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Afficher l’ensemble des éléments du tableau grâce à une boucle
console.log("Array elements:");
console.log("--------------");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Afficher l’ensemble des éléments dans l’ordre inverse du tableau
console.log("\nArray elements in reverse order:");
console.log("--------------");
for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

// Créer un tableau arrayCopy, copie du tableau array.
let arrayCopy = array.slice();
console.log("\nArray copy:");
console.log("--------------");
console.log(arrayCopy);
