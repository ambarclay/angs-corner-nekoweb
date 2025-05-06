class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="navbar">
          <ul class="navList">
            <li><span class="theme-1">✿ </span><span class="theme-2"> >></span><a class="navlink" href="/index.html">home</a></li>
            <li><span class="theme-1">✿ </span><span class="theme-2"> >></span><a class="navlink" href="/about.html">about me</a></li>
            <li><span class="theme-1">✿ </span><span class="theme-2"> >></span><a class="navlink" href="/blog/index.html">blog</a></li>
            <li><span class="theme-1">✿ </span><span class="theme-2"> >></span><a class="navlink" href="/bus.html">the bus</a></li>
            <li><span class="theme-1">✿ </span><span class="theme-2"> >></span><a class="navlink" href="/cameras.html">camera collection</a></li>
            <li><span class="theme-1">✿ </span><span class="theme-2"> >></span><a class="navlink" href="/collections.html">digital collections</a></li>
            <li><span class="theme-1">✿ </span><span class="theme-2"> >></span><a class="navlink" href="https://users3.smartgb.com/g/g.php?a=s&i=g36-38350-af" target="_blank">guestbook</a></li>
            <li><span class="theme-1">✿ </span><span class="theme-2"> >></span><a class="navlink" href="/resources.html">resources</a></li>
            <li><span class="theme-1">✿ </span><span class="theme-2"> >></span><a class="navlink" href="/shrines.html">shrines</a></li>
            <li><span class="theme-1">✿ </span><span class="theme-2"> >></span><a class="navlink" href="/stwabewwy.html">stwabewwy</a></li>
          </ul>
        </div>
        `;
  }
}

customElements.define("navbar-component", Navbar);
