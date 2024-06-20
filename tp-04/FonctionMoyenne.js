/**
 * Créer une fonction qui calcule et retourne la moyenne d’un tableau passé en paramètre.
 *
 * Cette fonction doit retourner un message d’erreur dans le cas où un élément du tableau n’est pas un nombre
 */

const getAverage = (array) => {
  // Return 0 if the array is empty
  if (array.length === 0) {
    return 0;
  }
  // Return an error message if an element in the array is not a number
  if (!array.every((element) => typeof element === "number")) {
    return "Error: the array contains non-numeric elements";
  }
  return array.reduce((accumulator, currentValue) => accumulator + currentValue) / array.length;
};

// Réalisez 3 appels à cette fonction avec :

// - Un tableau contenant des nombres

console.log(getAverage([1, 2, 3, 4, 5]));

// - Un tableau vide. Que se passe-t-il dans ce second cas ? Faites-en sorte que
// votre fonction retourne 0 dans le cas où le tableau est vide.

console.log(getAverage([]));

// - Une chaine de caractères. Que se passe-t-il dans ce troisième cas ?
console.log(getAverage(["hello"]));

