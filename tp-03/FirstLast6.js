/**
 * Déclarez un tableau d’entiers
 * On calcule une valeur booléenne qui contrôle le tableau de la sorte :
 * - Elle vaut true si le tableau a au moins 1 élément et si le premier
 * élément ou le dernier élément vaut 6.
 *
 * - Elle vaut false dans les autres cas.
 *
 * Écrire l’algo avec le minimum de ligne
 */

let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let result = array.length > 0 && (array[0] === 6 || array[array.length - 1] === 6);
console.log(result);
