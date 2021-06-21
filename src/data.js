export const showAthletes = (athletesList) => athletesList.slice(0, 9);

export const filterByName = (athletesList, athleteName) => {
  const lowerCaseName = athleteName.toLowerCase();
  return athletesList.filter(athlete => athlete.name.toLowerCase().startsWith(lowerCaseName)).slice(0, 9);
}
