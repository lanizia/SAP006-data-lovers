import data from './data/athletes/athletes.js'
import { getAthletes, getAthletesByName, getSports } from './data.js';

const containerHome = document.getElementById("best-athletes-container");
const cardsElement = document.getElementById("containerCards");
const homeButton = document.getElementById("homePage");
const athletesButton = document.getElementById("athl");
const btnSearch = document.getElementById("searchAthlete");
const athleteName = document.getElementById("athlete");
const btnSports = document.getElementById("sports");
const btnTeam = document.getElementById("team");

const clean = () => {
    containerHome.innerHTML = "";
    cardsElement.innerHTML = "";
}


// const printHome = (athletesList) => {
//     cardsElement.innerHTML = ""
//     cardsElement.innerHTML += ` <div class="containerCards">
//         <div class="card-two">
//             <div class="card-two-header">
//                 <h1>${listSports}</h1>
//             </div>
//             <div class="card-two-body">
//                 <p></p>
//                 <!--<a href="#" class="fake-btn">Saiba mais</a> </!-->
//             </div>
//         </div>`;
    
// }

const printAthletes = (athletesList) => {
    clean()
        athletesList.forEach(athlete => {
        cardsElement.innerHTML += `<div class="containerCards">
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

const printSports = (athletesList) => {
    clean()
    athletesList.forEach(listSports => {
        cardsElement.innerHTML += ` <div class="containerCards">
        <div class="card-two">
            <div class="card-two-header">
                <h1>${listSports}</h1>
            </div>
            <div class="card-two-body">
                <p></p>
                <!--<a href="#" class="fake-btn">Saiba mais</a> </!-->
            </div>
        </div>`;
    });
}

homeButton.addEventListener("click", clean);

athletesButton.addEventListener("click", () => {
    clean()
    const athletesList = getAthletes(data.athletes)
    printAthletes(athletesList);
});

btnSearch.addEventListener("click", () => {
    clean()
    const searchAthleteByName = getAthletesByName(data.athletes, athleteName.value);
    printAthletes(searchAthleteByName);
});

btnSports.addEventListener("click", () => {
    clean()
    const listSports = getSports(data.athletes);
    printSports(listSports);
});


