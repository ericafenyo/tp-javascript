// Créez une fonction qui prend en paramètre une date de naissance et affiche son age avec nombre d’années et nombre de mois.
// Exemple : pour la date 01/01/2000 la fonction affiche Vous avez 20 ans et 10 mois.
const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  const year = today.getFullYear() - birth.getFullYear();
  const month = today.getMonth() - birth.getMonth();
  console.log(`Vous avez ${year} ans et ${month} mois`);
};

calculateAge("01/01/2000");