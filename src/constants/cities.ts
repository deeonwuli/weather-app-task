import chicagoThumb from "../assets/thumbnails/chicago.png";
import losAngelesThumb from "../assets/thumbnails/la.png";
import newYorkThumb from "../assets/thumbnails/newYork.png";
import sanFranciscoThumb from "../assets/thumbnails/sanFrancisco.png";
import { LabeledCardProps } from "../types/LabeledCardProps";

export const cities: LabeledCardProps[] = [
  {
    title: "New York",
    imageUrl: newYorkThumb,
  },
  {
    title: "San Francisco",
    imageUrl: sanFranciscoThumb,
  },
  {
    title: "Los Angeles",
    imageUrl: losAngelesThumb,
  },
  {
    title: "Chicago",
    imageUrl: chicagoThumb,
  },
];
