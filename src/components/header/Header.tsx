import styled from "styled-components";
import compassIcon from "../../assets/compass.svg";
import logo from "../../assets/logo.svg";
import Icon from "../common/Icon";
import { SearchInput } from "../common/search-input/SearchInput";
import { useCityWeather } from "../../contexts/city-weather-context";
import { useState } from "react";

const Header = () => {
  const { changeUnit } = useCityWeather();
  const profileThumb =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEg9z-ZF7R1dTA6quJkuPXJsyA6ViEp6F0Q&s";

  const [isDropdownVisible, setDropdownVisibility] = useState<boolean>(false);
  const toggleDropdown = () => setDropdownVisibility(!isDropdownVisible);

  return (
    <StyledHeader>
      <StyledDiv>
        <a href="/">
          <Icon src={logo} alt="logo" />
        </a>
        <Title>Weather</Title>
        <SearchInput placeholder="Search" showButton={false} />
      </StyledDiv>

      <StyledDiv hideOnMobile="true">
        <button onClick={changeUnit}>
          <Icon src={compassIcon} height="40px" alt="compass icon" />
        </button>
        <a href="https://github.com/deeonwuli" target="_blank" rel="noreferrer">
          <Icon src={profileThumb} height="40px" alt="profile thumb" />
        </a>
      </StyledDiv>

      <HamburgerMenu onClick={toggleDropdown}>≡</HamburgerMenu>
      {isDropdownVisible && (
        <Dropdown>
          <button className="menu-item" onClick={changeUnit}>
            <Icon src={compassIcon} height="40px" alt="compass icon" />
            <p>Toggle unit</p>
          </button>
          <a
            href="https://github.com/deeonwuli"
            target="_blank"
            rel="noreferrer"
            className="menu-item"
          >
            <Icon src={profileThumb} height="40px" alt="profile thumb" />
            <p>Profile</p>
          </a>
        </Dropdown>
      )}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 40px;
  border: 1px solid #e5e8eb;
  height: 3.25rem;
`;

const StyledDiv = styled.div<{ hideOnMobile?: string }>`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    display: ${(props) => (props.hideOnMobile === "true" ? "none" : "flex")};
  }
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #121717;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerMenu = styled.button`
  height: 20px;
  width: 20px;
  display: none;
  font-size: 48px;
  line-height: 0px;
  margin: 0 0 0 12px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 5rem;
  right: 0;
  width: 50%;
  height: max-content;
  border: 1px solid #e5e8eb;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 1rem;
`;
