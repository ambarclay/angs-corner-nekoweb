class MobileTopNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="topnav">
            <a href="/index.html" class="active logo theme-1"><b>ang's corner</b></a>
            <div id="myLinks">
                <a class="navlink" href="/index.html">home</a>
                <a class="navlink" href="/about.html">about me</a>
                <a class="navlink" href="/blog/index.html">blog</a>
                <a class="navlink" href="/bus.html">the bus</a>
                <a class="navlink" href="/cameras.html">camera collection</a>
                <a class="navlink" href="/collections.html">digital collections</a>
                <a class="navlink" href="https://users3.smartgb.com/g/g.php?a=s&i=g36-38350-af" target="_blank">guestbook</a>
                <a class="navlink" href="/resources.html">resources</a>
                <a class="navlink" href="/shrines.html">shrines</a>
                <a class="navlink" href="/stwabewwy.html">stwabewwy</a>
                <a href=""javascript:location.reload();" onclick="switchCSS()">switch theme</a>
            </div>
            <a href="javascript:void(0);" class="icon" onclick="showMobileNav()">
                <i class="fa fa-bars"></i>
            </a>
        </div>
          `;
  }
}

customElements.define("mobile-nav-component", MobileTopNav);
