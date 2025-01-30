import humidityIcon from "../assets/icons/humidity.svg";
import windIcon from "../assets/icons/wind.svg";
import { LabeledCardProps } from "../types/LabeledCardProps";

export const weather: LabeledCardProps[] = [
  {
    imageUrl: humidityIcon,
    title: "Humidity",
    description: "85%",
  },
  {
    imageUrl: windIcon,
    title: "Wind",
    description: "3 km/h from the west",
  },
];
