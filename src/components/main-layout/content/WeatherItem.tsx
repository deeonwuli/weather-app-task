import styled from "styled-components";
import Icon from "../../common/Icon";
import { LabeledCardProps } from "../../../types/LabeledCardProps";

const WeatherItem = (props: { weather: LabeledCardProps }) => {
  const { imageUrl, title, description } = props.weather;

  return (
    <StyledDiv>
      <Icon src={imageUrl} alt={`${title} icon`} />
      <h5>{title}</h5>
      <p>{description}</p>
    </StyledDiv>
  );
};

export default WeatherItem;

const StyledDiv = styled.div`
  border: 1px solid #dbe3e5;
  width: calc(50% - 1rem);
  border-radius: 8px;
  padding: 16px;

  h5 {
    font-size: 16px;
    font-weight: 700;
  }

  span {
    font-size: 20px;
  }
`;
