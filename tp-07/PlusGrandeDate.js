// Créez une fonction qui prend en paramètre 2 dates et affiche la plus récente des 2

const printCurrentDate = (date1, date2) => {
  if (date1 > date2) {
    console.log(date1);
  } else {
    console.log(date2);
  }
};


printCurrentDate(new Date("2024-01-01"), new Date("2021-01-02"));

