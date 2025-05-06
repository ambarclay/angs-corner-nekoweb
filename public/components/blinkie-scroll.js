class Blinkie extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="blinkiemarquee">
          <marquee direction="up" height="270px">
            <div style="height: 1000px">
              <img class="sideblinkie" src="/images/blinkies/0103-kitty.gif" />
              <img class="sideblinkie" src="/images/blinkies/0143-webkinz.gif" />
              <img class="sideblinkie" src="/images/blinkies/alife.gif" />
              <img class="sideblinkie" src="/images/blinkies/anime.gif" />
              <img class="sideblinkie" src="/images/blinkies/anime2.gif" />
              <img class="sideblinkie" src="/images/blinkies/believe.gif" />
              <img class="sideblinkie" src="/images/blinkies/Blinkie_I_Heart_My_3DS.gif" />
              <img class="sideblinkie" src="/images/blinkies/cantlive.gif" />
              <img class="sideblinkie" src="/images/blinkies/cGnk6rS.gif" />
              <img class="sideblinkie" src="/images/blinkies/computer.gif" />
              <img class="sideblinkie" src="/images/blinkies/cring.webp" />
              <img class="sideblinkie" src="/images/blinkies/cute.gif" />
              <img class="sideblinkie" src="/images/blinkies/dontlike.gif" />
              <img class="sideblinkie" src="/images/blinkies/eepy.gif" />
              <img class="sideblinkie" src="/images/blinkies/flower.gif" />
              <img class="sideblinkie" src="/images/blinkies/groovyblinky.gif" />
              <img class="sideblinkie" src="/images/blinkies/https-toyhou-se-Chot.gif" />
              <img class="sideblinkie" src="/images/blinkies/idonotam.gif" />
              <img class="sideblinkie" src="/images/blinkies/junkfood.gif" />
              <img class="sideblinkie" src="/images/blinkies/loser.gif" />
              <img class="sideblinkie" src="/images/blinkies/loveblinkie.gif" />
              <img class="sideblinkie" src="/images/blinkies/minedcraft.gif" />
              <img class="sideblinkie" src="/images/blinkies/mspaint1.gif" />
              <img class="sideblinkie" src="/images/blinkies/net.gif" />
              <img class="sideblinkie" src="/images/blinkies/night.gif" />
              <img class="sideblinkie" src="/images/blinkies/picmix.com_2430706.gif" />
              <img class="sideblinkie" src="/images/blinkies/pixels.gif" />
              <img class="sideblinkie" src="/images/blinkies/popup.gif" />
              <img class="sideblinkie" src="/images/blinkies/rainbows.gif" />
              <img class="sideblinkie" src="/images/blinkies/rush.gif" />
              <img class="sideblinkie" src="/images/blinkies/scream.gif" />
              <img class="sideblinkie" src="/images/blinkies/shiny.gif" />
              <img class="sideblinkie" src="/images/blinkies/tails.gif" />
              <img class="sideblinkie" src="/images/blinkies/thegoldenage.gif" />
              <img
                class="sideblinkie"
                src="/images/blinkies/tumblr_3905ed1e948e2afd3ee90bde0ca67bd8_70994677_2048.gif" />
              <img class="sideblinkie" src="/images/blinkies/unnamed.gif" />
            </div>
          </marquee>
        </div> `;
  }
}

customElements.define("blinkie-scroll", Blinkie);
