import styles from "./styles";

const INPUT_FIELDS = {
  firstName: {
    placeholder: "First Name",
    extraStyle: styles.names
  },
  lastName: {
    placeholder: "Last Name",
    extraStyle: styles.names
  },
  email: {
    placeholder: "Email"
  },
  password: {
    placeholder: "Password",
    secureEntry: true
  },
  referralCode: {
    placeholder: "Referral Code"
  }
};

export default INPUT_FIELDS;
