class Visitors extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="visitors side-box">
          <img src="/images/visitors.gif" class="sidebarHeading theme-1" />
          <p class="box-title theme-2">visitors</p>
          <div id="visitors"></div>
        </div>
           	 `;
  }
}

customElements.define("visitors-component", Visitors);

/* <div align=center>
				<a href='https://www.counter12.com'>
					<img src='https://www.counter12.com/img-32y69Y3d23B1WY86-3.gif' border='0' alt='contador de acessos'>
				</a>
				<script type='text/javascript' src='https://www.counter12.com/ad.js?id=32y69Y3d23B1WY86'></script>
			</div>  */
