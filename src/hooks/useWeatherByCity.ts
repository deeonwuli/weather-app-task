import { useState, useEffect } from "react";
import { fetchData } from "../data/fetchData";
import {
  CityWeather,
  CityWeatherApi,
  WeatherCondition,
} from "../types/CityWeather";
import { ErrorMessage, ResponseState } from "../types/ResponseState";

export function useWeatherByCity(city: string) {
  const [cityWeather, setCityWeather] = useState<CityWeather>();
  const [responseState, setResponseState] = useState<ResponseState>({
    loading: false,
    error: undefined,
  });

  useEffect(() => {
    async function fetchWeather() {
      setResponseState((prevState) => ({ ...prevState, loading: true }));
      try {
        const response = await fetchData<CityWeatherApi>("/weather", {
          q: city,
          units: "metric",
        });

        const weatherData = transformWeatherResponse(response);
        setCityWeather(weatherData);
        setResponseState((prevState) => ({ ...prevState, error: undefined }));
      } catch (err: unknown) {
        const error = err as ErrorMessage;
        setResponseState((prevState) => ({
          ...prevState,
          error: { message: error.message },
        }));
      } finally {
        setResponseState((prevState) => ({ ...prevState, loading: false }));
      }
    }

    fetchWeather();
  }, [city]);

  return {
    cityWeather: cityWeather,
    responseState: responseState,
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
    wind: { speed: response.wind.speed, degree: response.wind.degree },
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
