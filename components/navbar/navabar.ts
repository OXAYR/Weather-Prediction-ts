/** @format */

class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connnectedCallBack() {
    this.innerHTML = `<nav class="shadow-lg bg-transparent flex justify-center items-center">
      <div>lahore</div>
      <div>Karachi</div>
      <div>Hyderabad</div>
      <div>Peshawar</div>
    </nav>
    `;
  }
}

customElements.define("top-nav-bar", Navbar);
