/*
 * Créer une fonction qui vérifie le contenu d’un tableau
 *
 * - Si le tableau ne contient que des nombres alors la fonction retourne true
 * - Sinon la fonction retourne false
 */

const isAllNumbers = (array) => {
  // Return false if the array is empty
  if (array.length === 0) {
    return false;
  }
  return array.every((element) => typeof element === "number");
};

// Réalisez 3 appels à cette fonction avec :

// - Un tableau contenant des nombres

console.log(isAllNumbers([1, 2, 3, 4, 5]));

// -Un tableau contenant des nombres et une chaine de caractères

console.log(isAllNumbers([1, 2, 3, 4, 5, "hello"]));

// Un tableau vide.
console.log(isAllNumbers([]));

