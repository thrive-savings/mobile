const FREQUENCY_TYPES = [
  {
    identifier: "ONCEWEEKLY",
    displayName: "Weekly"
  },
  {
    identifier: "BIWEEKLY",
    displayName: "Biweekly"
  },
  {
    identifier: "ONCEMONTHLY",
    displayName: "Monthly"
  }
];

const getFrequencyIndex = identifier => {
  let i = 0;
  for (const type of FREQUENCY_TYPES) {
    if (type.identifier === identifier) { break; }
    i++;
  }
  return i >= FREQUENCY_TYPES.length ? 1 : i;
};

export { FREQUENCY_TYPES, getFrequencyIndex };
