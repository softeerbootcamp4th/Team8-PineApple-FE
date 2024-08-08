function calDiffNextOclock() {
  const now = new Date();
  const sleepTime =
    (60 - now.getMinutes()) * 60 * 1000 -
    now.getSeconds() * 1000 -
    now.getMilliseconds();
  return sleepTime;
}

export default calDiffNextOclock;
