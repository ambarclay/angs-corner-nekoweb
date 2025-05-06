class Featured extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="buttons">
          <img src="/images/buttons/nekoweborg007.gif" />
          <img src="/images/buttons/lain.gif" />
          <img src="/images/buttons/pictochat.gif" />
          <img src="/images/buttons/bvwac.gif" />
          <img src="/images/buttons/IMG_1816.gif" />
          <img src="/images/buttons/macmade2.gif" />
          <img src="/images/buttons/2001.gif" />
          <img src="/images/buttons/foreveronline.gif" />
        </div> `;
  }
}

customElements.define("featured-component", Featured);
