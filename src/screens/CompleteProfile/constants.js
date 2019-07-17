// import styles from "./styles";

const INPUT_FIELDS = {
  legalName: {
    placeholder: "Legal name",
    autoCapitalize: "words"
  },
  email: {
    placeholder: "Email"
    // extraStyle: styles.names
  },
  phone: {
    placeholder: "Phone number"
  },

  city: {
    placeholder: "City"
  },
  street: {
    placeholder: "Street"
  },
  zipCode: {
    placeholder: "Zip code",
    autoCapitalize: "characters"
  },
  subdivision: {
    placeholder: "Subdivision",
    autoCapitalize: "characters"
  },
  ssn: {
    placeholder: "SSN #",
    returnKeyType: "done"
  }
};

export default INPUT_FIELDS;
