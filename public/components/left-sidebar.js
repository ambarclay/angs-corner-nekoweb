class LeftSidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="leftbar">
        <div class="side-box" style="margin-top: 0">
          <p class="box-title theme-2">navigation</p>
          <img class="sidebarHeading theme-1" src="/images/navigation.gif" />
          <navbar-component></navbar-component>
        </div>
        <div class="side-box">
            <div class="style-changer tabletbar">
                <img src="/images/style.gif" class="sidebarHeading theme-1" />
                <p class="box-title theme-2">style</p>
                <button onclick="switchCSS()">switch theme</button>
        </div>
        <div class="side-box">
          <p class="box-title theme-2">status</p>
			    <div class="mystatus">
            <img src="/images/status.gif" class="sidebarHeading theme-1" />
            	<div id="statuscafe">
					      <div id="statuscafe-username"></div>
					      <div id="statuscafe-content"></div>
				      </div>
          </div>
        </div>
        <clap-component class="tabletbar"></clap-component>
        <div class="side-box fullscreen">
          <img class="sidebarHeading theme-1" src="/images/time.gif" />
            <div class="mytime theme-1">
              <iframe
                src="https://free.timeanddate.com/clock/i9s8bdko/n421/fn7/fc573946/tct/pct/ta1"
                frameborder="0"
                width="152"
                height="22"
                allowtransparency="true"
                class="timecounter">
              </iframe>
          </div>
          <p class="box-title theme-2">my time</p>
          <div class="mytime theme-2">
            <iframe
              src="https://free.timeanddate.com/clock/i9sir2ph/n422/fn12/fcfff/tct/pct/ta1"
              frameborder="0"
              width="129"
              height="19"
              allowtransparency="true"
              class="timecounter theme-2"></iframe>
          </div>
        </div>
        <div class="side-box tabletbar">
          <img src="/images/buttons.gif" class="sidebarHeading theme-1" />
          <p class="box-title theme-2">buttons</p>
          <featured-component></featured-component>
        </div>
        <tamanotchi-component class="tabletbar"></tamanotchi-component>
        <div class="side-box find-me tabletbar">
          <img src="/images/links.gif" class="sidebarHeading theme-1" />
            <p class="box-title theme-2">find me</p>
            <a href="https://www.goodreads.com/user/show/183374390-ang" class="link"> <p class="pp">goodreads</p></a>
            <a href="https://myanimelist.net/profile/angieblah" class="link"> <p class="pp">myanimelist</p></a>
          </div>
        </div>
        <div class="side-box">
        <img class="sidebarHeading theme-1" src="/images/changelog.gif" />
          <p class="box-title theme-2">changelog</p>
          <changelog-component></changelog-component>
        </div>
        <button-scroll class="theme-1"></button-scroll>
        <div class="side-box">
          <img class="sidebarHeading theme-1" src="/images/nekolink.gif" />
          <p class="box-title theme-2">nekolink</p>
          <div class="navlinkbox">
            <iframe 
              width="160" 
              height="160" 
              style="border:none" 
              src="https://rubybulbs.net/neko.html">
            </iframe>
          </div>
        </div>
      </div>
      
          `;
  }
}

customElements.define("left-sidebar-component", LeftSidebar);
