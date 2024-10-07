/** @format */

class BottomBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class='flex justify-center items-center py-4 bg-white bg-opacity-40 text-black gap-96'>
          <div>Data source: openweathermap.org</div>
          <div><a href='https://github.com/OXAYR/Weather-Prediction-ts' target="_blank">Github Oxayr</a></div>
        </div>
      `;
  }
}
customElements.define("bottom-bar", BottomBar);
