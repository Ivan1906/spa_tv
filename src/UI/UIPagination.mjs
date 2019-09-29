const arrayBtn = [
  { id: 'firstPage', name: 'First Page' },
  { id: 'nextPage', name: 'Next Page' },
  { id: 'prevPage', name: 'Prev Page' },
  { id: 'lastPage', name: 'Last Page' }
];

class UIPagination {
  constructor(elementID, pagination = null, uiListTVshows = null) {
    this._elContainer = document.getElementById(elementID);
    this._pagination = pagination;
    this._uiListTVShows = uiListTVshows;
  }

  render() {
    if (!this._pagination) {
      throw Error('The object of pagination is required');
    }
    if (!this._uiListTVShows) {
      throw Error('The object of UIListTVShows is required');
    }

    let self = this;
    arrayBtn.forEach(elBtn => {
      let btn = document.createElement('input');
      btn.setAttribute('type', 'button');
      btn.setAttribute('id', elBtn.id);
      btn.setAttribute('value', elBtn.name);
      btn.addEventListener('click', async function() {
        switch (this.getAttribute('id')) {
          case 'firstPage':
            await self._pagination.firstPage();
            self._uiListTVShows.render(self._pagination.getListTV());
            break;
          case 'nextPage':
            await self._pagination.nextPage();
            self._uiListTVShows.render(self._pagination.getListTV());
            break;
          case 'prevPage':
            await self._pagination.prevPage();
            self._uiListTVShows.render(self._pagination.getListTV());
            break;
          case 'lastPage':
            await self._pagination.lastPage();
            self._uiListTVShows.render(self._pagination.getListTV());
            break;
          default:
            console.log(`Not found button for id = ${this.getAttribute('id')}`);
            break;
        }
      });
      this._elContainer.append(btn);
    });
  }
}

export default UIPagination;
