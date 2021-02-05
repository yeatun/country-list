fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data =>displayCountries(data) );

const displayCountries = countries =>{
   const countriesItem = document.getElementById("countries")
   

countries.forEach(country => {
    const countriesList = document.createElement('div');
   countriesList.className = 'country';

    const countryInfo =
    `<h3 class="country-name">${country.name}</h3>
    <p class="capital"> ${country.capital}</p>
    <button class = "button" onclick="displayCountriesDetails('${country.name}')">details</button>  `


    countriesList.innerHTML = countryInfo;
    countriesItem.appendChild(countriesList);
   });    
   
} 
const displayCountriesDetails = name =>{
    const url =`https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then (res => res.json())
    .then (data => displayCountriesInfo(data[0]));
}
const displayCountriesInfo = country =>{
    const countryDiv = document.getElementById('countryDetails')
   
    countryDiv.innerHTML =`
    <h1>${country.name}</h1>
    <p>population:${country.population}</p>
    <p>time Zone:${country.timezones}</p>
    <img src="${country.flag}">
    `
}


  