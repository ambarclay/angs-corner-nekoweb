class Clap extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
         <div class="side-box">
          <div class="clap">
            <img src="/images/clap.gif" class="sidebarHeading theme-1" />
            <p class="box-title theme-2">clap for me</p>
            <!-- FC2 Clap tag starts here -->
            <a href="//clap.fc2.com/post/angieblah24/?url=https%3A%2F%2Fangs-corner.neocities.org&title=ang%27s+corner%21" target="_blank" title="Web Clap by FC2"><img src="//clap.fc2.com/images/button/white/angieblah24?url=https%3A%2F%2Fangs-corner.neocities.org&amp;lang=en" alt="Web Clap by FC2" style="border:none;" /></a>
            <!-- FC2 Clap tag ends here -->
            <!--<p>clap goes here</p>-->
          </div>
        </div> `;
  }
}

customElements.define("clap-component", Clap);
