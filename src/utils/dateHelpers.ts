export function convertTimestampToTime(
  timestamp: number,
  timezoneOffset = 0
): string {
  const localTimestamp = timestamp + timezoneOffset;
  const date = new Date(localTimestamp * 1000);
  return date.toLocaleTimeString("en-US", dateTimeFormatOptions);
}

const dateTimeFormatOptions = {
  hour: "numeric" as const,
  minute: "numeric" as const,
  hour12: true,
};
