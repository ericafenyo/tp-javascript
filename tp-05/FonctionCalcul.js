/**
 * Améliorez votre fonction afin que cette dernière renvoie une exception dans le cas où il manque un paramètre
 * Améliorez votre fonction afin que cette dernière renvoie une exception dans le cas où un paramètre n’est pas un nombre.
 */

const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: one or more parameters is not a number";
  }
  return a + b;
};

console.log("sum(1, 2) : ", sum(1, 2));

console.log('sum(1, "hello"): ', sum(1, "hello"));

console.log("sum(1): ", sum(1));

console.log("sum(): ", sum());
