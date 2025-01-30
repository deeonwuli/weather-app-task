import { fetchData } from "./fetchData";
import {
  CityWeather,
  CityWeatherApi,
  WeatherCondition,
} from "../types/CityWeather";

export default async function getWeatherByCity(
  city: string
): Promise<CityWeather> {
  const response = await fetchData<CityWeatherApi>("/weather", {
    q: city,
    units: "metric",
  });

  return {
    region: response.sys.state ?? getCountryName(response.sys.country),
    name: response.name,
    time: {
      timezone: response.timezone,
      localTime: response.dt,
    },

    temperature: response.main.temp,
    humidity: response.main.humidity,
    windSpeed: response.wind.speed,
    weatherConditions: mapWeatherConditionsResponse(response),
    weatherHighlights: {
      sunrise: response.sys.sunrise,
      sunset: response.sys.sunset,
    },
  };
}

function mapWeatherConditionsResponse(
  response: CityWeatherApi
): WeatherCondition[] {
  return response.weather.map((weatherItem) => ({
    id: weatherItem.id,
    imageUrl: weatherItem.icon,
    description: weatherItem.description,
    title: weatherItem.main,
  }));
}

function getCountryName(countryCode: string): string {
  return (
    new Intl.DisplayNames(["en"], { type: "region" }).of(countryCode) ||
    countryCode
  );
}
