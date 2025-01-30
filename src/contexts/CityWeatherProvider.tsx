import { PropsWithChildren, useState } from "react";
import { CityWeatherContext } from "./city-weather-context";
import { useWeatherByCity } from "../hooks/useWeatherByCity";

export const CityWeatherProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [city, setCity] = useState<string>("");

  const { cityWeather, responseState } = useWeatherByCity(city);

  return (
    <CityWeatherContext.Provider
      value={{
        city: city,
        cityWeather,
        responseState,
        changeCity: (city: string) => setCity(city),
      }}
    >
      {children}
    </CityWeatherContext.Provider>
  );
};
