import styled from "styled-components";
import Icon from "../../common/Icon";
import { LabeledCardProps } from "../../../types/LabeledCardProps";

const CityItem = (props: { city: LabeledCardProps }) => {
  const { title, imageUrl } = props.city;

  return (
    <CityContainer>
      {imageUrl !== "" ? (
        <CityThumbnail src={imageUrl} alt={title} height="30px" />
      ) : (
        <EmptyThumbnail />
      )}

      <p>{title}</p>
    </CityContainer>
  );
};

export default CityItem;

const CityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #121717;
`;

const CityThumbnail = styled(Icon)`
  border-radius: 25%;
`;

const EmptyThumbnail = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 25%;
  background-color: #dbe3e5;
`;
