import React from "react";
import { ScrollView, Image, Text } from "react-native";

import styles from "./styles";

const tour0Icon = require("../../../../../assets/Icons/Money/money.png");
const tour1Icon = require("../../../../../assets/Icons/CalendarMoney/calendar-money.png");
const tour2Icon = require("../../../../../assets/Icons/Donation/donation.png");

const Tour0 = () =>
  <ScrollView
    contentContainerStyle={styles.contentContainer}
    showsVerticalScrollIndicator={false}
  >
    <Image source={tour0Icon} style={styles.tourIcon} />
    <Text style={styles.tourLabelText}>Get paid to save</Text>
    <Text style={styles.tourDescText}>
      Momentum supports people living on lower incomes to boost their savings
    </Text>
  </ScrollView>;
const Tour1 = () =>
  <ScrollView
    contentContainerStyle={styles.contentContainer}
    showsVerticalScrollIndicator={false}
  >
    <Image source={tour1Icon} style={styles.tourIcon} />
    <Text style={styles.tourLabelText}>
      Get up to $60 just for saving your own money
    </Text>
    <Text style={styles.tourDescText}>
      Momentum will give you $10 every month you save for six months
    </Text>
  </ScrollView>;
const Tour2 = () =>
  <ScrollView
    contentContainerStyle={styles.contentContainer}
    showsVerticalScrollIndicator={false}
  >
    <Image source={tour2Icon} style={styles.tourIcon} />
    <Text style={styles.tourLabelText}>
      Learn tips and tricks for managing your money
    </Text>
    <Text style={styles.tourDescText}>
      Momentum has 20 years of experience helping people manage their money
    </Text>
  </ScrollView>;

const routes = [{ key: "Tour0" }, { key: "Tour1" }, { key: "Tour2" }];

export { Tour0, Tour1, Tour2, routes };
