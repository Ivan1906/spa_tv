import Pagination from './Model/Pagination.mjs';
import UIListTVShows from './UI/UIListTVShows.mjs';
import UIPagination from './UI/UIPagination.mjs';
import Modal from './UI/Modal.mjs';

let pagination = null;
const init = async() => {
  pagination = await new Pagination();
  let uiListTVShows = new UIListTVShows('listTVShows');
  let uiPagination = new UIPagination('pagination', pagination, uiListTVShows);
  uiListTVShows.render(pagination.getListTV());
  uiPagination.render();

  let radioInputs = document.querySelectorAll("input[type='radio']");
  radioInputs.forEach(node => node.addEventListener('click', async function () {
    await pagination.changeTypeTV(this.dataset['typetv']);
    uiListTVShows.render(pagination.getListTV());
    new Modal('modal').hide();
  }));
};

init();
