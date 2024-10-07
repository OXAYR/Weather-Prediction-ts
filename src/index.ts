/** @format */

import "./components/navabar";
import "./components/bottomBar";
import "./components/weatherPredictionCard";
import "./components/weatherPredictionCarousal";
import {
  GeolocationError,
  WeatherData,
  Coordinates,
} from "./types/WeatherDataTypes";

function getUserLocation(): Promise<Coordinates> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          resolve({ lat, lon });
        },
        (error: GeolocationError) => {
          reject(error);
        }
      );
    } else {
      reject({
        code: 0,
        message: "Geolocation is not supported by your browser.",
      });
    }
  });
}

async function logUserLocation(): Promise<void> {
  try {
    const { lat, lon } = await getUserLocation();
    console.log("Here is the location of the user:", lat, lon);
  } catch (error) {
    console.error("Error getting user location:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  logUserLocation();
});
