import { styles } from "./styles";

const INPUT_FIELDS = {
  firstName: {
    placeholder: "First Name",
    extraStyle: styles.names
  },
  lastName: {
    placeholder: "Last Name",
    extraStyle: styles.names
  },
  dateOfBirth: {
    placeholder: "Date of Birth",
    extraStyle: styles.dateOfBirth
  },
  gender: {
    placeholder: "Gender",
    extraStyle: styles.gender
  },
  address: {
    placeholder: "Address",
    extraStyle: styles.address
  },
  unit: {
    placeholder: "Unit",
    extraStyle: styles.unit
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
