export const openInNewTab = url => {
  window.open(url);
};

export const linkToFreeRide = () =>
  openInNewTab('https://casper.hyundai.com/vehicles/test-driving/intro');
export const linkToPreOrder = () =>
  openInNewTab('https://casper.hyundai.com/vehicles/electric/making/model');
