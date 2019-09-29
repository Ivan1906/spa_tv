import Show from './Show.mjs';
import {fetchData} from '../until/fetchData.mjs';
import {urlDetailTVShow} from '../until/createURL.mjs';

const getSeasonsTVShow = (array = []) => {
  let seasons = [];
  array.forEach(el => seasons.push({number: el.season_number, name: el.name}));
  return seasons;
}

class TVShow extends Show {
  constructor(id) {
    return (async() => {
      let result = await fetchData(urlDetailTVShow(id));
      super(id, result.name, result.overview, result.poster_path);
      this.countSeasons = result.number_of_seasons;
      this.countEpisodes = result.number_of_episodes;
      this.seasons = getSeasonsTVShow(result.seasons);
      return this;
    })();
  }
};

export default TVShow;