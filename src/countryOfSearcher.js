import axios from "axios";

const pText = document.getElementById('p-text');
const article = document.getElementById('article');
async function reachToSearch(name){
    article.innerHTML = '';
    pText.innerHTML = '';
    try {
        const nameOfCountry = await axios.get(`https://restcountries.com/v2/name/${name}`);
        const subregion = nameOfCountry.data[0].subregion;
        const population = nameOfCountry.data[0].population;
        const capital = nameOfCountry.data[0].capital;
        const money = nameOfCountry.data[0].currencies[0].name;
        const flag = nameOfCountry.data[0].flag;
        const name1 = nameOfCountry.data[0].name;
        console.log(subregion);
        article.innerHTML = `<div id="information"><h2> <img src=${flag} id="flag"/> ${name1}</h2><p id="border"></p>
        <p> ${name1} is situated in ${subregion}. It has a population fo ${population} people.<p/>
        <p>The capital is ${capital} and you can pay with ${money}'s</p><div/>`
    } catch (e) {
        console.error(e);
        console.log(e.response);
        pText.innerHTML = 'het land bestaat niet!';
    }
}

const textToInput = document.getElementById('inputText');
const reachToCountry = document.getElementById('reach-to-country');
let currentValue = '';
textToInput.addEventListener('keyup', (e) => {
    e.preventDefault();
    currentValue = e.target.value;
    reachToCountry.addEventListener('submit', (e) => {
        e.preventDefault();
        reachToSearch(currentValue);
    });
});

textToInput.innerHTML = '';