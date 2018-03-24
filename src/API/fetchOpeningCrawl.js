const fetchOpeningCrawl = async () => {
  const rand = Math.floor(Math.random() * Math.floor(7)) + 1;
  try {
    const url = `https://swapi.co/api/films/${rand}`;
    const response = await fetch(url);
    const welcome = await response.json();
    return ({crawl: welcome.opening_crawl, title: welcome.title,
      episode: rand, release: welcome.release_date.slice(0, 4)});
  } catch (error) {
    // console.log("Error: ", error);
  }
};

export default fetchOpeningCrawl;
