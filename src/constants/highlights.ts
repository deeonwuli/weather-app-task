import { LabeledCardProps } from "../types/LabeledCardProps";
import uvIndexImage from "../assets/highlights/uvIndex.png";
import sunriseImage from "../assets/highlights/sunrise.png";
import sunsetImage from "../assets/highlights/sunset.png";

export const highlights: LabeledCardProps[] = [
  {
    title: "UV Index",
    description: "5",
    imageUrl: uvIndexImage,
  },
  {
    title: "Sunrise",
    imageUrl: sunriseImage,
  },
  {
    title: "Sunset",
    imageUrl: sunsetImage,
  },
];
