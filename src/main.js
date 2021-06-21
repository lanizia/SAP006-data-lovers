import { obterAtletas, obterAtletasPorNome } from './data.js';

const imprimirAtletas = (atletas) => {
    const cardsElement = document.getElementById("cards");
    cardsElement.innerHTML = "";

    atletas.forEach(atleta => {
        cardsElement.innerHTML += `<div class="card">
        <div class="topCard">
            <h2 class="title">${atleta.name}</h2>
            <span class="secondText"><b>Gênero:</b> ${atleta.gender} <b>Idade:</b> ${atleta.age} <b>País:</b> ${atleta.team} </span> <!--Usou span pois não tem margens como a tag de paragrafo-->
        </div>
        <div class="mediaCard"></div>
        <div class="bottomCard">
            <p class="bottomText">
            <b>Altura:</b> ${atleta.height} cm
            <b>Peso:</b> ${atleta.weight} kg</br>
            <b>Esporte:</b> ${atleta.sport}</br>
            <b>Modalidade:</b> ${atleta.event}</br>
            <b>Medalha:</b> ${atleta.medal}</p>
            <div class="actionsCard">
                
            </div>
        </div>
        </div>`;
    });
}

const atletas = obterAtletas()
imprimirAtletas(atletas);


const btnSearch = document.getElementById("searchAthlete");
const athleteName = document.getElementById("athlete");

btnSearch.addEventListener("click", () => {
    const searchAthleteByName = obterAtletasPorNome(athleteName.value);
    imprimirAtletas(searchAthleteByName);
} )




