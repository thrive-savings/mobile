const savingsIcon = require("../../../assets/Sidebar/House/house.png");
const historyIcon = require("../../../assets/Sidebar/Fill/fill1.png");
const bankIcon = require("../../../assets/Sidebar/Bank/PiggybankGrey.png");

export const TOP_MENU_ITEMS = [
  {
    displayName: "MY SAVINGS",
    icon: savingsIcon,
    screen: "Home"
  },
  /* {
    displayName: "MY DEBT",
    icon: savingsIcon,
    screen: "Home",
    premium: true
  }, */
  {
    displayName: "HISTORY",
    icon: historyIcon,
    screen: "SavingHistory"
  },
  {
    displayName: "LINKED BANKS",
    icon: bankIcon,
    screen: "BankConnections"
  }
];

export const FOOTER_MENU_ITEMS = [
  {
    displayName: "Settings",
    screen: "Settings"
  },
  {
    displayName: "Faq",
    screen: "Faq"
  },
  {
    displayName: "Contact",
    screen: "Contact"
  },
  {
    displayName: "Log Out",
    screen: "logout",
    underline: true
  }
];
