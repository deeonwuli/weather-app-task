import styled from "styled-components";
import Content from "./content/Content";
import Sidebar from "../main-layout/sidebar/Sidebar";

const MainLayout = () => {
  return (
    <StyledMainLayout>
      <Sidebar />
      <Content />
    </StyledMainLayout>
  );
};

export default MainLayout;

const StyledMainLayout = styled.main`
  display: flex;
  gap: 2rem;
  padding: 20px 24px;
`;
