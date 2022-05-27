const getCountry = () => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => takeCounry(data));
};
getCountry();

let countrySection = document.getElementById("country");
const takeCounry = (data) => {
  console.table(data);
  console.log("https://restcountries.com/ >>server api link you can use this");
  data.forEach((element) => {
    let displayCounry = document.createElement("div");
    displayCounry.classList.add("nano");
    displayCounry.innerHTML = `
    <h3>Country Name: ${element.name}</h3>
     <p>Capital: ${element.capital}</p>
     <p>Population: ${element.population}</p>
     <p>Area: ${element.area}</p>
     <button onclick="detailFunction('${element.name}')">Flag</button>`;
    countrySection.appendChild(displayCounry);
  });
};
let displaySec = document.getElementById("dis");
const detailFunction = (x) => {
  let spacificCountry = `https://restcountries.com/v2/name/${x}`;
  fetch(spacificCountry)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        // console.log(element.flags.png);
        let crnewdiv = document.createElement("div");
        displaySec.innerHTML = `<img src="${element.flags.png}">`;
        countrySection.appendChild(crnewdiv);
      });
    });
};
