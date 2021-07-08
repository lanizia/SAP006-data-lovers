export const groupedAthletes = athletesList => {
  const indexed = athletesList.reduce((grouped, athlete) => {
    if (grouped[athlete.name]) {
      grouped[athlete.name].events.push({ name: athlete.event, medal: athlete.medal });
    } else {
      grouped[athlete.name] = {
        ...athlete
      };
      grouped[athlete.name].events = [{ name: athlete.event, medal: athlete.medal }];
      delete grouped[athlete.name].event;
      delete grouped[athlete.name].medal;
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

const isFemale = athlete => athlete.gender === 'F';

export const getWomanAthletes = (athletesList) => {
  const  grouped = groupedAthletes(athletesList);
  const womanAthlete = grouped.filter(isFemale);
  const porcent = parseInt((womanAthlete.length / grouped.length )*100);
  return porcent;
}

export const getMedalsofWoman = (athletesList) => {
  const medalsOfWoman = athletesList.filter(isFemale);
  return medalsOfWoman.length; 
}
