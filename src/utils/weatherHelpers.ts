export function getWindDirection(degree: number): string {
  const directions = [
    "North",
    "Northeast",
    "East",
    "Southeast",
    "South",
    "Southwest",
    "West",
    "Northwest",
  ];
  const index = Math.round(degree / 45) % 8;
  console.log({ index, degree, direction: directions[index] });

  return directions[index];
}
