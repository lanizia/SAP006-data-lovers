
export const showAthletes = (athletesList) => athletesList.slice(0, 9);

export const filterByName = (athletesList, athleteName) => {
  const lowerCaseName = athleteName.toLowerCase();
  return athletesList.filter(athlete => athlete.name.toLowerCase().startsWith(lowerCaseName)).slice(0, 9);
}


export const getTeams = (athletesList) => {
  const teamOfAthletes = athletesList.map(athlete => athlete.team)
  const teamNewList = [...new Set(teamOfAthletes)];
  return teamNewList;
}


export const sortTeams = (listTeamsAz) => {
  const order = listTeamsAz.sort((a, b) => (a < b ? -1 : a > b ? 1: 0));
  const teamSortOrder = [...new Set(order)];
  return teamSortOrder;
};



 /* export const teamsNotDuplicated = new Set();

data.athletes.forEach((athletes) => {
    teamsNotDuplicated.add(athletes.team)
});

const arrayTeam = [...teamsNotDuplicated];

arrayTeam.sort();
console.log(arrayTeam.sort()); */


 


 