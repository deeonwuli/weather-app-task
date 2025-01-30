import { createContext, useContext } from "react";
import { CityWeather } from "../types/CityWeather";

export interface CityWeatherContextProps {
  city: string;
  cityWeather: CityWeather | undefined;
  changeCity: (city: string) => void;
}

export const CityWeatherContext = createContext<CityWeatherContextProps>({
  city: "",
  cityWeather: undefined,
  changeCity: () => {},
});

export function useCityWeather() {
  const context = useContext(CityWeatherContext);

  if (!context) throw new Error("City Weather is not initialized");
  return context;
}
