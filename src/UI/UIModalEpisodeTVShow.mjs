import Modal from './Modal.mjs';
import {config} from '../config/settings.mjs';

class UIModalEpisodeTVShow extends Modal {
  constructor(elementID) {
    super(elementID);
  }

  render(episodeTVShow) {
    this.clean();
    this.show();

    if (episodeTVShow.poster) {
      let img = document.createElement('img');
      img.setAttribute('width', '100px');
      img.setAttribute('height', '150px');
      img.setAttribute('src', `${config.baseUrlImage}${episodeTVShow.poster}`);
      this
        ._elContainer
        .append(img);
    }

    let b_name = document.createElement('b');
    b_name.textContent = 'Name episode TV Show: ';
    let p_name = document.createElement('p');
    p_name.append(b_name);
    p_name.append(document.createTextNode(episodeTVShow.name));
    this
      ._elContainer
      .append(p_name);

    let b_overview = document.createElement('b');
    b_overview.textContent = 'Overview episode TV Show: ';
    let p_overview = document.createElement('p');
    p_overview.append(b_overview);
    p_overview.append(document.createTextNode(episodeTVShow.overview));
    this
      ._elContainer
      .append(p_overview);

    let b_countSeasons = document.createElement('b');
    b_countSeasons.textContent = 'Number season TV Show: ';
    let p_countSeasons = document.createElement('p');
    p_countSeasons.append(b_countSeasons);
    p_countSeasons.append(document.createTextNode(episodeTVShow.numberSeason));
    this
      ._elContainer
      .append(p_countSeasons);

    let b_countEpisodes = document.createElement('b');
    b_countEpisodes.textContent = 'Number episode TV Show: ';
    let p_countEpisodes = document.createElement('p');
    p_countEpisodes.append(b_countEpisodes);
    p_countEpisodes.append(document.createTextNode(episodeTVShow.numberEpisode));
    this
      ._elContainer
      .append(p_countEpisodes);

    super.render();
  }
};

export default UIModalEpisodeTVShow;