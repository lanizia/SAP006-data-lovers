export const getAthletes = (athletesList) => athletesList.slice(0, 9);

export const getAthletesByName = (athletesList, athleteName) => {
  const lowerCaseName = athleteName.toLowerCase();
  return athletesList.filter(athlete => athlete.name.toLowerCase().startsWith(lowerCaseName)).slice(0, 9);
}

export const getTeams = (athletesList) => {
  const teamOfAthletes = athletesList.map(atleta => atleta.team)
  const teamNewList = [...new Set(teamOfAthletes)];
  return teamNewList;
}

export const getSports = (athletesList) => {
  const sportsOfAthletes = athletesList.map(atleta => atleta.sport)
  const sportsNewList = [...new Set(sportsOfAthletes)];
  return sportsNewList;
}

export const ordenation = (list, direction) => {
  const sorted = list.sort((a, z) => {
    if (direction === 'desc') {
      return z.localeCompare(a);
    } else {
      return a.localeCompare(z);
    }
  })
  return sorted;
}
