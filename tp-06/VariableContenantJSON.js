// Déclarez une variable contenant du JSON

const JSON_CONTENT = {
  "nom": "Google",
  "siège_social": "Googleplex, Mountain View, California, United States",
  "fondateurs": [ 
    {
      "nom": "Larry Page",
      "date_de_naissance": "26/03/1973",
      "lieu_de_naissance": "East Lansing, Michigan",
    },
    {
      "nom": "Sergey Brin",
      "date_de_naissance": "21/08/1973",
      "lieu_de_naissance": "Moscou, Union Soviétique",
    },
  ],

  "chiffre_d_affaires_en_milliards_dollar": {
    2008: 16.49,
    2012: 37.97,
    2016: 89.46,
    2018: 136.2,
  },
};

// Faites une boucle pour afficher les fondateurs de la société ainsi que les chiffres d’affaires de la société.
for (const founder of JSON_CONTENT.fondateurs) {
  console.log("Fondateur : ", founder.nom);
  console.log("Date de naissance : ", founder.date_de_naissance);
  console.log("Lieu de naissance : ", founder.lieu_de_naissance);
  console.log("----------------------");
}

for (const year in JSON_CONTENT.chiffre_d_affaires_en_milliards_dollar) {
  console.log(
    "Chiffre d'affaires en ",
    year,
    " : ",
    JSON_CONTENT.chiffre_d_affaires_en_milliards_dollar[year]
  );
}
