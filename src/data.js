export const groupedAthletes = athletesList => {
  const indexed = athletesList.reduce((grouped, athlete) => {
    if (grouped[athlete.name]) {
      grouped[athlete.name].events.push(athlete.event);
    } else {
      grouped[athlete.name] = {
        ...athlete
      };
      grouped[athlete.name].events = [athlete.event];
      delete grouped[athlete.name].event;
      }
      return grouped;

  }, {});
  return Object.values(indexed);
 
}

export const getAthletes = athletesList => {
  const grouped = groupedAthletes(athletesList);
  return grouped.slice(0, 30);
}

export const groupBySportName = athletesList =>
  athletesList.reduce((grouped, athlete) => {
    const sportNotFound = !grouped[athlete.sport]
    if (sportNotFound) {
      grouped[athlete.sport] = [];
    }

    const eventNotFound = !grouped[athlete.sport].includes(athlete.event)
    if (eventNotFound) {
      grouped[athlete.sport].push(athlete.event);
    }

    return grouped;
  }, {});

export const getAthletesByName = (athletesList, athleteName) => {
  const lowerCaseName = athleteName.toLowerCase();
  const grouped = groupedAthletes(athletesList);
  return grouped.filter(athlete => athlete.name.toLowerCase().startsWith(lowerCaseName));
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

const isFemale = (athlete => athlete.gender ==="F");

export const getWomanAthletes = (athletesList) => {
  const  grouped = groupedAthletes(athletesList);
  const womanAthlete = grouped.filter(isFemale);
  const porcent = parseInt((womanAthlete.length / grouped.length )*100);
  return porcent;
}

export const getMedalsofWoman = (athletesList) => {
  const medalsOfWoman = athletesList.filter(isFemale);
  const numberOfMedals = medalsOfWoman.length;
  return numberOfMedals;
}


  export const groupByTeamsAthletes = athletesList => {
  const indexOfAthletesByTeams = athletesList.reduce((grouped, athlete) => {
    const teamNotFound = !grouped[athlete.team]
    if (teamNotFound) {
      grouped[athlete.team] = [];
    }
    const nameNotFound = !grouped[athlete.team].includes(athlete.name)
    if (nameNotFound) {
      grouped[athlete.team].push(athlete.name);
    }
    return grouped;
  }, {});
  return indexOfAthletesByTeams;
}