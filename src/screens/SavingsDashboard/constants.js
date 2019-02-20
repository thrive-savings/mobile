const employerBonusIcon = require("../../../assets/Icons/Notifications/EmployerBonus/bitmap.png");
const savingPreferencesIcon = require("../../../assets/Icons/Notifications/SavingPreferences/bitmap.png");
const settingsIcon = require("../../../assets/Icons/Settings/bitmap.png");

const NOTIFICATION_TYPES = [
  {
    type: "EmployerBonus",
    title: "EMPLOYER BONUS",
    getDescription: amount => `Hooray, your employer has contributed ${amount} to your Thrive Savings balance! Click to dismiss.`,
    icon: employerBonusIcon
  },
  {
    type: "SavingPreferences",
    title: "SAVING PREFERENCES",
    getDescription: () => "Click here to set up how you’d like to save!",
    icon: savingPreferencesIcon
  },
  {
    type: "IntegrateBank",
    title: "LINK A BANK TO SAVE",
    getDescription: () => "Tap here to link your bank account.",
    icon: settingsIcon
  }
];

export default NOTIFICATION_TYPES;
