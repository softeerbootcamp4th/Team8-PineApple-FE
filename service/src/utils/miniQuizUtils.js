/*
 * 현재 시간에서 다음 초까지의 시간 계산(정확성을 위한 수단)
 */
export function getMillisecondsUntilNextSecond() {
  const now = new Date();
  return 1000 - now.getMilliseconds();
}

/*
 * 다음 정각까지 남은 milli초 계산(정각마다 퀴즈 시작 1시간 전인지 확인을 하기에)
 */
export function getMillisecondsUntilNextHour() {
  const now = new Date();
  const millisecondsUntilNextHour =
    (60 - now.getMinutes()) * 60 * 1000 -
    now.getSeconds() * 1000 -
    now.getMilliseconds();
  return millisecondsUntilNextHour;
}

export function getSecondsUntilNextQuiz(hour = 13) {
  //퀴즈 시간 변동 가능성에 따른 인자 전달
  const now = new Date();
  const currentHours = now.getHours();
  if (currentHours !== hour - 1) {
    return -1; // 12시와 13시 사이(퀴즈 시작 1시간 이내)가 아니면 -1 반환
  }
  return (60 - now.getMinutes()) * 60 - now.getSeconds();
}
