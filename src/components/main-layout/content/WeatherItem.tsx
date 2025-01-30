import styled from "styled-components";
import Icon from "../../common/Icon";
import { LabeledCardProps } from "../../../types/LabeledCardProps";
import { CityWeather } from "../../../types/CityWeather";
import { getWindDirection } from "../../../utils/weatherHelpers";

const WeatherItem = (props: {
  weather: LabeledCardProps;
  cityWeather: CityWeather;
}) => {
  const { imageUrl, title } = props.weather;
  const description = getWeatherItemDescription(
    props.weather,
    props.cityWeather
  );

  return (
    <StyledDiv>
      <Icon src={imageUrl} alt={`${title} icon`} />
      <h5>{title}</h5>
      <p>{description}</p>
    </StyledDiv>
  );
};

export default WeatherItem;

const StyledDiv = styled.div`
  border: 1px solid #dbe3e5;
  width: calc(50% - 1rem);
  border-radius: 8px;
  padding: 16px;

  h5 {
    font-size: 16px;
    font-weight: 700;
  }

  span {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function getWeatherItemDescription(
  weather: LabeledCardProps,
  cityWeather: CityWeather
): string {
  switch (weather.title) {
    case "Humidity":
      return `${cityWeather.humidity}%`;
    case "Wind": {
      const { degree, speed } = cityWeather.wind;

      const windDirection = degree ? getWindDirection(degree) : undefined;
      return `${speed}km/h ${windDirection ? `from the ${windDirection}` : ""}`;
    }
    default:
      return weather.description || "";
  }
}

// if we use openWeather API weatherConditions, we can switch out to this icon component
{
  /* <Icon
  src={`https://openweathermap.org/img/w/${imageUrl}.png`}
  alt={`${title} icon`}
/>; */
}
