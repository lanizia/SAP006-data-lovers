import data from './data/athletes/athletes.js'
import {
  getAthletes,
  getAthletesByName,
  getTeams,
  groupBySportName,
  sortBy 
} from './data.js';

const sectionText = document.getElementById("texto-olimpiadas");
const containerHomeCards = document.getElementById ("container-home-1")
const containerHome = document.getElementById("best-athletes-container");
const cardsElement = document.getElementById("containerCards");
const homeButton = document.getElementById("homePage");
const athletesButton = document.getElementById("athl");
const athleteName = document.getElementById("athlete");
const btnSearch = document.getElementById("searchAthlete");
const btnTeam = document.getElementById("team");
const btnTeamsWithSort = document.querySelectorAll(".btn-team");
const btnSports = document.getElementById("sports");
const btnSportsWithSort = document.querySelectorAll(".btn-sport");

const clean = () => {
  containerHome.innerHTML = "";
  cardsElement.innerHTML = "";
  sectionText.innerHTML = "";
  containerHomeCards.innerHTML = "";
}

const printAthletes = (athletesList) => {
  clean()
  athletesList.forEach(athlete => {
    cardsElement.innerHTML += `<div class="containerCards">
        <div class="topCard">
            <h2 class="title">${athlete.name}</h2>
            <span class="secondText"><b>Gênero:</b> ${athlete.gender} <b>Idade:</b> ${athlete.age} </br> <b>País:</b> ${athlete.team} 
        </div>
        <div class="mediaCard"></div>
        <div class="bottomCard">
            <p class="bottomText">
            <b>Altura:</b> ${athlete.height} cm
            <b>Peso:</b> ${athlete.weight} kg</br>
            <b>Esporte:</b> ${athlete.sport}</br>
            <b>Modalidade:</b> ${athlete.events.join(', ')}</br>
            <b>Medalha:</b> ${athlete.medal}</p> 
        </div>
    </div>`;
  });
}

const printTeams = (listTeams) => {
  clean()
  listTeams.forEach(athleteTeam => {
    cardsElement.innerHTML += `<div class="containerCards">
    <div class="flip">
            <div class="front-card">
                    <div class="topCardTwo">
                    <h2 class="titleTwo">${athleteTeam}</h2>
                    </div>
                    <div class="mediaCardTwo"></div>
                    <div class="bottomCardTwo"></div>
            </div>

            <div class="back-card">
                <div class="topCardTwo">
                    <h2 class="titleTwo">Mudou</h2>
                    </div>
                    <div class="mediaCardThree"></div>
                    <div class="bottomCardTwo"></div>
            </div>
    </div>   
</div>`;
  });
}

const printSports = (sortedListSport, groupedSports) => {
  clean()
  sortedListSport.forEach(sportName => {
    cardsElement.innerHTML += `<div class="containerCards">
    <div class="flip">
            <div class="front-card">
                    <div class="topCardTwo">
                    <h2 class="titleTwo">${sportName}</h2>
                    </div>
                    <div class="mediaCardTwo"></div>
                    <div class="bottomCardTwo"></div>
            </div>

            <div class="back-card">
                <div class="topCardTwo">
                    <h2 class="titleTwo">Modalidades</h2>
                    </div>
                    <div class="mediaCardThreeSports"> <ul> ${groupedSports[sportName].map(event =>`<li>${event}</li>`).join("")} </ul></div>
                    <div class="bottomCardTwo"></div>
            </div>
    </div>   
</div>`;
  });
}

homeButton.addEventListener("click", () => {
  window.location.reload();
});

athletesButton.addEventListener("click", () => {
  clean()
  const athletesList = getAthletes(data.athletes);
  printAthletes(athletesList);
});

btnSearch.addEventListener("click", () => {
  clean()
  const searchAthleteByName = getAthletesByName(data.athletes, athleteName.value);
  printAthletes(searchAthleteByName);
});

btnTeam.addEventListener("click", () => {
  clean()
  const listTeams = getTeams(data.athletes);
  printTeams(listTeams);
});

btnTeamsWithSort.forEach(btn => {
btn.addEventListener("click", event => {
  clean()
  const sortDirection = event.target.getAttribute("data-direction");
  const listTeams = getTeams(data.athletes);
  const sortedListTeams = sortBy(listTeams, sortDirection);
  printTeams(sortedListTeams);
})
});

btnSports.addEventListener("click", () => {
    clean()
    const groupedSports = groupBySportName(data.athletes);
    const listSports = Object.keys(groupedSports);
    printSports(listSports, groupedSports);
});

btnSportsWithSort.forEach(btn => {
  btn.addEventListener("click", event => {
    clean()
    const sortDirection = event.target.getAttribute("data-direction");
    const groupedSports = groupBySportName(data.athletes);
    const listSports = Object.keys(groupedSports);
    const sortedListSport = sortBy(listSports, sortDirection);
    printSports(sortedListSport, groupedSports);
  })
});





