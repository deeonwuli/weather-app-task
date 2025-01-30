import { PropsWithChildren, useEffect, useState } from "react";
import { CityWeather } from "../types/CityWeather";
import { CityWeatherContext } from "./city-weather-context";
import getWeatherByCity from "../data/getWeatherByCity";
import { ErrorMessage, ResponseState } from "../types/ResponseState";

export const CityWeatherProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [city, setCity] = useState<string>("");
  const [cityWeather, setCityWeather] = useState<CityWeather>();
  const [responseState, setResponseState] = useState<ResponseState>({
    loading: false,
    error: undefined,
  });

  useEffect(() => {
    if (!city) return;
    setResponseState((prevState) => ({ ...prevState, loading: true }));

    getWeatherByCity(city)
      .then((data) => setCityWeather(data))
      .catch((error: ErrorMessage) => {
        console.error("Failed to fetch city weather", error.message);
        setResponseState((prevState) => ({ ...prevState, error }));
      })
      .finally(() =>
        setResponseState((prevState) => ({ ...prevState, loading: false }))
      );
  }, [city, cityWeather]);

  const changeCity = (city: string) => {
    setCity(city);
  };

  return (
    <CityWeatherContext.Provider
      value={{
        city,
        cityWeather,
        responseState,
        changeCity,
      }}
    >
      {children}
    </CityWeatherContext.Provider>
  );
};
