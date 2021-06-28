export const agruparAtletas = athletesList => {
  const indexado = athletesList.reduce((agrupado, atleta) => {
    if(agrupado[atleta.name]) {
      agrupado[atleta.name].events.push(atleta.event);
    } else {
      agrupado[atleta.name] = {...atleta};
      agrupado[atleta.name].events = [atleta.event];
      delete agrupado[atleta.name].event;
    }
    return agrupado;
  }, {});
  return Object.values(indexado);
}

export const getAthletes = athletesList => {
  const agrupados = agruparAtletas(athletesList)
  return agrupados.slice(0, 30);
}

export const getAthletesByName = (athletesList, athleteName) => {
  const lowerCaseName = athleteName.toLowerCase();
  const agrupados = agruparAtletas(athletesList)
  return agrupados.filter(athlete => athlete.name.toLowerCase().startsWith(lowerCaseName));
}

export const getElement = (athletesList, element) => {
  const elementOfAthletes = athletesList.map(athlete => athlete[element])
  return [...new Set(elementOfAthletes)];
}

export const sortBy = (list, direction) => {
  return list.sort((a, b) => {
    if (direction === 'desc') {
      return b.localeCompare(a);
    } else {
      return a.localeCompare(b);
    }
  }) 
}

