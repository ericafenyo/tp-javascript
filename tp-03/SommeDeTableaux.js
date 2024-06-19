// Soit le tableau 1 suivant:[1,15,-3,0,8,7,4,-2,28,7,-1,17,2,3,0,14,-4];
// Soit le tableau 2 suivant:[-1,12,17,14,5,-9,0,18,-6,0,4,-13,5,7,-2,8,-1];

let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];

// Créer un tableau qui contient la somme des 2 précédents tableaux

let arraySum = [];
for (let i = 0; i < array1.length; i++) {
  arraySum.push(array1[i] + array2[i]);
}

console.log("Array 1 elements:");
console.log("--------------");
console.log(array1);

console.log("\nArray 2 elements:");
console.log("--------------");
console.log(array2);

console.log("\nArray sum elements:");
console.log("--------------");
console.log(arraySum);
