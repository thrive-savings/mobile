import styles from "./styles";

const SAVING_TYPES = [
  {
    name: "Thrive Flex",
    displayName: "THRIVE FLEX",
    tag: "AUTOMATIC",
    description: "We will automatically find spare change based on your income/spending and save for you.",
    footer: "Optimal for freelance/part-time workers",
    styles: {
      headerStyle: styles.blueHeader,
      footerStyle: styles.blueFooter
    }
  },
  {
    name: "Thrive Fixed",
    displayName: "THRIVE FIXED",
    tag: "MANUAL",
    description: "You set a recurring amount that will be withdrawn on a regular basis.",
    footer: "Optimal for steady earners",
    styles: {
      headerStyle: styles.greenHeader,
      footerStyle: styles.greenFooter
    }
  }
];

export default SAVING_TYPES;
