/** @format */

class WeatherPredicationCarousal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="flex justify-center items-center ">
    <div class="max-w-2xl w-full bg-white shadow-lg rounded-lg p-4">
        <div class="flex justify-between items-center">
            <h3 class="font-bold text-lg">Прогноз на каждые 3 часа</h3>
            <div class="flex items-center space-x-4">
                <!-- Left Arrow -->
                <button class="text-gray-500 hover:text-gray-700 focus:outline-none">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                    </svg>
                </button>
                <!-- Right Arrow -->
                <button class="text-gray-500 hover:text-gray-700 focus:outline-none">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Forecast data -->
        <div class="flex justify-between items-center mt-4 space-x-4">
            <!-- Forecast item -->
            <div class="flex flex-col items-center">
                <div class="text-2xl font-bold">+11°</div>
                <div class="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center mt-2">
                    <!-- Partly cloudy icon (placeholder) -->
                    <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.343 17.657a9 9 0 1112.728 0 9 9 0 01-12.728 0zm8.485-8.485a6 6 0 10-8.485 8.485 6 6 0 008.485-8.485z"></path>
                    </svg>
                </div>
                <div class="text-sm text-gray-500 mt-2">21:00 Вт</div>
            </div>
            
            <!-- Repeat for each time period -->
            <div class="flex flex-col items-center">
                <div class="text-2xl font-bold">+11°</div>
                <div class="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center mt-2">
                    <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.343 17.657a9 9 0 1112.728 0 9 9 0 01-12.728 0zm8.485-8.485a6 6 0 10-8.485 8.485 6 6 0 008.485-8.485z"></path>
                    </svg>
                </div>
                <div class="text-sm text-gray-500 mt-2">00:00 Вт</div>
            </div>
            
            <div class="flex flex-col items-center">
                <div class="text-2xl font-bold">+11°</div>
                <div class="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center mt-2">
                    <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.343 17.657a9 9 0 1112.728 0 9 9 0 01-12.728 0zm8.485-8.485a6 6 0 10-8.485 8.485 6 6 0 008.485-8.485z"></path>
                    </svg>
                </div>
                <div class="text-sm text-gray-500 mt-2">03:00 Ср</div>
            </div>

            <div class="flex flex-col items-center">
                <div class="text-2xl font-bold">+11°</div>
                <div class="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center mt-2">
                    <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.343 17.657a9 9 0 1112.728 0 9 9 0 01-12.728 0zm8.485-8.485a6 6 0 10-8.485 8.485 6 6 0 008.485-8.485z"></path>
                    </svg>
                </div>
                <div class="text-sm text-gray-500 mt-2">06:00 Ср</div>
            </div>

            <div class="flex flex-col items-center">
                <div class="text-2xl font-bold">+11°</div>
                <div class="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center mt-2">
                    <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.343 17.657a9 9 0 1112.728 0 9 9 0 01-12.728 0zm8.485-8.485a6 6 0 10-8.485 8.485 6 6 0 008.485-8.485z"></path>
                    </svg>
                </div>
                <div class="text-sm text-gray-500 mt-2">09:00 Ср</div>
            </div>
        </div>
    </div>
</div>`;
  }
}

customElements.define(
  "weather-predication-carousal",
  WeatherPredicationCarousal
);
