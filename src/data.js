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

export const getTeams = (athletesList) => {
  const teamsOfAthletes = athletesList.map(athlete => athlete.team);
  return [...new Set(teamsOfAthletes)];
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

export const getWomanAthletes = (athletesList, condition) => {
  const  grouped = groupedAthletes(athletesList);
  const womanAthlete = grouped.filter(athlete => athlete[condition] === "F");
  const numberWomanAthlete = womanAthlete.length;
  const porcent = parseInt((numberWomanAthlete / grouped.length )*100);
  return porcent;
}

export const getMedalsofWoman = (athletesList, condition) => {
  const medalsOfWoman = athletesList.filter(athlete => athlete[condition] ==="F");
  const numberOfMedals = medalsOfWoman.length;
  return numberOfMedals;
}
