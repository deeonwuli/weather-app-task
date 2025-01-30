import styled from "styled-components";
import Icon from "../../common/Icon";
import { LabeledCardProps } from "../../../types/LabeledCardProps";
import { cities } from "../../../constants/cities";

const CityItem = (props: { city: LabeledCardProps }) => {
  const { title, imageUrl } = props.city;

  const randomNumber = Math.floor(Math.random() * cities.length);
  const randomImageUrl = cities[randomNumber].imageUrl;

  return (
    <CityContainer>
      {imageUrl !== "" ? (
        <CityThumbnail src={imageUrl} alt={title} height="30px" />
      ) : (
        <CityThumbnail src={randomImageUrl} alt={title} height="30px" /> // Using random city thumbnails here
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
