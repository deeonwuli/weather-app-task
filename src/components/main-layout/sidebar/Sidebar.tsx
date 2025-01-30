import styled from "styled-components";
import CityItem from "./CityItem";
import Button from "../../common/Button";
import { useCityWeather } from "../../../contexts/city-weather-context";
import { useFavouriteCities } from "../../../hooks/useFavouriteCities";

const Sidebar = () => {
  const { cityWeather } = useCityWeather();
  const { favouriteCities, updateFavouriteCities } =
    useFavouriteCities(cityWeather);

  return (
    <Aside>
      <FavouritesContainer>
        <Title>Add to favourites</Title>
        <StyledText>
          Save your favourite cities for quick access in the future.
        </StyledText>
        <Button onClick={updateFavouriteCities} disabled={!cityWeather}>
          Add to favourites
        </Button>
      </FavouritesContainer>

      {favouriteCities.map(({ city }) => (
        <CityItem key={city} city={{ title: city, imageUrl: "" }} />
      ))}
    </Aside>
  );
};

export default Sidebar;

const Aside = styled.aside`
  width: 25%;
`;

const FavouritesContainer = styled.div`
  border: 1px solid #dbe3e5;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  gap: 1rem;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 0px;
`;

const StyledText = styled.p`
  color: #637d87;
`;
