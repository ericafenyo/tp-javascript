/**
 * Créer une fonction qui prend en paramètre une chaine de caractères.
 *
 * Cette fonction retourne cette chaine de caractères dans laquelle chaque mot a sa
 * première lettre mis en majuscule
 *
 * Exemple :
 * - Si je passe à cette fonction la chaine de caractères "Bonjour tout le monde"
 * - La fonction retourne alors "Bonjour Tout Le Monde"
 *
 * Astuce : Cette fonction utilisera la fonction précédente pour la mise en majuscule de la première lettre de chaque mot.
 */

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const capitalizeWords = (string) => {
  return string.split(" ").map(capitalize).join(" ");
};

console.log("capitalizeWords(\"Bonjour tout le monde\")" ,capitalizeWords("Bonjour tout le monde")); 
