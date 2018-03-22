const fetchPeople = async () => {
  try {
    const url = `https://swapi.co/api/people/`;
    const response = await fetch(url);
    const people = await response.json();
    return people;
  } catch (error) {
    // console.log("Error: ", error)
  }
};

export default fetchPeople;