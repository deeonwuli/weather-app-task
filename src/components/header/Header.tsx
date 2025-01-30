import styled from "styled-components";
import compassIcon from "../../assets/compass.svg";
import logo from "../../assets/logo.svg";
import profileThumb from "../../assets/thumbnails/profile.png";
import Icon from "../common/Icon";
import { SearchInput } from "../common/search-input/SearchInput";

const Header = () => {
  return (
    <StyledHeader>
      <StyledDiv>
        <Icon src={logo} height="24px" alt="logo" />
        <Title>Weather</Title>
        <SearchInput placeholder="Search" showButton={false} />
      </StyledDiv>

      <StyledDiv>
        <Icon src={compassIcon} height="40px" alt="compass icon" />
        <Icon src={profileThumb} height="40px" alt="profile thumb" />
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
