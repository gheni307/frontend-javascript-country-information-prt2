import axios from "axios";

const countries = document.getElementById('list of countries');
const errorMessage = document.getElementById('error');

async function fetchCountries(){
    try{
        const response = await axios.get('https://restcountries.com/v2/all');
        const country = response.data;
        const sorteer = country.sort((a,b)=>{
            return a.population - b.population;
        });

        countries.innerHTML = sorteer.map((message) => {
            let color = '';
            const region = message.region;
            switch (region) {
                case 'Americas':
                    color = 'green';
                    break;
                case 'Africa':
                    color = 'blue';
                    break;
                case 'Asia':
                    color = 'red';
                    break;
                case 'Europe':
                    color = 'yellow';
                    break;
                case 'Oceania':
                    color = 'purple';
            }
            return `<li style="color: ${color}"><<img src=${message.flag} alt="flag" class="flag">
            ${message.name}<p>Has a population of ${message.population} people</p></li>`
        });
    }catch (e) {
        console.error(e);
    }
}

fetchCountries();