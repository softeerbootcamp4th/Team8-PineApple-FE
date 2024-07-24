function isValidPhoneNumber(number) {
  const result = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;
  return result.test(number);
}

export default isValidPhoneNumber;
