import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h1>Weather dashboard</h1>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;
