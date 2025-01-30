import { createContext, useContext } from "react";
import { CityWeather } from "../types/CityWeather";
import { ResponseState } from "../types/ResponseState";

export interface CityWeatherContextProps {
  city: string;
  isMetricUnit: boolean;
  cityWeather: CityWeather | undefined;
  responseState: ResponseState | undefined;
  changeCity: (city: string) => void;
  changeUnit: () => void;
}

export const CityWeatherContext = createContext<CityWeatherContextProps>({
  city: "",
  isMetricUnit: true,
  cityWeather: undefined,
  responseState: undefined,
  changeCity: () => {},
  changeUnit: () => {},
});

export function useCityWeather() {
  const context = useContext(CityWeatherContext);

  if (!context) throw new Error("City Weather is not initialized");
  return context;
}
