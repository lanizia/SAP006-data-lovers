import data from './data/athletes/athletes.js'
import {
  getAthletes,
  getAthletesByName,
  getElement,
  sortBy 
} from './data.js';

const containerHome = document.getElementById("best-athletes-container");
const cardsElement = document.getElementById("containerCards");
const homeButton = document.getElementById("homePage");
const athletesButton = document.getElementById("athl");
const btnSearch = document.getElementById("searchAthlete");
const athleteName = document.getElementById("athlete");
const btnTeam = document.getElementById("team");
const btnTeamsWithSort = document.querySelectorAll('.btn-team');
const btnSports = document.getElementById("sports");
const btnSportsWithSort = document.querySelectorAll('.btn-sport');

const clean = () => {
  containerHome.innerHTML = "";
  cardsElement.innerHTML = "";
}

const printAthletes = (athletesList) => {
  clean()
  containerHome.innerHTML = " PENSAR ALGO LEGAL PARA COLOCAR AQUI"
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
  containerHome.innerHTML = " PENSAR ALGO LEGAL PARA COLOCAR AQUI"
  listTeams.forEach(athleteTeam => {
    cardsElement.innerHTML += ` <div class="containerCards">
        <div class="topCardTwo">
        <h2 class="titleTwo">${athleteTeam}</h2>
    
        </div>
        <div class="mediaCardTwo"></div>
        <div class="bottomCardTwo"></div>
</div>`;
  });
}

const printSports = (sortedListSport) => {
  clean()
  containerHome.innerHTML = " PENSAR ALGO LEGAL PARA COLOCAR AQUI"
  sortedListSport.forEach(sportName => {
    cardsElement.innerHTML += ` <div class="containerCards">
        <div class="topCardTwo">
        <h2 class="titleTwo">${sportName}</h2>
        </div>
        <div class="mediaCardTwo"></div>
        <div class="bottomCardTwo"></div>
</div>`;
  });
}

homeButton.addEventListener("click", () => {
  cardsElement.innerHTML = "";
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
  const listTeams = getElement(data.athletes, "team");
  printTeams(listTeams);
});

btnTeamsWithSort.forEach(btn => {
btn.addEventListener("click", event => {
  clean()
  const sortDirection = event.target.getAttribute('data-direction');
  const listTeams = getElement(data.athletes, "team");
  const sortedListTeams = sortBy(listTeams, sortDirection);
  printSports(sortedListTeams);
})
});

btnSports.addEventListener("click", () => {
    clean()
    const listSports = getElement(data.athletes, "sport");
    printSports(listSports);
});

btnSportsWithSort.forEach(btn => {
  btn.addEventListener("click", event => {
    clean()
    const sortDirection = event.target.getAttribute('data-direction');
    const listSports = getElement(data.athletes, "sport");
    const sortedListSport = sortBy(listSports, sortDirection);
    printSports(sortedListSport);
  })
});