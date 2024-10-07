/** @format */

class TopNavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="flex justify-center gap-4 text-white py-5 items-center shadow-lg bg-transparent">
        <div>Lahore</div>
        <div>Karachi</div>
        <div>Hyderabad</div>
        <div>Peshawar</div>
      </nav>
    `;
  }
}

customElements.define("top-nav-bar", TopNavBar);
