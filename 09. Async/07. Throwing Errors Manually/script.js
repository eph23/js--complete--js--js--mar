"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderError = function (message) {
    countriesContainer.insertAdjacentText("beforeend", message);
    countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = "") {
    const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} M</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
     </article>
    `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMessage = `Something went wrong`) {
    return fetch(url).then(function (response) {
        if (!response.ok) {
            throw new Error(`${errorMessage} (${response.status})`);
        }
        return response.json();
    });
};

const getCountryData = function (country) {
    getJSON(`https://restcountries.com/v2/name/${country}`, "Country not found")
        .then(function (data) {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            if (!neighbour) {
                throw new Error("No neighbour found");
            }

            return getJSON(
                `https://restcountries.com/v2/alpha/${neighbour}`,
                "Country not found",
            );
        })
        .then(function (data) {
            renderCountry(data, "neighbour");
        })
        .catch(function (error) {
            console.log(error);
            renderError(`Something went wrong... ${error.message}`);
        })
        .finally(function () {
            countriesContainer.style.opacity = 1;
        });
};

btn.addEventListener("click", function () {
    getCountryData("australia");
});
