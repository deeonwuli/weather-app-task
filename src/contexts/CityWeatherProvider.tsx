import { PropsWithChildren, useEffect, useState } from "react";
import { CityWeather } from "../types/CityWeather";
import { CityWeatherContext } from "./city-weather-context";
import getWeatherByCity from "../data/getWeatherByCity";

export const CityWeatherProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [city, setCity] = useState<string>("");
  const [cityWeather, setCityWeather] = useState<CityWeather>();

  useEffect(() => {
    if (!city) return;

    getWeatherByCity(city)
      .then((data) => {
        setCityWeather(data);
      })
      .catch((error) => {
        console.error("Failed to fetch city weather", error);
      });
  }, [city, cityWeather]);

  const changeCity = (city: string) => {
    setCity(city);
  };

  return (
    <CityWeatherContext.Provider
      value={{
        city,
        cityWeather,
        changeCity,
      }}
    >
      {children}
    </CityWeatherContext.Provider>
  );
};
