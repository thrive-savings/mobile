import React, { Component } from "react";
import {
  StatusBar,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  Text
} from "react-native";

import Accordion from "../../components/Accordion";
import FAQ_CATEGORIES from "../../globals/faqCategories";

import styles from "./styles";
import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const menuIcon = require("../../../assets/Icons/Menu/menu.png");
const backIcon = require("../../../assets/Icons/Back/back.png");

class Faq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
      activeFaqIndex: -1
    };
  }

  headerIconClicked() {
    if (this.state.activeStep) {
      this.setState({activeStep: 0, activeFaqIndex: -1});
    } else {
      this.props.navigation.navigate("DrawerOpen");
    }
  }

  renderQuestions() {
    const body = FAQ_CATEGORIES[this.state.activeFaqIndex].questions.map(({ question, answer }, index) => {
      return (
        <Accordion
          key={index}
          title={question}
          description={answer}
          showIcon={false}
          titleFont={13}
        />
      );
    });

    return (
      <View style={styles.contentBox}>
        {body}
      </View>
    );
  }

  renderCategories() {
    const body = FAQ_CATEGORIES.map(({ icon, name }, index) => {
      return (
        <TouchableOpacity key={index} activeOpacity={0.6} style={styles.categoryHolder} onPress={() => this.setState({activeStep: 1, activeFaqIndex: index})}>
          <Image source={icon} />
          <Text style={styles.categoryName}>{name}</Text>
        </TouchableOpacity>
      );
    });

    return (
      <View style={styles.contentBox}>
        <Text style={styles.labelText}>What do you need help with?</Text>
        <View style={styles.categories}>
          {body}
        </View>
      </View>
    );
  }

  render() {
    const activeStep = this.state.activeStep;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <ImageBackground
          source={bg}
          style={styles.background}
        >
          <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.headerIconClicked()} style={styles.headerIcon}>
              <Image source={(activeStep ? backIcon : menuIcon)} />
            </TouchableOpacity>
            <Text style={styles.headerText}>FAQ</Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} style={styles.contentContainer}>
            {
              activeStep
                ? this.renderQuestions()
                : this.renderCategories()
            }
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

export default Faq;
