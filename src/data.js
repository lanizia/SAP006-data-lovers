const getAthleteIndex = ({ name, age, height, weight, sport }) =>
  [name, age, height, weight, sport].join("-");

export const groupedAthletes = (athletesList) => {
  const indexed = athletesList.reduce((grouped, athlete) => {
    if (grouped[getAthleteIndex(athlete)]) {
      grouped[getAthleteIndex(athlete)].events.push({
        name: athlete.event,
        medal: athlete.medal,
      });
    } else {
      grouped[getAthleteIndex(athlete)] = {
        ...athlete,
      };
      grouped[getAthleteIndex(athlete)].events = [
        {
          name: athlete.event,
          medal: athlete.medal,
        },
      ];
      delete grouped[getAthleteIndex(athlete)].event;
      delete grouped[getAthleteIndex(athlete)].medal;
    }
    return grouped;
  }, {});
  return Object.values(indexed);
};

/* export const groupedByAthleatesAndEvent = athletesList => {
  const indexed = athletesList.
  return grouped;
} */

const paginate = (list, page, quantityPerPage) => {
  const start = (page - 1) * quantityPerPage;
  const end = start + quantityPerPage;

  const items = list.slice(start, end);
  const totalPages = Math.ceil(list.length / quantityPerPage);

  return { items, totalPages };
};

export const paginateAthletes = (athletesList, page, quantityPerPage) => {
  const grouped = groupedAthletes(athletesList);
  return paginate(grouped, page, quantityPerPage);
};

export const paginateAthletesByName = (
  athletesList,
  athleteName,
  page,
  quantityPerPage
) => {
  const lowerCaseName = athleteName.toLowerCase();
  const grouped = groupedAthletes(athletesList);
  const filtered = grouped.filter((athlete) =>
    athlete.name.toLowerCase().startsWith(lowerCaseName)
  );
  return paginate(filtered, page, quantityPerPage);
};

export const groupBySportName = (athletesList) =>
  athletesList.reduce((grouped, athlete) => {
    const sportNotFound = !grouped[athlete.sport];
    if (sportNotFound) {
      grouped[athlete.sport] = [];
    }

    const eventNotFound = !grouped[athlete.sport].includes(athlete.event);
    if (eventNotFound) {
      grouped[athlete.sport].push(athlete.event);
    }

    return grouped;
  }, {});

export const groupByTeamsAthletes = (athletesList) => {
  const indexOfAthletesByTeams = athletesList.reduce((grouped, athlete) => {
    const teamNotFound = !grouped[athlete.team];
    if (teamNotFound) {
      grouped[athlete.team] = [];
    }
    const nameNotFound = !grouped[athlete.team].includes(athlete.name);
    if (nameNotFound) {
      grouped[athlete.team].push(athlete.name);
    }
    return grouped;
  }, {});
  return indexOfAthletesByTeams;
};

export const sortBy = (list, direction) => {
  return list.sort((a, b) => {
    if (direction === "desc") {
      return b.localeCompare(a);
    } else {
      return a.localeCompare(b);
    }
  });
};

const isFemale = (athlete) => athlete.gender === "F";

export const getWomanAthletes = (athletesList) => {
  const grouped = groupedAthletes(athletesList);
  const womanAthlete = grouped.filter(isFemale);
  const porcent = parseInt((womanAthlete.length / grouped.length) * 100);
  return porcent;
};

export const getMedalsofWoman = (athletesList) => {
  const medalsOfWoman = athletesList.filter(isFemale);
  return medalsOfWoman.length;
};
