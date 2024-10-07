/** @format */

class WeatherPredicationCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="flex justify-center items-center ">
    <div class=" max-w-2xl w-full bg-white shadow-lg rounded-lg p-6">
        <div class="flex justify-between items-center">
            <div>
                <h2 class="text-xl font-bold">City Name</h2>
                <p class="text-gray-500">Weather Information</p>
            </div>
        </div>
        
        <div class="flex items-center mt-4">
            <div class="text-5xl font-bold">+11°</div>
            <div class="ml-3">
                <!-- Weather icon -->
                <div class="w-12 h-12 rounded-full bg-gray-300 flex justify-center items-center">
                    <!-- Assuming it's partly cloudy -->
                    <svg class="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.343 17.657a9 9 0 1112.728 0 9 9 0 01-12.728 0zm8.485-8.485a6 6 0 10-8.485 8.485 6 6 0 008.485-8.485z"></path>
                    </svg>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mt-6">
            <div>
                <p class="text-gray-500">Wind Speed</p>
                <p class="font-bold">0.62 м/с</p>
            </div>
            <div>
                <p class="text-gray-500">Gusts of wind</p>
                <p class="font-bold">32%</p>
            </div>
            <div>
                <p class="text-gray-500">Humidity</p>
                <p class="font-bold">1.2 м/с</p>
            </div>
            <div>
                <p class="text-gray-500">Chance of precipitation</p>
                <p class="font-bold">10000 м</p>
            </div>
            <div>
                <p class="text-gray-500">Cloudiness</p>
                <p class="font-bold">32%</p>
            </div>
            <div>
                <p class="text-gray-500">Visibility</p>
                <p class="font-bold">1015 hPa</p>
            </div>
            <div>
                <p class="text-gray-500">Pressure</p>
                <p class="font-bold">32%</p>
            </div>
        </div>
    </div>
</div>`;
  }
}

customElements.define("weather-predication-card", WeatherPredicationCard);
