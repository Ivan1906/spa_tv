import {fetchData} from '../until/fetchData.mjs';
import {urlListTVShows} from '../until/createURL.mjs';
import {convertToArrayListTV} from '../until/convertToArrayListTV.mjs';

class Pagination {
  constructor() {
    this.totalPage = 1;
    this.current = 1;
    this._typeTV = 'tv/popular';
    return (async() => {
      let result = await fetchData(urlListTVShows(this.current, this._typeTV));
      this.totalPage = result.total_pages;
      this._listTV = convertToArrayListTV(result.results);
      return this;
    })();
  }

  async firstPage() {
    this.current = 1;
    let result = await fetchData(urlListTVShows(this.current, this._typeTV));
    this._listTV = convertToArrayListTV(result.results);
  }

  async nextPage() {
    this.current = this.current < this.totalPage
      ? this.current + 1
      : this.totalPage;
    let result = await fetchData(urlListTVShows(this.current, this._typeTV));
    this._listTV = convertToArrayListTV(result.results);
  }

  async prevPage() {
    this.current = this.current > 1
      ? this.current - 1
      : 1;
    let result = await fetchData(urlListTVShows(this.current, this._typeTV));
    this._listTV = convertToArrayListTV(result.results);
  }

  async lastPage() {
    this.current = this.totalPage;
    let result = await fetchData(urlListTVShows(this.current, this._typeTV));
    this._listTV = convertToArrayListTV(result.results);
  }

  async changeTypeTV(type = 'tv/popular') {
    if (type === 'tv/popular' || type === 'tv/top_rated') {
      this.current = 1;
      this._typeTV = type;
      let result = await fetchData(urlListTVShows(this.current, this._typeTV));
      this.totalPage = result.total_pages;
      this._listTV = convertToArrayListTV(result.results);
    } else {
      new Error('Wrong type TV shows');
    }
  }

  getListTV() {
    return this._listTV;
  }
}

export default Pagination;
