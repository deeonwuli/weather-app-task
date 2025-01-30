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
    <Container>
      <img src={imageUrl} alt={title} />
      <Title>{title}</Title>
      <p>{time}</p>
    </Container>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
