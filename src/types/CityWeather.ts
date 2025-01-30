import { LabeledCardProps } from "./LabeledCardProps";

export type CityWeatherApi = {
  dt: number;
  main: {
    temp: number;
    humidity: number;
  };
  name: string;
  sys: {
    country: string;
    state?: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  weather: APIWeather[];
  wind: {
    speed: number;
    degree: number;
  };
};

export type APIWeather = {
  id: string;
  icon: string;
  main: string;
  description: string;
};

export type CityWeather = {
  region: string;
  name: string;
  humidity: number;
  temperature: number;
  time: Time;
  weatherConditions: WeatherCondition[];
  weatherHighlights: WeatherHighlights;
  windSpeed: number;
};

type Time = {
  timezone: number;
  localTime: number;
};

export type WeatherCondition = LabeledCardProps & { id: string };

export type WeatherHighlights = {
  sunrise: number;
  sunset: number;
};
