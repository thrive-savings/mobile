import { Asset } from "expo";
import { Image } from "react-native";

const imageAssets = [
  // Backgrounds
  require("../../assets/Backgrounds/BackgroundAccount.png"),
  require("../../assets/Backgrounds/BackgroundFull.png"),
  require("../../assets/Backgrounds/BackgroundCover.png"),

  // Logos
  require("../../assets/Logo/white.png"),
  require("../../assets/LogoLarger/bitmap.png"),
  require("../../assets/ThumbnailLogo/Large/thumbnail.png"),
  require("../../assets/ThumbnailLogo/Small/thumbnail.png"),

  // Launch Images
  require("../../assets/LaunchImages/splash.png"),
  require("../../assets/icon.png"),

  // Goals
  require("../../assets/Goals/Automobile/bitmap.png"),
  require("../../assets/Goals/Debt/bitmap.png"),
  require("../../assets/Goals/Education/bitmap.png"),
  require("../../assets/Goals/Gadgets/bitmap.png"),
  require("../../assets/Goals/Health/bitmap.png"),
  require("../../assets/Goals/Home/bitmap.png"),
  require("../../assets/Goals/Other/bitmap.png"),
  require("../../assets/Goals/PetNeeds/bitmap.png"),
  require("../../assets/Goals/RainyDay/bitmap.png"),
  require("../../assets/Goals/Retirement/bitmap.png"),
  require("../../assets/Goals/StudentLoans/bitmap.png"),
  require("../../assets/Goals/Travel/bitmap.png"),
  require("../../assets/Goals/Wedding/bitmap.png"),

  // Banks
  require("../../assets/Banks/ATB/bitmap.png"),
  require("../../assets/Banks/BMO/bitmap.png"),
  require("../../assets/Banks/CIBC/bitmap.png"),
  require("../../assets/Banks/CoastCapital/bitmap.png"),
  require("../../assets/Banks/Desjardins/bitmap.png"),
  require("../../assets/Banks/HSBC/bitmap.png"),
  require("../../assets/Banks/Laurentienne/bitmap.png"),
  require("../../assets/Banks/Meridian/bitmap.png"),
  require("../../assets/Banks/National/bitmap.png"),
  require("../../assets/Banks/RBC/bitmap.png"),
  require("../../assets/Banks/Scotia/bitmap.png"),
  require("../../assets/Banks/Simplii/bitmap.png"),
  require("../../assets/Banks/Tangerine/bitmap.png"),
  require("../../assets/Banks/TD/bitmap.png"),
  require("../../assets/Banks/Vancity/bitmap.png"),

  // Work Types
  require("../../assets/WorkTypes/Contract/bitmap.png"),
  require("../../assets/WorkTypes/Fulltime/bitmap.png"),
  require("../../assets/WorkTypes/Parttime/bitmap.png"),
  require("../../assets/WorkTypes/Sharing/bitmap.png"),

  // Sidebar
  require("../../assets/Sidebar/Faq/faq.png"),
  require("../../assets/Sidebar/Fill/fill1.png"),
  require("../../assets/Sidebar/House/house.png"),
  require("../../assets/Sidebar/Settings/settings1.png"),
  require("../../assets/Sidebar/ThriveBot/thriveBot.png"),
  require("../../assets/Sidebar/Bank/PiggybankGrey.png"),

  // Icons
  require("../../assets/Icons/Back/back.png"),
  require("../../assets/Icons/BankSymbol/bankSymbolGradient.png"),
  require("../../assets/Icons/BankSymbolSmaller/bitmap.png"),
  require("../../assets/Icons/BankSymbolWhite/bitmap.png"),
  require("../../assets/Icons/Budget/budget.png"),
  require("../../assets/Icons/Checkbox/tick.png"),
  require("../../assets/Icons/Close/close.png"),
  require("../../assets/Icons/Delete/delete.png"),
  require("../../assets/Icons/Email/email.png"),
  require("../../assets/Icons/HandShake/bitmap.png"),
  require("../../assets/Icons/Info/information.png"),
  require("../../assets/Icons/Menu/menu.png"),
  require("../../assets/Icons/PencilEdit/pencilEditButton.png"),
  require("../../assets/Icons/Phone/phone.png"),
  require("../../assets/Icons/PiggyBank/piggybank.png"),
  require("../../assets/Icons/SafeBox/safebox.png"),
  require("../../assets/Icons/Settings/bitmap.png"),
  require("../../assets/Icons/Shield/bitmap.png"),
  require("../../assets/Icons/Sms/sms.png"),
  require("../../assets/Icons/ThriveBot/thriveBot.png"),
  require("../../assets/Icons/ThriveBotSmaller/thriveBot.png"),
  require("../../assets/Icons/TickGradient/tickGradient.png"),
  require("../../assets/Icons/TickIcon/bitmap.png"),
  require("../../assets/Icons/Star/Empty/star.png"),
  require("../../assets/Icons/Star/Blue/star.png"),
  require("../../assets/Icons/Referral/like.png"),
  require("../../assets/Icons/Copy/copy-content.png"),
  require("../../assets/Icons/Share/share.png"),
  require("../../assets/Icons/Money/money.png"),
  require("../../assets/Icons/Donation/donation.png"),
  require("../../assets/Icons/CalendarMoney/calendar-money.png"),
  require("../../assets/Icons/Warning/warning.png"),
  require("../../assets/Icons/StarLarger/star.png"),

  // Product Tour
  require("../../assets/ProductTour/step0/bitmap.png"),
  require("../../assets/ProductTour/step1/icon0/bitmap.png"),
  require("../../assets/ProductTour/step1/icon1/bitmap.png"),
  require("../../assets/ProductTour/step2/bitmap.png"),
  require("../../assets/ProductTour/step3/bitmap.png"),

  // Momentum Special
  require("../../assets/Momentum/Logos/InApp/logo.png")
];

const cacheImages = images => {
  return images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

export { imageAssets, cacheImages };
