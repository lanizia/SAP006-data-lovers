import data from './data/athletes/athletes.js'

export const obterAtletas = () => data.athletes.slice(0, 10)

export const obterAtletasPorNome = (athleteName) => {
  const lowerCaseName = athleteName.toLowerCase();
  return data.athletes.filter(atleta => atleta.name.toLowerCase().startsWith(lowerCaseName)).slice(0, 10);
}


// const obterAtletasPor = (propriedade, valor) =>
//   data.athletes.filter(atleta => atleta[propriedade] === valor);

