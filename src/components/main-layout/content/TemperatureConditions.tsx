import styled from "styled-components";
import Button from "../../common/Button";
import { SearchInput } from "../../common/search-input/SearchInput";
import { CityWeather } from "../../../types/CityWeather";

const TemperatureConditions = (props: { cityWeather: CityWeather }) => {
  const { temperature, weatherConditions } = props.cityWeather;
  const weatherCondition = weatherConditions[0].description;

  return (
    <TemperatureContainer>
      <div>
        <TemperatureText>{temperature}</TemperatureText>
        <CenterText>{weatherCondition}</CenterText>
      </div>

      <ButtonContainer>
        <Button>Details</Button>
        <Button secondary>Hourly</Button>
      </ButtonContainer>

      <SearchInput />
    </TemperatureContainer>
  );
};

export default TemperatureConditions;

const TemperatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
  width: calc(50% - 1rem);
  height: 16rem;
`;

export const CenterText = styled.p`
  text-align: center;
  text-transform: capitalize;
`;

const TemperatureText = styled.h3`
  font-weight: 900;
  font-size: 48px;
  letter-spacing: -2px;
  margin: 0;
  line-height: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
