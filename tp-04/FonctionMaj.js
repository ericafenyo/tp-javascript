// Créer une fonction qui prend en paramètre une chaine de caractères.

// Cette fonction retourne la chaine de caractères passée en paramètre avec la première
// lettre en majuscule.

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};


console.log("capitalize(\"english\") -> ", capitalize("english"));
