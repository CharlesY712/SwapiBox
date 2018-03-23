const fetchPlanets = async () => {
  const url = 'https://swapi.co/api/planets/';
  const raw = await fetch(url);
  const json = await raw.json();
  const planetData = await json.results.map(async planet => {
    const residents = await planet.residents.map(async resident => {
      const raw = await fetch(resident);
      const json = await raw.json();
      return await json.name;
    });
    return ({name: planet.name, terrain: planet.terrain,
      population:planet.population, climate:planet.climate,
      residents:[...residents]});
  });
  return Promise.all(planetData);
};

// const fetchResidents = async (planet) => {

// }

export default fetchPlanets;