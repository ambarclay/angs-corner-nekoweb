class Tamanotchi extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          
        <div class="side-box">
          <img class="sidebarHeading theme-1" src="/images/tamanotchi.gif" />
          <p class="box-title theme-2">tamanotchi</p>
          <div class="tamanotchi">
            <a href="https://tamanotchi.world/20263c"><img src="https://tamanotchi.world/i/20263" alt="It's tamaNOTchi! Click to feed!" /></a>
            <a href="https://tamanotchi.world/20264c"><img src="https://tamanotchi.world/i/20264" alt="It's tamaNOTchi! Click to feed!" /></a>
            <a href="https://tamanotchi.world/20265c"><img src="https://tamanotchi.world/i/20265" alt="It's tamaNOTchi! Click to feed!" /></a>
          </div>
        </div>`;
  }
}

customElements.define("tamanotchi-component", Tamanotchi);
