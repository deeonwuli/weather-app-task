type IconProps = {
  src: string;
  alt?: string;
  height?: string;
};

const Icon = (props: IconProps) => {
  const { src, alt, height } = props;

  return <img src={src} alt={alt || "icon"} style={{ height: height }} />;
};

export default Icon;
