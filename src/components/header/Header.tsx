import styled from "styled-components";
import compassIcon from "../../assets/compass.svg";
import logo from "../../assets/logo.svg";
import Icon from "../common/Icon";
import { SearchInput } from "../common/search-input/SearchInput";
import { useCityWeather } from "../../contexts/city-weather-context";

const Header = () => {
  const { changeUnit } = useCityWeather();

  return (
    <StyledHeader>
      <StyledDiv>
        <a href="/">
          <Icon src={logo} alt="logo" />
        </a>
        <Title>Weather</Title>
        <SearchInput placeholder="Search" showButton={false} />
      </StyledDiv>

      <StyledDiv>
        <button onClick={changeUnit}>
          <Icon src={compassIcon} height="40px" alt="compass icon" />
        </button>
        <a href="https://github.com/deeonwuli" target="_blank" rel="noreferrer">
          <Icon
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEg9z-ZF7R1dTA6quJkuPXJsyA6ViEp6F0Q&s"
            }
            height="40px"
            alt="profile thumb"
          />
        </a>
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 12px 40px;
  border: 1px solid #e5e8eb;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #121717;
`;
