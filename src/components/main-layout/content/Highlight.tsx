import styled from "styled-components";
import { LabeledCardProps } from "../../../types/LabeledCardProps";

const Highlight = (props: { highlight: LabeledCardProps }) => {
  const { title, description, imageUrl } = props.highlight;

  return (
    <div>
      <img src={imageUrl} alt={title} />
      <Title>{title}</Title>
      <p>{description}</p>
    </div>
  );
};

export default Highlight;

const Title = styled.p`
  font-weight: 500;
  color: #121717;
`;
