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
    placeholder: "Email",
    extraStyle: styles.email
  },
  password: {
    placeholder: "Password",
    secureEntry: true,
    extraStyle: styles.password
  }
};

export default INPUT_FIELDS;
