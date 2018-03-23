const fetchPeople = async () => {
  const url = `https://swapi.co/api/people/`;
  const raw = await fetch(url);
  const json = await raw.json();
  const peopleData = json.results.map( async (person) => {
    const home = await fetchHomeworld(person);
    const species = await fetchSpecies(person);
    return ({name: person.name, species: species.name,
      homeworld: home.name, population: home.population});
  });
  return Promise.all(peopleData);
};

const fetchHomeworld = async (person) => {
  const raw = await fetch(person.homeworld);
  const json = await raw.json();
  return json;
};

const fetchSpecies = async (person) => {
  const raw = await fetch(person.species);
  const json = await raw.json();
  return json;
};

export default fetchPeople;