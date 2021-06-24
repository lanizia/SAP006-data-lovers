import data from './data/athletes/athletes.js'
import { showAthletes, filterByName, getTeams, sortTeams } from './data.js';


const btnTeam = document.getElementById("team");

btnTeam.addEventListener("click", () => {
    cardsTeam.innerHTML = "";
    const listTeams= getTeams(data.athletes);
    printTeams(listTeams);
})

const cardsTeam = document.getElementById("team-section");
const printTeams = (athletesList) => {
    
        cardsTeam.innerHTML = "";

        athletesList.forEach(listTeams => {
            cardsTeam.innerHTML += `<section class="base"> 
            <section class="container-two">
            <div class="row-two">
                <div class="card-two">
                    <div class="card-two-header">
                        <h1>${listTeams}</h1>
                    </div>
                    <div class="card-two-body">
                        <p></p>
                    </div>
                </div>
                </section>`})}


                const printAthletes = (athletesList) => {
                    const cardsAthlete = document.getElementById("cards");
                    cardsAthlete.innerHTML = "";
                
                    athletesList.forEach(athlete => {
                        cardsAthlete.innerHTML += `<div class="card">
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
                