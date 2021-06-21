export const obterAtletas = (atletas) => atletas.slice(0, 10);

export const obterAtletasPorNome = (atletas, athleteName) => {
  const lowerCaseName = athleteName.toLowerCase();
  return atletas.filter(atleta => atleta.name.toLowerCase().startsWith(lowerCaseName)).slice(0, 10);
}


// const obterAtletasPor = (propriedade, valor) =>
//   data.athletes.filter(atleta => atleta[propriedade] === valor);

