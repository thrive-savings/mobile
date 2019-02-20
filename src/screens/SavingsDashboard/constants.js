const handShakeIcon = require("../../../assets/Icons/HandShake/bitmap.png");
const settingsIcon = require("../../../assets/Icons/Settings/bitmap.png");

const NOTIFICATION_TYPES = [
  {
    type: "EmployerBonus",
    title: "EMPLOYER BONUS",
    getDescription: amount => `Hooray, your employer has contributed ${amount} to your Thrive Savings balance! Tap to dismiss.`,
    icon: handShakeIcon
  },
  {
    type: "IntegrateBank",
    title: "LINK A BANK TO SAVE",
    getDescription: () => "Tap here to link your bank account.",
    icon: settingsIcon
  },
  {
    type: "SavingPreferences",
    title: "SAVING PREFERENCES",
    getDescription: () => "Tap here to set up how you’d like to save!",
    icon: settingsIcon
  }
];

export default NOTIFICATION_TYPES;
