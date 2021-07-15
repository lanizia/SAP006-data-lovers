import data from './data/athletes/athletes.js'
import {
  paginateAthletes,
  getAthletesByName,
  groupBySportName,
  sortBy,
  getWomanAthletes,
  getMedalsofWoman,
  groupByTeamsAthletes
} from './data.js';

const homeButton = document.getElementById("homePage");
const sectionText = document.getElementById("texto-olimpiadas");
const containerHome = document.getElementById("best-athletes-container");
const containerHomeCards = document.getElementById("container-home-1");
const cardsElement = document.getElementById("containerCards1");
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
  const medalMap = {
    Gold: "🥇",
    Silver: "🥈",
    Bronze: "🥉"
  }
  athletesList.forEach(athlete => {
    cardsElement.innerHTML += `<div class="containerCards">
     <div class="flip">
        <div class="front-card">
          <div class="topCard">
            <h2 class="title">${athlete.name}</h2>
          </div>
          <div class="mediaCard"></div>
          <div class="bottomCardTwo"></div>
        </div>
        <div class="back-card">
          <div class="topCard">
            <h2 class="title"> Atleta vencedor de ${athlete.events.length} 🏅</h2>
          </div>
          <div class="mediaCardOne">
           <ul>
            <li><b>Altura:</b> ${athlete.height} cm </li>
            <li><b>Peso:</b> ${athlete.weight} kg</br> </li>
            <li><b>Esporte:</b> ${athlete.sport}</br> </li>
            <li>${athlete.events.map(event => `<li> <b>Modalidade:</b> ${event.name}</li> <li><b>Medalha:</b> ${event.medal} ${medalMap[event.medal]} </li>`).join('')}</li>
           </ul>
          </div>
         <div class="bottomCardTwo"></div>
         </div>`;

  });
}

const printPagination = (page) => {
  cardsElement.innerHTML += `</div>
    <div id="paginate">
      <div class="controls">
          <div class="first">&#171;</div>
          <div class="prev"><</div>
          <div class="numbers">
              <div>${page}</div>
          </div>
          <div class="next">></div>
          <div class="last">&#187;</div>
      </div>
    </div>`
}

const printTeams = (sortedListTeams, groupedTeams) => {
  clean()
  sortedListTeams.forEach(athleteTeam => {
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
                    <h2 class="titleTwo">💪 Atletas Participantes!</h2>
                    </div>
                    <div class="mediaCardThreeSports"> <ul> ${groupedTeams[athleteTeam].map(name =>`<li>${name}</li>`).join("")} </ul></div>
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

const printStatistics = (statisticNumberOfWoman, statisticNumberofMedal) => {
  clean()
  cardsElement.innerHTML += `<section id="sec">
  <h2>Mulheres nas Olimpíadas</h2>
  <ul>
    <li>
      <span class="women-hist"></span>
      <h3>História</h3>
      <p>A edição das Olimpíadas de Paris em 1900, foi a primeira na qual mulheres puderam competir no evento.
      Porém ganhavam apenas um certificado de participação. 
      A presença das mulheres nas modalidades olímpicas foi gradativa. No tiro com arco, por exemplo, elas puderam competir a partir de 1904. Já no badminton e no judô, apenas em 1992, enquanto o wrestling só teve disputas femininas em 2004, e o boxe, em 2012.
      Desde 1991, todos os esportes que pleiteiam espaço no programa olímpico precisam incluir eventos femininos.</p>
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
</section>`;
}

homeButton.addEventListener("click", () => {
  window.location.reload();
});

const changeAthletePage = (page, quantityPerPage) => {
  const pagination = paginateAthletes(data.athletes, page, quantityPerPage);
  const athletesList = pagination.items;
  const totalPages = pagination.totalPages;

  printAthletes(athletesList);
  printPagination(page);

  document.querySelector("#paginate .first").addEventListener("click", () => {
    if (page > 1) {
      changeAthletePage(1, quantityPerPage);
    }
  });

  document.querySelector("#paginate .prev").addEventListener("click", () => {
    if (page > 1) {
      changeAthletePage(page - 1, quantityPerPage);
    }
  });

  document.querySelector("#paginate .next").addEventListener("click", () => {
    if (page < totalPages) {
      changeAthletePage(page + 1, quantityPerPage);
    }
  });

  document.querySelector("#paginate .last").addEventListener("click", () => {
    if (page < totalPages) {
      changeAthletePage(totalPages, quantityPerPage);
    }
  });
}

athletesButton.addEventListener("click", () => {
  clean()
  const initialPage = 1;
  const quantityPerPage = 30;
  changeAthletePage(initialPage, quantityPerPage);
});

btnSearch.addEventListener("click", () => {
  clean()
  const searchAthleteByName = getAthletesByName(data.athletes, athleteName.value);
  printAthletes(searchAthleteByName);
});

btnTeam.addEventListener("click", () => {
  clean()
  const groupedTeams = groupByTeamsAthletes(data.athletes);
  const listTeams = Object.keys(groupedTeams);
  printTeams(listTeams, groupedTeams);
});

btnTeamsWithSort.forEach(btn => {
  btn.addEventListener("click", event => {
    clean()
    const sortDirection = event.target.getAttribute("data-direction");
    const groupedTeams = groupByTeamsAthletes(data.athletes);
    const listTeams = Object.keys(groupedTeams);
    const sortedListTeams = sortBy(listTeams, sortDirection);
    printTeams(sortedListTeams, groupedTeams);
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

btnStatistic.addEventListener("click", () => {
  clean()
  const statisticNumberofMedal = getMedalsofWoman(data.athletes, "gender");
  const statisticNumberOfWoman = getWomanAthletes(data.athletes, "gender");
  printStatistics(statisticNumberOfWoman, statisticNumberofMedal);
});
