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
          <p class="box-title theme-2">status</p>
			<div class="mystatus">
            <img src="/images/status.gif" class="sidebarHeading theme-1" />
            	<div id="statuscafe">
					<div id="statuscafe-username"></div>
					<div id="statuscafe-content"></div>
				</div>
				<script
					src="https://status.cafe/current-status.js?name=angieblah"
					defer
				></script>
          </div>
        </div>
        <div class="side-box">
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
        <div class="side-box">
        <img class="sidebarHeading theme-1" src="/images/changelog.gif" />
          <p class="box-title theme-2">changelog</p>
          <changelog-component></changelog-component>
        </div>
        <button-scroll class="theme-1"></button-scroll>
        <div class="side-box">
          <img class="sidebarHeading theme-1" src="/images/navlink.gif" />
          <p class="box-title theme-2">navlink</p>
          <div class="navlinkbox">
            <iframe
              class="navlinkads"
              width="180"
              height="180"
              style="border: none"
              src="https://dimden.neocities.org/navlink/"
              name="neolink"
              ></iframe>
          </div>
        </div>
      </div>
          `;
  }
}

customElements.define("left-sidebar-component", LeftSidebar);
