import styled from "styled-components";
import Button from "../../common/Button";
import { SearchInput } from "../../common/search-input/SearchInput";

const TemperatureConditions = () => {
  return (
    <TemperatureContainer>
      <div style={{ textAlign: "center" }}>
        <TemperatureText>22°C</TemperatureText>
        <p>Sunny</p>
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
