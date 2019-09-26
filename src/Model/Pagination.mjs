class Pagination {
  constructor(totalPage) {
    this.totalPage = totalPage;
    this.current = 1;
    this.listTV = [];
  }

  firshPage() {
    this.current = 1;
  }
  nextPage() {
    this.current = this.current < this.totalPage
      ? this.current + 1
      : this.totalPage;
  }
  prevPage() {
    this.current = this.current > 1
      ? this.current - 1
      : this.totalPage;
  }
  lastPage() {
    this.current = this.totalPage;
  }

  fetchData() {}
}

export default Pagination;