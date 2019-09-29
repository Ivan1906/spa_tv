import TVShow from '../Model/TVShow.mjs';
import UIModalTVShow from '../UI/UIModalTVShow.mjs';

class UIListTVShows {
  constructor(elementID) {
    this._elContainer = document.getElementById(elementID);
  }

  clean() {
    this._elContainer.innerHTML = '';
  }

  render(listTV = []) {
    this.clean();
    let ul = document.createElement('ul');
    listTV.forEach(el => {
      let li = document.createElement('li');
      li.setAttribute('id', el.id);
      li.addEventListener('click', async function () {
        let tv = await new TVShow(this.getAttribute('id'));
        new UIModalTVShow('modal').render(tv);
      });
      li.textContent = el.name;
      ul.append(li);
    });
    this
      ._elContainer
      .append(ul);
  }
}

export default UIListTVShows;
