import Show from './Show.mjs';
import {fetchData} from '../until/fetchData.mjs';
import {urlDetailTVSeason} from '../until/createURL.mjs';

const getEpisodesSeasonTVShow = (array = []) => {
  let seasons = [];
  array.forEach(el => seasons.push({id: el.episode_number, name: el.name}));
  return seasons;
}

class SeasonTVShow extends Show {
  constructor(idShow, numberSeason) {
    return (async() => {
      let result = await fetchData(urlDetailTVSeason(idShow, numberSeason));
      super(idShow, result.name, result.overview, result.poster_path);
      this.numberSeason = result.season_number;
      this.countEpisodes = result.episodes.length;
      this.episodes = getEpisodesSeasonTVShow(result.episodes);
      return this;
    })();
  }
};

export default SeasonTVShow;