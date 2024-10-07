/** @format */

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface WeatherData {
  current: CurrentWeather;
  daily: DailyWeather[];
}

export interface CurrentWeather {
  temp: number;
  humidity: number;
  weather: WeatherCondition[];
}

export interface DailyWeather {
  dt: number;
  temp: {
    day: number;
    night: number;
  };
  weather: WeatherCondition[];
}

export interface WeatherCondition {
  description: string;
  icon: string;
}

export interface GeolocationError {
  code: number;
  message: string;
}
