import { useState, useEffect } from "react";
import { fetchData } from "../data/fetchData";
import {
  CityWeather,
  CityWeatherApi,
  WeatherCondition,
} from "../types/CityWeather";
import { ErrorMessage } from "../types/ResponseState";

export function useWeatherByCity(city: string) {
  const [cityWeather, setCityWeather] = useState<CityWeather>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetchData<CityWeatherApi>("/weather", {
          q: city,
          units: "metric",
        });

        const weatherData = transformWeatherResponse(response);
        setCityWeather(weatherData);
        setLoading(false);
      } catch (err: unknown) {
        const error = err as ErrorMessage;
        setError(error.message);
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  return {
    cityWeather: cityWeather,
    responseState: {
      loading,
      error: error ? { message: error } : undefined,
    },
  };
}

function transformWeatherResponse(response: CityWeatherApi): CityWeather {
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
