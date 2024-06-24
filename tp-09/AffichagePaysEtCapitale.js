const API_URL = "https://restcountries.com/v3.1/all";

const handleOnReady = () => {
  // Use AJAX to get the data
  const xhr = new XMLHttpRequest();
  xhr.open("GET", API_URL, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);

      console.log(data.slice(0, 2));
      let div = document.querySelector("div");

      data.forEach((country) => {
        const name = country.name.common;
        const capital = country.capital;
        const population = country.population;
        const region = country.region;

        div.innerHTML += `<div style="margin:16px;">
          <h2>${name}</h2>
          <p>Capital: ${capital}</p>
          <p>Population: ${population}</p>
          <p>Region: ${region}</p>
        </div>`;
      });
    }
  };
};
