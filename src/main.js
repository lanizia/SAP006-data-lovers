import data from './data/athletes/athletes.js'
import { showAthletes, filterByName } from './data.js';

const printAthletes = (athletesList) => {
    const cardsElement = document.getElementById("cards");
    cardsElement.innerHTML = "";

    athletesList.forEach(athlete => {
        cardsElement.innerHTML += `<div class="card">
        <div class="topCard">
            <h2 class="title">${athlete.name}</h2>
            <span class="secondText"><b>Gênero:</b> ${athlete.gender} <b>Idade:</b> ${athlete.age} <b>País:</b> ${athlete.team} </span> <!--Usou span pois não tem margens como a tag de paragrafo-->
        </div>
        <div class="mediaCard"></div>
        <div class="bottomCard">
            <p class="bottomText">
            <b>Altura:</b> ${athlete.height} cm
            <b>Peso:</b> ${athlete.weight} kg</br>
            <b>Esporte:</b> ${athlete.sport}</br>
            <b>Modalidade:</b> ${athlete.event}</br>
            <b>Medalha:</b> ${athlete.medal}</p>
            <div class="actionsCard">
                
            </div>
        </div>
        </div>`;
    });
}

const athletesList = showAthletes(data.athletes)
printAthletes(athletesList);


const btnSearch = document.getElementById("searchAthlete");
const athleteName = document.getElementById("athlete");

btnSearch.addEventListener("click", () => {
    const searchAthleteByName = filterByName(data.athletes, athleteName.value);
    printAthletes(searchAthleteByName);
} )




