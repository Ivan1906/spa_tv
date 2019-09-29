class Modal {
  constructor(elementID) {
    this._elContainer = document.getElementById(elementID);
  }

  clean() {
    this._elContainer.innerHTML = "";
  }

  show() {
    this._elContainer.style['display'] = 'block';
  }

  hide() {
    this.clean();
    this._elContainer.style['display'] = 'none';
  }

  render() {
    let input = document.createElement('input');
    input.setAttribute('type', 'button');
    input.setAttribute('value', 'Close');
    input.addEventListener('click', () => {
      this.clean();
      this.hide();
    });
    this
      ._elContainer
      .append(input);
  }
};

export default Modal;