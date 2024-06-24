const API_URL = "https://digicode.cleverapps.io/json/pays/pollution";


const getFlag = (code) => {
    const codePoints = code
        .toUpperCase()
        .split('')
        .map((char) => 127397 + char.charCodeAt(0))
    return String.fromCodePoint(...codePoints)
}

const handleOnReady = () => {
  // Use AJAX to get the data
  const xhr = new XMLHttpRequest();
  xhr.open("GET", API_URL, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      let tableBody = document.querySelector("tbody");

      //   console.log(data);
      data.pays.forEach((country) => {
        const name = country.nom;
        const percentage = country.pourcentage;
        const flag = getFlag(country.code);
        const value = country.valeur;


        tableBody.innerHTML += `<tr>
          <td>${flag}</td>
          <td>${name}</td>
          <td>${value}</td>
          <td>${percentage}</td>
        </tr>`;
      });
    }
  };
};
