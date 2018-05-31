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

import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import FAQ_CATEGORIES from "../../globals/faqCategories";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";
import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

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
        <TouchableOpacity key={index} activeOpacity={0.6} style={[styles.categoryHolder, globalStyles.shadow]} onPress={() => this.setState({activeStep: 1, activeFaqIndex: index})}>
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
    const { activeStep, activeFaqIndex } = this.state;
    return (
      <View style={globalStyles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <ImageBackground source={bg} style={globalStyles.background}>
          <Header
            navigation={this.props.navigation}
            button={activeStep ? "back" : "menu"}
            onButtonPress={this.headerIconClicked.bind(this)}
            content="text" text={activeFaqIndex < 0 ? "FAQ" : FAQ_CATEGORIES[activeFaqIndex].name}
          />

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
