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
    description: "6:57 AM",
    imageUrl: sunriseImage,
  },
  {
    title: "Sunset",
    description: "7: PM",
    imageUrl: sunsetImage,
  },
];
