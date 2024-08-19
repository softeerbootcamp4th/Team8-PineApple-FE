function shortDateFormat(dateString) {
  const date = new Date(dateString);

  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${month}월${day}일 ${hours}시${minutes}분`;
}

export default shortDateFormat;
