/* eslint-disable */
export const filterByName = (array, athleteName) => {
  return array.filter(athlete => athlete.nombre.toLowerCase().includes(athleteName.toLowerCase()));
};

export const filterByCountry = (array, country) => {
  return array.filter(athlete => athlete.equipo === country);
};

export const filterBySport = (array, sport) => {
  return array.filter(athlete => athlete.deporte === sport);
};

export const filterByMedal = (array, medal) => {
  return array.filter(athlete => athlete.disciplinas.some(d => d.medalla === medal));
};

export const getAllCountries = (array) => {
  return array.map(item => item.equipo)
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort();
  ;
};

export const getAllSports = (array) => {
  return array.map(item => item.deporte)
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort();
  ;
};

export const sortByName = (array, sort) => {
  if (sort === 'asc') {
    return array.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
  } else {
    return array.sort((a, b) => (a.nombre < b.nombre) ? 1 : -1);
  }
};

export const sortByTotal = (array, sort) => {
  if (sort === 'asc') {
    return array.sort((a, b) => (a.total > b.total) ? 1 : -1);
  } else {
    return array.sort((a, b) => (a.total < b.total) ? 1 : -1);
  }
};

export const getMedalsByType = (array, country, medalType) => {
  const arrayByCountry = array.filter(atleta => atleta.equipo === country);
  const totalMedals = arrayByCountry.reduce((counter, athlete) => {
    const medal = athlete.disciplinas.filter(c => c.medalla === medalType);
    if (medal.length > 0) {
      return counter + 1;
    }
    return counter;
  }, 0);
  return totalMedals;
};

export const getAthletesMinView = (array, athleteName, country, sport, medal, sort) => {

  if (athleteName !== '') {
    array = filterByName(array, athleteName);
  }

  if (country !== '') {
    array = filterByCountry(array, country);
  }

  if (sport !== '') {
    array = filterBySport(array, sport);
  }

  if (medal !== '') {
    array = filterByMedal(array, medal);
  }

  if (sort !== '') {
    array = sortByName(array, sort);
  }

  const newArray = array.map(obj => ({
    nombre: obj.nombre,
    deporte: obj.deporte,
    equipo: obj.equipo,
    genero: obj.genero
  }));
  return newArray;
};

export const getMedalsMinView = (array, country, sport, sort) => {

  if (country !== '') {
    array = filterByCountry(array, country);
  }

  if (sport !== '') {
    array = filterBySport(array, sport);
  }

  var countries = getAllCountries(array);

  var medals = countries.map(obj => ({
    country: obj,
    bronze: 0,
    silver: 0,
    gold: 0,
    total: 0
  }));

  medals.forEach(medal => {
    medal.bronze = getMedalsByType(array, medal.country, 'Bronze');
    medal.silver = getMedalsByType(array, medal.country, 'Silver');
    medal.gold = getMedalsByType(array, medal.country, 'Gold');
    medal.total = medal.bronze + medal.silver + medal.gold;
  });

  if (sort !== '') {
    array = sortByTotal(medals, sort);
  }

  return medals;
};
