const savingsIcon = require("../../../assets/Sidebar/House/house.png");
const settingsIcon = require("../../../assets/Sidebar/Settings/settings1.png");
const contactIcon = require("../../../assets/Sidebar/ThriveBot/thriveBot.png");
const faqIcon = require("../../../assets/Sidebar/Faq/faq.png");

const MENU_ITEMS = [
  {
    displayName: "MY SAVINGS",
    icon: savingsIcon,
    screen: "Home"
  },
  {
    displayName: "SETTINGS",
    icon: settingsIcon,
    screen: "Settings"
  },
  {
    displayName: "FAQ",
    icon: faqIcon,
    screen: "Faq"
  },
  {
    displayName: "CONTACT",
    icon: contactIcon,
    screen: "Contact"
  }
];

export default MENU_ITEMS;
