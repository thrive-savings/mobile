const fullTime = require("../../../../../assets/WorkTypes/Fulltime/bitmap.png");
const partTime = require("../../../../../assets/WorkTypes/Parttime/bitmap.png");
const sharingEconomy = require("../../../../../assets/WorkTypes/Sharing/bitmap.png");
const contract = require("../../../../../assets/WorkTypes/Contract/bitmap.png");

const WORK_TYPES = [
  {text: "Full Time", displayText: "FULL-TIME", icon: fullTime},
  {text: "Part Time", displayText: "PART-TIME", icon: partTime},
  {text: "Contract", displayText: "CONTRACT", icon: contract},
  {text: "Sharing Economy", displayText: "SHARING ECONOMY", icon: sharingEconomy}
];

export default WORK_TYPES;
