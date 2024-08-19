function isValidPhoneNumber(number) {
  if (number.length != 11) {
    return false;
  }
  const result = /^(01[067]{1})[0-9]{4}[0-9]{4}$/;
  return result.test(number);
}

export default isValidPhoneNumber;
