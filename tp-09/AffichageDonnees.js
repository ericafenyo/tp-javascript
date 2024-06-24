const API_URL = "https://restcountries.com/v3.1/all";

// EXERCICE Affichage Donnees
const handleOnReady = () => {
  // Use AJAX to get the data
  const xhr = new XMLHttpRequest();
  xhr.open("GET", API_URL, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let div = document.querySelector("div");
      div.innerHTML = xhr.responseText;
    }
  };
};
