import React from "react";
import {
  View,
  Image,
  Text
} from "react-native";
import styles from "./styles";

const tour0Icon = require("../../../assets/ProductTour/step0/bitmap.png");
const tour1Icon0 = require("../../../assets/ProductTour/step1/icon0/bitmap.png");
const tour1Icon1 = require("../../../assets/ProductTour/step1/icon1/bitmap.png");
const tour2Icon = require("../../../assets/ProductTour/step2/bitmap.png");
const tour3Icon = require("../../../assets/ProductTour/step3/bitmap.png");

const Tour0 = () => (
  <View style={styles.contentContainer}>
    <Image source={tour0Icon} />
    <Text style={styles.tourLabelText}>Thrive does all the work</Text>
    <Text style={styles.tourDescText}>You don’t have to change how you spend. Thrive automatically saves small amounts of money for you in a CDIC Insured Thrive account.</Text>
  </View>
);
const Tour1 = () => (
  <View style={styles.contentContainer}>
    <Image source={tour1Icon0} />
    <Image source={tour1Icon1} />
    <Text style={styles.tourLabelText}>You reach your goals</Text>
    <Text style={styles.tourDescText}>Thrive will help you track progress towards your goal - motivating you and finding ways to help you save.</Text>
  </View>
);
const Tour2 = () => (
  <View style={styles.contentContainer}>
    <Image source={tour2Icon} />
    <Text style={styles.tourLabelText}>Text Thrive anytime</Text>
    <Text style={styles.tourDescText}>Thrive is just a text away. You can save extra cash, check your balance, withdraw, and ask for money advice. Just text us!</Text>
  </View>
);
const Tour3 = () => (
  <View style={styles.contentContainer}>
    <Image source={tour3Icon} />
    <Text style={styles.tourLabelText}>Top tier security</Text>
    <Text style={styles.tourDescText}>Thrive uses AES-256 encryption techniques to encrypt data. This is the same method used by banks for sensitive information.</Text>
  </View>
);

const routes = [
  { key: "Tour0" }, { key: "Tour1" }, { key: "Tour2" }, { key: "Tour3" }
];

export { Tour0, Tour1, Tour2, Tour3, routes };
