import data from './data/athletes/athletes.js'
import {
  getAthletes,
  getAthletesByName,
  getElement,
  sortBy,
  getWomanAthletes,
  getMedalsofWoman 
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
const btnStatistic = document.getElementById("statistic");

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

const printSports = (sortedListSport) => {
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
                    <h2 class="titleTwo">Mudou</h2>
                    </div>
                    <div class="mediaCardThree"></div>
                    <div class="bottomCardTwo"></div>
            </div>
    </div>   
</div>`;
  });
}

const printStatistics = (statisticNumberOfWoman, statisticNumberofMedal) => {
  clean()
  cardsElement.innerHTML += `<section id="sec">
  <h2>Mulheres nas Olimpíadas
  </h2>
  <ul>
    <li>
      <span class="women-hist"></span>

      <h3>História</h3>
      <p>A edição das Olimpíadas de Paris em 1900, foi a primeira na qual mulheres puderam competir no evento.
      Porém ganhavam apenas um certificado de participação. 
      A presença das mulheres nas modalidades olímpicas foi gradativa. No tiro com arco, por exemplo, elas puderam competir a partir de 1904. Já no badminton e no judô, apenas em 1992, enquanto o wrestling só teve disputas femininas em 2004, e o boxe, em 2012.
      Desde 1991, todos os esportes que pleiteiam espaço no programa olímpico precisam incluir eventos femininos.
       </p>
    </li>
    <li><span class="women-static"></span>
      <h3>Estatística</h3>
      <p>Durante as Olimpiadas do Rio de Janeiro de 2016 a porcentagem de mulheres que ganharam medalhas, em relação aos homens, foi de ${statisticNumberOfWoman}%.
       No total, as mulheres conquistaram o número de ${statisticNumberofMedal} medalhas.</p>
    </li>
    <li><span class="women-txt"></span>
      <h3>Marco</h3>
      <p>Um marco histórico da participação feminina nos Jogos Olímpicos aconteceu em 2016, nas Olimpíadas do Rio de Janeiro, pois, dentre os 11 mil atletas participantes, 45% eram mulheres.

      Além disso, nessa edição, outro marco importante é que alguns países tinham mais atletas mulheres em suas delegações do que homens, a exemplo os Estados Unidos da América.
      
      A presença de atletas brasileiras também fez parte desse marco, pois, desde a primeira participação do Brasil nos Jogos Olímpicos, essa foi a edição com maior número de mulheres: foram 209 competidoras no total.
      </p></li>

  </ul>
</section> 
`;
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

btnStatistic.addEventListener("click", () =>{
  clean()
  const statisticNumberofMedal = getMedalsofWoman(data.athletes, "gender");
  const statisticNumberOfWoman = getWomanAthletes(data.athletes, "gender");
  console.log(statisticNumberOfWoman, statisticNumberofMedal);
  printStatistics(statisticNumberOfWoman, statisticNumberofMedal);
});

/* `<div class="containerCards">
  <div class="flip">
          <div class="front-card">
                  <div class="topCardTwo">
                  <h2 class="titleTwo">Porcentagem de mulheres que ganharam medalha:${statisticNumberOfWoman}%</h2>
                  </div>
                  <div class="mediaCardTwo"></div>
                  <div class="bottomCardTwo"></div>
          </div>

          <div class="back-card">
              <div class="topCardTwo">
                  <h2 class="titleTwo">Total de medalhas:${statisticNumberofMedal}</h2>
                  </div>
                  <div class="mediaCardThree"></div>
                  <div class="bottomCardTwo"></div>
          </div>
  </div>   
</div>`*/