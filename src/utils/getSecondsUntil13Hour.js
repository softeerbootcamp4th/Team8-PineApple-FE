function getSecondsUntil13Hour() {
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentSeconds = now.getSeconds();

  if (currentHours !== 12) {
    return -1;
  }
  const secondsUntil13Hour = (60 - currentMinutes) * 60 - currentSeconds;
  return secondsUntil13Hour;
}

export default getSecondsUntil13Hour;
