import Show from './Show.mjs';
import {fetchData} from '../until/fetchData.mjs';
import {urlDetailsEpisodeTVShow} from '../until/createURL.mjs';

class EpisodeTVShow extends Show {
  constructor(idShow, numberSeason, numberEpisode) {
    return (async() => {
      let result = await fetchData(urlDetailsEpisodeTVShow(idShow, numberSeason, numberEpisode));
      super(idShow, result.name, result.overview, result.still_path);
      this.numberSeason = result.season_number;
      this.numberEpisode = result.episode_number;
      return this;
    })();
  }
};

export default EpisodeTVShow;