import { useEffect, useState } from "react";
import { City } from "../types/City";
import { CityWeather } from "../types/CityWeather";

export function useFavouriteCities(cityWeather: CityWeather | undefined) {
  const [favouriteCities, setFavouriteCities] = useState<City[]>(() =>
    getFavouriteCities()
  );

  useEffect(() => {
    if (favouriteCities.length !== getFavouriteCities().length) {
      const existingFavouriteCities = getFavouriteCities();
      setFavouriteCities(existingFavouriteCities);
    }
  }, [favouriteCities]);

  const updateFavouriteCities = () => {
    const updatedFavouriteCities = getFavouriteCities();
    setFavouriteCities(updatedFavouriteCities);

    return addCityToFavourites(favouriteCities, cityWeather?.name ?? "");
  };

  return {
    favouriteCities: favouriteCities,
    updateFavouriteCities: updateFavouriteCities,
  };
}

function getFavouriteCities(): City[] {
  const favouriteCitiesData = localStorage.getItem("favourites");

  return favouriteCitiesData ? JSON.parse(favouriteCitiesData) : [];
}

function addCityToFavourites(favouriteCities: City[], city: string): void {
  const uniqueCities = [
    ...new Set(
      favouriteCities.map((favouriteCity) => favouriteCity.city).concat(city)
    ),
  ];
  const updatedFavourites: City[] = uniqueCities.map((city) => ({
    city: city,
  }));

  return localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
}
