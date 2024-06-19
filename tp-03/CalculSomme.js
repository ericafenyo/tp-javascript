// Déclarer une variable contenant une valeur numérique entière
const num = 10;
console.log("number = ", num);

// Utiliser une boucle pour calculer la somme de tous les nombres de 1 à cette valeur

let sum = 0;
for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log("Sum of numbers from 1 to ", num, " = ", sum);
