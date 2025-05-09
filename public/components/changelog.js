class Changelog extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="changelog">
          <div class="changelogposts">
            <p>
              <span class="hilight"><b>5/9/25:</b></span> fixed crt effect on mobile
            </p>
            <p>
              <span class="hilight"><b>5/8/25:</b></span> site is now responsive (kinda)
            </p>
            <p>
              <span class="hilight"><b>5/7/25:</b></span> new visitor counter, added webrings, 
              changed home page layout a bit
            </p>
            <p>
              <span class="hilight"><b>5/6/25:</b></span> connected to github. trying out deploy 
              to nekoweb. got it to work...?
            </p>
            <p>
              <span class="hilight"><b>5/5/25:</b></span> reworked light theme. added resources 
              page and chat box. moved site to nekoweb
            </p>
            <p>
              <span class="hilight"><b>4/30/25:</b></span> made components for clap, visitor
              counter, and tamanotchi. fixed visitor counter
            </p>
            <p>
              <span class="hilight"><b>4/9/25:</b></span> WEBSITE IS LIVE!
            </p>
            <p>
              <span class="hilight"><b>4/9/25:</b></span> theme switched = done for real, visitor 
              count, clap, and guestbook set up
            </p>
            <p>
              <span class="hilight"><b>4/8/25:</b></span> finally fixing my theme switching to
              eliminate duplicate code
            </p>
            <p>
              <span class="hilight"><b>4/2/25:</b></span> back after a break to keep adding 
              more content, added camera page
            </p>
            <p>
              <span class="hilight"><b>3/6/25:</b></span> finished the other theme, theme 
              switching implmented on every page
            </p>
             <p>
              <span class="hilight"><b>3/4/25:</b></span> messed around with a different style. 
              maybe i will integrate a style switcher? we shall see
            </p>
            <p>
              <span class="hilight"><b>3/3/25:</b></span> created components for header, navbar, 
              footer, img marquees, changelog. cleaned up code a bit. linked guestbook button. 
              finished bus page
            </p>
            <p>
              <span class="hilight"><b>3/2/25:</b></span> finished shrines for tgcf and omori
            </p>
            <p>
              <span class="hilight"><b>3/1/25:</b></span> finished stwabewwy page, started work on
              tgcf shrine
            </p>
            <p>
              <span class="hilight"><b>2/28/25:</b></span> finished building out the blog, linked
              every page, built out shrines and digital collections pages, basic styling on other
              pages, started work on stwabewwy page
            </p>
            <p>
              <span class="hilight"><b>2/27/25:</b></span> actually adding content to pages
            </p>
            <p>
              <span class="hilight"><b>2/26/25:</b></span> testing things and adding images
            </p>
            <p>
              <span class="hilight"><b>2/25/25:</b></span> started work on the website!
            </p>
          </div>
        </div> `;
  }
}

customElements.define("changelog-component", Changelog);
