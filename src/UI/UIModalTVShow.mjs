import Modal from './Modal.mjs';
import UIModalSeasonTVShow from '../UI/UIModalSeasonTVShow.mjs';
import SeasonTVShow from '../Model/SeasonTVShow.mjs';
import {config} from '../config/settings.mjs';

class UIModalTVShow extends Modal {
  constructor(elementID) {
    super(elementID);
  }

  render(TVShow) {
    this.clean();
    this.show();

    if (TVShow.poster) {
      let img = document.createElement('img');
      img.setAttribute('width', '100px');
      img.setAttribute('height', '150px');
      img.setAttribute('src', `${config.baseUrlImage}${TVShow.poster}`)
      this
        ._elContainer
        .append(img);
    }

    let b_name = document.createElement('b');
    b_name.textContent = 'Name TV Show: ';
    let p_name = document.createElement('p');
    p_name.append(b_name);
    p_name.append(document.createTextNode(TVShow.name));
    this
      ._elContainer
      .append(p_name);

    let b_overview = document.createElement('b');
    b_overview.textContent = 'Overview TV Show: ';
    let p_overview = document.createElement('p');
    p_overview.append(b_overview);
    p_overview.append(document.createTextNode(TVShow.overview));
    this
      ._elContainer
      .append(p_overview);

    let b_countSeasons = document.createElement('b');
    b_countSeasons.textContent = 'Count seasons TV Show: ';
    let p_countSeasons = document.createElement('p');
    p_countSeasons.append(b_countSeasons);
    p_countSeasons.append(document.createTextNode(TVShow.countSeasons));
    this
      ._elContainer
      .append(p_countSeasons);

    let b_countEpisodes = document.createElement('b');
    b_countEpisodes.textContent = 'Count episodes TV Show: ';
    let p_countEpisodes = document.createElement('p');
    p_countEpisodes.append(b_countEpisodes);
    p_countEpisodes.append(document.createTextNode(TVShow.countEpisodes));
    this
      ._elContainer
      .append(p_countEpisodes);

    let b_seasons = document.createElement('b');
    b_seasons.textContent = 'Seasons TV Show:';
    let ul = document.createElement('ul');
    TVShow
      .seasons
      .forEach(season => {
        let li = document.createElement('li');
        li.setAttribute('id', season.number);
        li.dataset['idShow'] = TVShow.idShow;
        li.textContent = season.name;
        li.addEventListener('click', async function () {
          let seasonTVShow = await new SeasonTVShow(this.dataset['idShow'], this.getAttribute('id'));
          new UIModalSeasonTVShow('modal').render(seasonTVShow);
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

export default UIModalTVShow;