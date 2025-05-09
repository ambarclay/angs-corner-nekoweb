class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="header theme-1">
            <img class="gifheading" src="/images/angs-corner-heading.gif" />
            <a href="https://www.youtube.com/@angieblah245" target="_blank"><img class="angy" src="/images/angy.png" /></a>
            <img src="/images/olruggio.png" class="olruggio"/>
        </div>
        <div class="header theme-2">
            <h1>>>ang's corner</h1>
            <a href="https://www.youtube.com/@angieblah245" target="_blank"><img class="angy" src="/images/angy.png" /></a>
            <img src="/images/olruggio.png" class="olruggio"/>
        </div>
        
        <div class="link-back">
          <img src="/images/link-me.gif" class="sidebarHeading theme-1" />
          <p class="box-title theme-2">link to my site</p>
          <img src="/images/buttons/angs-corner-button-2.gif" class="link-back-button"/>
          <textarea id="link-back" name="link-back" rows="2" cols="15" ><a href="https://angs-corner.nekoweb.org/"><img src="https://i.imgur.com/rd7l8WZ.gif" referrerpolicy="no-referrer" /></a></textarea>
        </div>
        `;
  }
}

customElements.define("header-component", Header);
