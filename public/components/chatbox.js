class Chatbox extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
         <div class="side-box chatbox">
         <img src="/images/chat.gif" class="sidebarHeading theme-1" />
          <p class="box-title theme-2">chat</p>
          <div>
            <iframe
              src="https://www3.cbox.ws/box/?boxid=3546353&boxtag=nqIyk8"
              width="100%"
              height="294"
              allowtransparency="yes"
              allow="autoplay"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              scrolling="auto"></iframe>
          </div>
        </div> `;
  }
}

customElements.define("chatbox-component", Chatbox);
