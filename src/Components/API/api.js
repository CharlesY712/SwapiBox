import React from "react";

const fetchOpeningCrawl = async handle => {
  const rand = Math.floor(Math.random() * Math.floor(7)) + 1;
  try {
    const url = `https://swapi.co/api/films/${rand}`;
    const response = await fetch(url);
    const data = await response.json();
    return ({crawl: data.opening_crawl, title: data.title, episode: rand, release: data.release_date})
  } catch (err) {
    console.log("Error: ", err);
  }
};

export default fetchOpeningCrawl;
