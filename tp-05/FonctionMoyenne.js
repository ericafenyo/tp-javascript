/**
 * Améliorez votre fonction afin que cette dernière renvoie une exception dans le cas où le paramètre reçu par la fonction n’est pas un nombre
 *
 * Améliorez votre fonction afin que cette dernière renvoie une exception dans le cas où un élément du tableau n’est pas un nombre
 *
 * Mettez en œuvre plusieurs appels différents pour tester :
 * - Le cas avec un tableau nombre
 * - Le cas avec un tableau contenant des nombres et une chaine de caractères
 * - Le cas avec un paramètre qui n’est pas un tableau
 *
 * Mettez en place les blocs try / catch afin de sécuriser les appels.
 */

const getAverage = (array) => {
  if (array.length === 0) {
    throw "Error: the array contains no elements";
  }

  if (!Array.isArray(array)) {
    throw "Error: the parameter is not an array";
  }
  if (!array.every((element) => typeof element === "number")) {
    throw "Error: the array contains non-numeric elements";
  }
  return array.reduce((accumulator, currentValue) => accumulator + currentValue) / array.length;
};

try {
  console.log("getAverage([1, 2, 3, 4, 5]) : ");
  console.log(getAverage([1, 2, 3, 4, 5]));
} catch (error) {
  console.error(error);
}

console.log("\n-------------------\n");

try {
  console.log("getAverage([1, 2, 3, 4, 5, 'hello']) : ");
  console.log(getAverage([1, 2, 3, 4, 5, "hello"]));
} catch (error) {
  console.error(error);
}

console.log("\n-------------------\n");

try {
  console.log("getAverage('hello') : ");
  console.log(getAverage("hello"));
} catch (error) {
  console.error(error);
}

console.log("\n-------------------\n");

try {
  console.log("getAverage([]) : ");
  console.log(getAverage([]));
} catch (error) {
  console.error(error);
}
