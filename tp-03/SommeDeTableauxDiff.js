// Soitletableau1suivant:[1,15,-3,0,8,7,4,-2,28,7,-1,17,2,3,0,14,-4];
// Soit le tableau 2 suivant : [-1, 12, 17, 14, 5, -9, 0, 18] ;
// Créer un tableau qui contient la somme des 2 précédents tableaux. Attention à tenir compte de la différence de taille des tableaux.

let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18];
let arraySum = [];

for (let i = 0; i < array1.length; i++) {
  if (i < array2.length) {
    arraySum.push(array1[i] + array2[i]);
  } else {
    arraySum.push(array1[i]);
  }
}

console.log("Array sum elements:");
console.log(arraySum);
