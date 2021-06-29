export const groupedAthletes = athletesList => {
  const indexed = athletesList.reduce((grouped, athlete) => {
    if(grouped[athlete.name]) {
      grouped[athlete.name].events.push(athlete.event);
    } else {
      grouped[athlete.name] = {...athlete};
      grouped[athlete.name].events = [athlete.event];
      delete grouped[athlete.name].event;
    }
    return grouped;
  }, {});
  return Object.values(indexed);
}

export const getAthletes = athletesList => {
  const agrupados = groupedAthletes(athletesList)
  return agrupados.slice(0, 30);
}

export const getAthletesByName = (athletesList, athleteName) => {
  const lowerCaseName = athleteName.toLowerCase();
  const agrupados = groupedAthletes(athletesList)
  return agrupados.filter(athlete => athlete.name.toLowerCase().startsWith(lowerCaseName));
}

export const getElement = (athletesList, element) => {
  const elementOfAthletes = athletesList.map(athlete => athlete[element])
  return [...new Set(elementOfAthletes)];
}

export const sortBy = (list, direction) => {
  return list.sort((a, b) => {
    if (direction === "desc") {
      return b.localeCompare(a);
    } else {
      return a.localeCompare(b);
    }
  }) 
}

