import data from './data/athletes/athletes.js'
import {
  getAthletes,
  getAthletesByName,
  getSports,
  sortSports
} from './data.js';

// let currentPage = 'home';
const containerHome = document.getElementById("best-athletes-container");
const cardsElement = document.getElementById("containerCards");
const homeButton = document.getElementById("homePage");
const athletesButton = document.getElementById("athl");
const btnSearch = document.getElementById("searchAthlete");
const athleteName = document.getElementById("athlete");
// const btnSports = document.getElementById("sports");
// const btnTeam = document.getElementById("team");

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
            <span class="secondText"><b>Gênero:</b> ${athlete.gender} <b>Idade:</b> ${athlete.age} <b>País:</b> ${athlete.team} 
        </div>
        <div class="mediaCard"></div>
        <div class="bottomCard">
            <p class="bottomText">
            <b>Altura:</b> ${athlete.height} cm
            <b>Peso:</b> ${athlete.weight} kg</br>
            <b>Esporte:</b> ${athlete.sport}</br>
            <b>Modalidade:</b> ${athlete.event}</br>
            <b>Medalha:</b> ${athlete.medal}</p>
            
        </div>
    </div>`;
  });
}

const printSports = (sortedListSport) => {
  clean()
  sortedListSport.forEach(sportName => {
    cardsElement.innerHTML += ` <div class="containerCards">

        <div class="topCardTwo">
        <h2 class="titleTwo">${sportName}</h2>
    
        </div>
        <div class="mediaCardTwo"></div>
        <div class="bottomCardTwo"></div>
</div>`;;
  });
}

homeButton.addEventListener("click", () => {
  // currentPage = 'home';
  clean()
});

athletesButton.addEventListener("click", () => {
  // currentPage = 'athletes';
  clean()
  const athletesList = getAthletes(data.athletes)
  printAthletes(athletesList);
});

btnSearch.addEventListener("click", () => {
  clean()

  // console.log(currentPage);
  const searchAthleteByName = getAthletesByName(data.athletes, athleteName.value);
  printAthletes(searchAthleteByName);
});

// btnSports.addEventListener("click", () => {
//     clean()
//     const listSports = getSports(data.athletes);
//     printSports(listSports);
// });


const btnSportsWithSort = document.querySelectorAll('.btn-sport');

btnSportsWithSort.forEach(btn => {
  btn.addEventListener("click", event => {
    clean()
    const sortDirection = event.target.getAttribute('data-direction');
    // currentPage = 'sports-' + sortDirection;
    const listSports = getSports(data.athletes);
    const sortedListSport = sortSports(listSports, sortDirection);
    printSports(sortedListSport);
  })
});