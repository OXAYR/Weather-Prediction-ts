/** @format */

class BottomBar extends HTMLElement {
  connectedCallBack() {
    this.innerHTML = `
    <div class='flex justify-center items-center py-10 bg-white bg-opacity-5 text-black gap-20'>
    <div>Data source: openweathermap.org</div>
    <div>Github Oxayr<a href='https://github.com/OXAYR/Weather-Prediction-ts'/></div>
    </div>
    `;
  }
}
customElements.define("bottom-bar", BottomBar);
