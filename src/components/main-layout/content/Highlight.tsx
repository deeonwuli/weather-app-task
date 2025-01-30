import styled from "styled-components";
import { LabeledCardProps } from "../../../types/LabeledCardProps";
import { WeatherHighlights } from "../../../types/CityWeather";
import { convertTimestampToTime } from "../../../utils/dateHelpers";

const Highlight = (props: {
  highlight: LabeledCardProps;
  weatherHighlights: WeatherHighlights;
}) => {
  const { highlight, weatherHighlights } = props;
  const { title, imageUrl } = highlight;
  const time = getHighlightTime(highlight, weatherHighlights);

  return (
    <div>
      <img src={imageUrl} alt={title} />
      <Title>{title}</Title>
      <p>{time}</p>
    </div>
  );
};

export default Highlight;

function getHighlightTime(
  highlight: LabeledCardProps,
  weatherHighlights: WeatherHighlights
): string {
  switch (highlight.title) {
    case "Sunrise": {
      const sunriseTime = convertTimestampToTime(weatherHighlights.sunrise);
      return sunriseTime;
    }
    case "Sunset": {
      const sunsetTime = convertTimestampToTime(weatherHighlights.sunset);
      return sunsetTime;
    }
    default:
      return highlight.description || "";
  }
}

const Title = styled.p`
  font-weight: 500;
  color: #121717;
`;
