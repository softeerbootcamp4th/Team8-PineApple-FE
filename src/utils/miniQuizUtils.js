export function getMillisecondsUntilNextSecond() {
  const now = new Date();
  return 1000 - now.getMilliseconds();
}

export function getMillisecondsUntilNextHour() {
  const now = new Date();
  const millisecondsUntilNextHour =
    (60 - now.getMinutes()) * 60 * 1000 -
    now.getSeconds() * 1000 -
    now.getMilliseconds();
  return millisecondsUntilNextHour;
}

export function getSecondsUntilNextHourFromNoon() {
  const now = new Date();
  const currentHours = now.getHours();
  if (currentHours !== 12) {
    return -1;
  }
  return (60 - now.getMinutes()) * 60 - now.getSeconds();
}
