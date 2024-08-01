function timeFormatting(postTime) {
  const currentTime = new Date();
  const NewPostTime = new Date(postTime);
  const diffMinutes = Math.floor((currentTime - NewPostTime) / 60000);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffInDays = Math.floor(diffHours / 24);
  if (diffMinutes < 60) {
    return `${diffMinutes}분전`;
  }

  if (diffHours < 24) {
    return `${diffHours}시간전`;
  }
  return `${diffInDays}일전`;
}

export default timeFormatting;
