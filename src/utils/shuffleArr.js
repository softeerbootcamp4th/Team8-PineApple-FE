const shuffleArr = entries => {
  for (let i = 0; i < entries.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [entries[i], entries[j]] = [entries[j], entries[i]];
  }
  return entries;
};

export default shuffleArr;
