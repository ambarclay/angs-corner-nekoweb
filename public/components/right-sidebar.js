class RightSidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="rightbar">
        <div class="side-box" style="margin-top: 0">
          <div class="style-changer">
            <img src="/images/style.gif" class="sidebarHeading theme-1" />
            <p class="box-title theme-2">style</p>
            <button onclick="switchCSS()">switch theme</button>
          </div>
        </div>
        <clap-component></clap-component>
        <div class="side-box">
          <img src="/images/buttons.gif" class="sidebarHeading theme-1" />
          <p class="box-title theme-2">buttons</p>
          <featured-component></featured-component>
        </div>
        <tamanotchi-component></tamanotchi-component>
        <blinkie-scroll class="theme-1"></blinkie-scroll>
        <div class="side-box find-me">
        <img src="/images/links.gif" class="sidebarHeading theme-1" />
          <p class="box-title theme-2">find me</p>
          <a href="https://www.goodreads.com/user/show/183374390-ang" class="link"> <p class="pp">goodreads</p></a>
          <a href="https://myanimelist.net/profile/angieblah" class="link"> <p class="pp">myanimelist</p></a>
        </div>
        <chatbox-component></chatbox-component>
      </div>
            `;
  }
}

customElements.define("right-sidebar-component", RightSidebar);
