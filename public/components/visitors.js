class Visitors extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="visitors side-box">
          <img src="/images/visitors.gif" class="sidebarHeading theme-1" />
          <p class="box-title theme-2">visitors</p>
        </div> `;
  }
}

customElements.define("visitors-component", Visitors);
