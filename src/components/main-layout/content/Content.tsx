import styled from "styled-components";
import cityImage from "../../../assets/cityScape.png";
import { weather } from "../../../constants/weather";
import WeatherItem from "./WeatherItem";
import TemperatureConditions from "./TemperatureConditions";
import { convertTimestampToTime } from "../../../utils/dateHelpers";
import Highlight from "./Highlight";
import { highlights } from "../../../constants/highlights";
import { useCityWeather } from "../../../contexts/city-weather-context";
import ContentFallback from "./ContentFallback";

const Content = () => {
  const { cityWeather, responseState } = useCityWeather();
  if (!cityWeather || responseState?.error)
    return <ContentFallback responseState={responseState} />;

  const { region, name, weatherHighlights, time } = cityWeather;
  const { localTime, timezone } = time;
  const localTimeString = convertTimestampToTime(localTime, timezone);

  return (
    <Main>
      <div>
        <StyledTitle>
          Weather in {name}, {region}
        </StyledTitle>
        <DateTimeText>Today &bull; {localTimeString}</DateTimeText>
      </div>

      <Section>
        <StyledHeading>Current conditions</StyledHeading>
        <FlexContainer>
          <WeatherImage src={cityImage} alt="weather image" />
          <TemperatureConditions cityWeather={cityWeather} />
        </FlexContainer>
      </Section>

      <FlexContainer>
        {weather.map((item, index) => (
          <WeatherItem key={index} weather={item} cityWeather={cityWeather} />
        ))}
      </FlexContainer>

      <Section>
        <h4>Today's Highlights</h4>
        <FlexContainer>
          {highlights.map((highlight, index) => (
            <Highlight
              key={index}
              highlight={highlight}
              weatherHighlights={weatherHighlights}
            />
          ))}
        </FlexContainer>
      </Section>
    </Main>
  );
};

export default Content;

const Main = styled.main`
  width: calc(100vw - 25% - 2rem);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledTitle = styled.h1`
  color: #121717;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  margin: 0;
`;

const DateTimeText = styled.p`
  color: #637d87;
  size: 14px;
`;

const StyledHeading = styled.h2`
  font-size: 18px;
`;

const FlexContainer = styled.section`
  padding: 20px 0;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Section = styled.section`
  padding: 16px 0 0 0;
`;

const WeatherImage = styled.img`
  height: 16rem;
  width: 50%;
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
