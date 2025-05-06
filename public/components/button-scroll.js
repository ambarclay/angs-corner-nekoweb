class Button extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <marquee>
          <img src="/images/buttons/168.gif" />
          <img src="/images/buttons/2001.gif" />
          <img src="/images/buttons/8831ani.gif" />
          <img src="/images/buttons/adorable.gif" />
          <img src="/images/buttons/AllWeHaveIsEachOther.png" />
          <img src="/images/buttons/brothings.gif" />
          <img src="/images/buttons/cutefontuser.gif" />
          <img src="/images/buttons/eeveelutions-sylveon.gif" />
          <img src="/images/buttons/foreveronline.gif" />
          <img src="/images/buttons/graphic-design.gif" />
          <img src="/images/buttons/nintendo-hh-gba.png" />
          <img src="/images/buttons/loveanimals.gif" />
          <img src="/images/buttons/html_learn_it_today.gif" />
          <img src="/images/buttons/jojo.gif" />
          <img src="/images/buttons/lain.gif" />
          <img src="/images/buttons/typhrakromer.gif" />
        </marquee>
        <marquee scrollamount="10">
          <img src="/images/buttons/macmade2.gif" />
          <img src="/images/buttons/Made_In_The_USA.png" />
          <img src="/images/buttons/microhate.jpg" />
          <img src="/images/buttons/nintendo-hh-ds.png" />
          <img src="/images/buttons/not.gif" />
          <img src="/images/buttons/pictochat.gif" />
          <img src="/images/buttons/playstation.gif" />
          <img src="/images/buttons/rainbowbutton.gif" />
          <img src="/images/buttons/sixeyes-mspaint2.png" />
          <img src="/images/buttons/spamtombutton.gif" />
          <img src="/images/buttons/vscbutton.gif" />
          <img src="/images/buttons/weblogo2.gif" />
          <img src="/images/buttons/WEBP.gif" />
          <img src="/images/buttons/y2k.gif" />
          <img src="/images/buttons/archive.png" />
        </marquee> `;
  }
}

customElements.define("button-scroll", Button);
