import Modal from './Modal.mjs';
import UIModalEpisodeTVShow from '../UI/UIModalEpisodeTVShow.mjs';
import EpisodeTVShow from '../Model/EpisodeTVShow.mjs';
import {config} from '../config/settings.mjs';

class UIModalSeasonTVShow extends Modal {
  constructor(elementID) {
    super(elementID);
  }

  render(SeasonTVShow) {
    this.clean();
    this.show();

    if (SeasonTVShow.poster) {
      let img = document.createElement('img');
      img.setAttribute('width', '100px');
      img.setAttribute('height', '150px');
      img.setAttribute('src', `${config.baseUrlImage}${SeasonTVShow.poster}`);
      this
        ._elContainer
        .append(img);
    }

    let b_name = document.createElement('b');
    b_name.textContent = 'Name season TV Show: ';
    let p_name = document.createElement('p');
    p_name.append(b_name);
    p_name.append(document.createTextNode(SeasonTVShow.name));
    this
      ._elContainer
      .append(p_name);

    let b_overview = document.createElement('b');
    b_overview.textContent = 'Overview season TV Show: ';
    let p_overview = document.createElement('p');
    p_overview.append(b_overview);
    p_overview.append(document.createTextNode(SeasonTVShow.overview));
    this
      ._elContainer
      .append(p_overview);

    let b_countSeasons = document.createElement('b');
    b_countSeasons.textContent = 'Number season TV Show: ';
    let p_countSeasons = document.createElement('p');
    p_countSeasons.append(b_countSeasons);
    p_countSeasons.append(document.createTextNode(SeasonTVShow.numberSeason));
    this
      ._elContainer
      .append(p_countSeasons);

    let b_countEpisodes = document.createElement('b');
    b_countEpisodes.textContent = 'Count episodes TV Show: ';
    let p_countEpisodes = document.createElement('p');
    p_countEpisodes.append(b_countEpisodes);
    p_countEpisodes.append(document.createTextNode(SeasonTVShow.countEpisodes));
    this
      ._elContainer
      .append(p_countEpisodes);

    let b_seasons = document.createElement('b');
    b_seasons.textContent = 'Seasons TV Show:';
    let ul = document.createElement('ul');

    SeasonTVShow
      .episodes
      .forEach(episod => {
        let li = document.createElement('li');
        li.setAttribute('id', episod.id);
        li.dataset['idShow'] = SeasonTVShow.idShow;
        li.dataset['numberSeason'] = SeasonTVShow.numberSeason;
        li.textContent = episod.name;
        li.addEventListener('click', async function () {
          let episodeTVShow = await new EpisodeTVShow(this.dataset['idShow'], this.dataset['numberSeason'], this.getAttribute('id'));
          new UIModalEpisodeTVShow('modal').render(episodeTVShow);
        });
        ul.append(li);
      });
    this
      ._elContainer
      .append(b_seasons);
    this
      ._elContainer
      .append(ul);

    super.render();
  }
};

export default UIModalSeasonTVShow;