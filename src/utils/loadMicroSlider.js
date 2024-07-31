function loadMicroSlider(callback) {
  const script = document.createElement('script');
  script.src =
    'https://cdn.jsdelivr.net/npm/micro-slider@1.0.9/dist/micro-slider.min.js';
  script.onload = callback;
  document.body.appendChild(script);
  return () => {
    document.body.removeChild(script);
  };
}

export default loadMicroSlider;
