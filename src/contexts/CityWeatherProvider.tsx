import { PropsWithChildren, useState } from "react";
import { CityWeatherContext } from "./city-weather-context";
import { useWeatherByCity } from "../hooks/useWeatherByCity";

export const CityWeatherProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [city, setCity] = useState<string>("");
  const [isMetricUnit, setMetricUnit] = useState<boolean>(true);

  const { cityWeather, responseState } = useWeatherByCity(city, isMetricUnit);

  return (
    <CityWeatherContext.Provider
      value={{
        city,
        isMetricUnit,
        cityWeather,
        responseState,
        changeCity: (city: string) => setCity(city),
        changeUnit: () => setMetricUnit(!isMetricUnit),
      }}
    >
      {children}
    </CityWeatherContext.Provider>
  );
};
