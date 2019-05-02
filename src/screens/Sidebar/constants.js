const savingsIcon = require("../../../assets/Sidebar/House/house.png");
const historyIcon = require("../../../assets/Sidebar/Fill/fill1.png");
const bankIcon = require("../../../assets/Sidebar/Bank/PiggybankGrey.png");

export const TOP_MENU_ITEMS = [
  {
    displayName: "MY SAVINGS",
    icon: savingsIcon,
    screen: "SavingsDashboard"
  },
  /* {
    displayName: "MY DEBT",
    icon: savingsIcon,
    screen: "DebtDashboard",
    premium: true
  }, */
  {
    displayName: "HISTORY",
    icon: historyIcon,
    screen: "History"
  },
  {
    displayName: "LINKED BANKS",
    icon: bankIcon,
    screen: "BankConnections"
  }
];

export const FOOTER_MENU_ITEMS = [
  {
    displayName: "Refer & Earn $5",
    screen: "Referral"
  },
  {
    displayName: "Settings",
    screen: "Settings"
  },
  {
    displayName: "FAQ",
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
