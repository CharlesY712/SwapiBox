const fetchPlanets = async () => {
  const url = 'https://swapi.co/api/planets/';
  const raw = await fetch(url);
  const json = await raw.json();
  const planetData = json.results.map(async planet => {
    const residents = await fetchResidents(planet);
    return ({name: planet.name, terrain: planet.terrain,
      population: planet.population, climate: planet.climate,
      residents: [...residents]});
  });
  return Promise.all(planetData);
};

const fetchResidents = (planet) => {
  const residents = planet.residents.map(async resident => {
    const raw = await fetch(resident);
    const json = await raw.json();
    return json.name;
  });
  return Promise.all(residents);
};

export default fetchPlanets;