import styled from "styled-components";

type IconProps = {
  src: string;
  alt?: string;
  height?: string;
};

const Icon = (props: IconProps) => {
  const { src, alt, height } = props;

  return <StyledImage src={src} alt={alt || "icon"} height={height} />;
};

export default Icon;

const StyledImage = styled.img<{ height?: string }>`
  height: ${(props) => props.height || "24px"};
  border-radius: 25%;
`;
