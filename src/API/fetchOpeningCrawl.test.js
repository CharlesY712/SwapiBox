import fetchOpeningCrawl from "./fetchOpeningCrawl";
import MockFilmData from "../MockData/MockFilmData";
import mockOpeningCrawlData from "../MockData/MockOpeningCrawl";

describe('fetchOpeningCrawl', () => {
  const filmData = MockFilmData;
  const expected = mockOpeningCrawlData;
  /* eslint-disable no-undef */
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve(expected)
  }));
  /* eslint-enable no-undef */

  it('should return an object with crawl, title, episode, and release',
    async () => {
      await expect(fetchOpeningCrawl()).resolves.toEqual(expected);
    });

  // it('should return an object with crawl, title, episode, and release',
  //   async () => {
  //     const result = await fetchOpeningCrawl();
  //     await expect(result).toEqual(expected);
  //   });

  // it('should return an object with crawl, title, episode, and release',
  //   async () => {
  //     const result = await fetchOpeningCrawl();
  //     await expect(fetchOpeningCrawl()).toEqual(expected);
  //   });
});
