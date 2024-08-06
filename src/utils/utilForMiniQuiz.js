const addIdsToData = data => {
  const dataWithIds = {};
  let idCounter = 1;

  Object.keys(data).forEach(key => {
    dataWithIds[key] = {
      id: idCounter++,
      value: data[key],
    };
  });

  return dataWithIds;
};

const shuffleObject = obj => {
  const entries = Object.values(obj);
  for (let i = 0; i < entries.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [entries[i], entries[j]] = [entries[j], entries[i]];
  }
  return entries;
};

const addIdsAndShuffleData = data => {
  const dataWithId = addIdsToData(data);
  const shuffledData = shuffleObject(dataWithId);
  return shuffledData;
};

export default addIdsAndShuffleData;
