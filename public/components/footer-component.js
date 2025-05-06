class Foot extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="foot">
        <footer class="verybottom">© 2025 ang, all rights reserved ♡</footer>
      </div>
          `;
  }
}

customElements.define("footer-component", Foot);
