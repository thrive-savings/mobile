import styles from "./styles";

const STEP_DETAILS = [
  {
    header: "SET YOUR PHONE",
    description: "Enter your phone number and we’ll send you a 4-digit verification code.",
    buttonText: "SET PHONE",
    field: "phone",
    fieldStyles: {
      inputGrp: styles.phoneInputGrp,
      input: styles.phoneInput
    }
  },
  {
    header: "VERIFY YOUR ACCOUNT",
    description: "Enter the 4-digit verification code.",
    buttonText: "VERIFY CODE",
    field: "code",
    fieldStyles: {
      inputGrp: styles.codeInputGrp,
      input: styles.codeInput
    }
  }
];

export default STEP_DETAILS;
