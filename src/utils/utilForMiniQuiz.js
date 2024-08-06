const shuffleArr = entries => {
  for (let i = 0; i < entries.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [entries[i], entries[j]] = [entries[j], entries[i]];
  }
  return entries;
};

const shuffleData = data => {
  const entries = Object.entries(data); //key와 value를 한 배열에
  const shuffledData = shuffleArr(entries);
  return shuffledData;
};

export default shuffleData;
