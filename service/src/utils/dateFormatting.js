function dateFormatting(date = new Date()) {
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const nowDay = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${nowDay}`;
}

export default dateFormatting;
