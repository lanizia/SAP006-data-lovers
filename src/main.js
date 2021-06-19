import { obterAtletas, obterAtletasPorNome } from './data.js';

const imprimirAtletas = (atletas) => {
    const cardsElement = document.getElementById("cards");
    cardsElement.innerHTML = "";

    atletas.forEach(atleta => {
        cardsElement.innerHTML += `<div class="card">
        <div class="topCard">
            <h2 class="title">${atleta.name}</h2>
            <span class="secondText"> Exemplo de texto secundário</span> <!--Usou span pois não tem margens como a tag de paragrafo-->
        </div>
        <div class="mediaCard"></div>
        <div class="bottomCard">
            <p class="bottomText">Aqui é um texto exemplo de resumo da página ou documento que o card trata</p>
            <div class="actionsCard">
                <button class="actions">Curtir</button>
                <button class="actions">Compartilhar</button>
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




