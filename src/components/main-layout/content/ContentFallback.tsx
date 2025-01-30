import styled from "styled-components";
import { ResponseState } from "../../../types/ResponseState";

const ContentFallback = (props: {
  responseState: ResponseState | undefined;
}) => {
  const { responseState } = props;

  if (!responseState || responseState?.loading)
    return <div className="spinner"></div>;

  return (
    <>
      {responseState.error ? (
        <StyledDiv outline>
          <h2>Error</h2>
          <p>{responseState.error.message}</p>
          <em>Please try again. 🌧️</em>
        </StyledDiv>
      ) : (
        <StyledDiv>Please search for a city to see the weather. ☀️ </StyledDiv>
      )}
    </>
  );
};

export default ContentFallback;

const StyledDiv = styled.div<{ outline?: boolean }>`
  padding: 16px;
  border: ${(props) => (props.outline ? "1px solid #dbe3e5" : "none")};
  border-radius: 12px;
  width: 75%;

  h2 {
    color: rgb(251, 52, 12);
    font-weight: 700;
    padding-bottom: 20px;
  }
`;
