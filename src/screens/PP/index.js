import React, { Component } from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  Text,
  StatusBar
} from "react-native";
import Communications from "react-native-communications";

import amplitude from "../../globals/amplitude";

import Header from "../../components/Header";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";
import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

class PP extends Component {
  componentDidMount() {
    amplitude.track(amplitude.events.PP_VIEW);
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={globalStyles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <ImageBackground source={bg} style={globalStyles.background}>
          <Header navigation={this.props.navigation} button="back" content="text" text="PRIVACY POLICY" />

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewsContainer}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.contentContainer, styles.noBottomBorder]}>
              <Text style={[styles.regularText, styles.boldText]}>Last Updated: June 01, 2018</Text>
              <Text style={[styles.regularText]}>Thrive Savings Inc. ("Thrive," "we," "us," and "our") is committed to protecting and respecting your privacy. </Text>
              <Text style={[styles.regularText]}>The purpose of Thrive is to try to help you save money with limited effort. This privacy policy explains what personal information we collect and why, with whom we share this information, and how we store and protect it. This Privacy Policy applies to users (individually referred to as "you") of our websites, applications, and other online services to which this Privacy Policy is posted (collectively, our "Services"). This Privacy Policy is part of our <Text onPress={() => navigation.navigate("TOS")}>Terms of Service.</Text></Text>
              <Text style={[styles.regularText]}>By accessing or using our Services, you agree to this Privacy Policy and our Terms of Service. The provisions contained in this Privacy Policy supersede all previous notices and statements regarding our privacy practices with respect to our Services.</Text>
              <Text style={[styles.regularText, styles.boldText]}>IF YOU DO NOT AGREE TO EVERY PROVISION OF THIS PRIVACY POLICY AND OUR TERMS OF SERVICE, YOU MAY NOT ACCESS OR USE OUR SERVICES.</Text>

              <Text style={[styles.regularText, styles.blueText]}>Application of this Privacy Policy</Text>
              <Text style={[styles.regularText]}>This Privacy Policy applies to your use of (regardless of means of access) our Services. You may access or use our Services through a desktop, laptop, mobile phone, tablet, or other consumer electronic device (each, a "Device").</Text>

              <Text style={[styles.regularText, styles.blueText]}>Information We Collect</Text>
              <Text style={[styles.regularText]}>In general, you can visit <Text style={styles.blueInnerText} onPress={() => Communications.web("https://thrivesavings.com")}>thrivesavings.com</Text> without telling us who you are or revealing any information about yourself. When you submit an inquiry via our Services or register for a Thrive account, you are invited to provide us with detailed personal information. “Personal Information” is information about an identifiable individual. </Text>
              <Text style={[styles.regularText]}>We may collect the following categories of personal information in connection with your use of our Site and Services, including but not limited to:</Text>
              <Text style={[styles.regularText]}>
                <Text style={[styles.boldText]}>REGISTRATION INFORMATION:</Text>{"\n"}
                When you register for the Services, we require you to create login information for your Thrive account, such as a username and password.
              </Text>
              <Text style={[styles.regularText]}>
                <Text style={[styles.boldText]}>IDENTIFICATION INFORMATION:</Text>{"\n"}
                We collect your name, address, gender, mobile phone number and email address to contact you, open and maintain your account and provide you with better customer service when you contact us.
              </Text>
              <Text style={[styles.regularText]}>
                <Text style={[styles.boldText]}>LIFESTYLE AND FINANCIAL GOALS:</Text>{"\n"}
                We collect your self-identified goals and objectives that you may wish to save for.
              </Text>
              <Text style={[styles.regularText]}>
                <Text style={[styles.boldText]}>THIRD PARTY CREDENTIALS:</Text>{"\n"}
                You may also provide Thrive with certain credentials for third party payment services ("Third Party Sites") when you authorize us to connect to them on your behalf.
              </Text>
              <Text style={[styles.regularText]}>
                <Text style={[styles.boldText]}>INFORMATION FROM THIRD-PARTY SITES:</Text>{"\n"}
                When you agree to have Thrive connect to any Third Party Sites on your behalf, in order to calculate the amount of the pre-authorized debits required for the Thrive Services, we will collect transaction-level data from the Third Party Sites via our Services. For example, if you register your chequing account with us, we will collect the transaction details from your chequing account in order to run our analytics and to understand your unique financial position.
              </Text>
              <Text style={[styles.regularText]}>
                <Text style={[styles.boldText]}>TECHNICAL AND NAVIGATIONAL INFORMATION:</Text>{"\n"}
                We may collect information about your interaction with our Site or Services such as computer browser type, pages visited, average time spent on our Site or Services, IP address, unique identifier of the device, operating system, device event information (such as crashes and system activity), and date and time stamps of transactions.
              </Text>
              <Text style={[styles.regularText]}>
                <Text style={[styles.boldText]}>OTHER INFORMATION:</Text>{"\n"}
                We may request or receive other personal information such as feedback, questions, comments, suggestions, or ideas to provide you with other benefits or to improve upon the Services. In such instances, you will be given the opportunity to provide or decline that information.
              </Text>
            </ScrollView>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.contentContainer, styles.noBottomBorder, styles.noTopBorder]}>
              <Text style={[styles.regularText, styles.blueText]}>How We Use The Information We Collect</Text>
              <Text style={[styles.regularText]}>We use your personal information for the purposes of:</Text>
              <View style={styles.listContainer}>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>•  </Text>
                  <Text style={styles.regularText}>
                    calculating the amount of your pre-authorized debits based on your chequing account transactions;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>•  </Text>
                  <Text style={styles.regularText}>
                    offering and improving the Site and the Services;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>•  </Text>
                  <Text style={styles.regularText}>
                    verifying your identity in the event you contact us for assistance;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>•  </Text>
                  <Text style={styles.regularText}>
                    responding to your inquiries about our Site and Services;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>•  </Text>
                  <Text style={styles.regularText}>
                    analyzing usage of our Site and Services;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>•  </Text>
                  <Text style={styles.regularText}>
                    alerting you to software compatibility issues;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>•  </Text>
                  <Text style={styles.regularText}>
                    delivering any administrative notices or alerts and communications relevant to your use of the Services;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>•  </Text>
                  <Text style={styles.regularText}>
                    offering you other products, programs, or services that we believe may be of interest;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>•  </Text>
                  <Text style={styles.regularText}>
                    performing market research, product development, troubleshooting problems, analysis of user behavior, marketing and promotions;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>•  </Text>
                  <Text style={styles.regularText}>
                    enforcing our Terms of Services and as otherwise set forth in this Privacy Policy;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>•  </Text>
                  <Text style={styles.regularText}>
                    monitoring suspicious activity. For example, if we detect that a single account on a Site is being accessed from multiple devices, as determined by tracking the Device IDs that access an account, we may contact the user to ensure that such access has been authorized by the user; and
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>•  </Text>
                  <Text style={styles.regularText}>
                    in connection with a merger, sale, of substantially all of our assets, or a corporate reorganization.
                  </Text>
                </View>
              </View>
            </ScrollView>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.contentContainer, styles.noBottomBorder, styles.noTopBorder]}>
              <Text style={[styles.regularText, styles.blueText]}>How We Share Your Information</Text>
              <Text style={[styles.regularText]}>We do not sell or otherwise disclose the Personal Information we collect about you, except as described herein or otherwise disclose to you at the time the data is collected.</Text>
              <Text style={[styles.regularText, styles.boldText]}>Thrive never shares details about your personal goal-setting, spending, income, or lifestyle with your employer, workplace, or affiliated organization. We may provide your employer or affiliated organization with group anonymized and aggregated information from time to time.</Text>
              <Text style={[styles.regularText]}>
                <Text style={[styles.boldText]}>SERVICE PROVIDERS</Text>{"\n"}
                In connection with our Services, we may transfer (or otherwise make available) Personal Information to third parties who provide services on our behalf. For example, we may use service providers, including without limitation, for hosting or operating this Site and analyzing data. These service providers have committed to appropriately safeguard the privacy and security of personal information they process on our behalf. Our service providers are given the information they need to perform their designated functions, and we do not authorize them to use or disclose personal information for their own marketing or other purposes.
              </Text>
              <Text style={[styles.regularText]}>
                <Text style={[styles.boldText]}>BUSINESS TRANSACTIONS</Text>{"\n"}
                We may transfer personal information as an asset in connection with a prospective or completed merger or sale (including transfers made as part of insolvency or bankruptcy proceeding) involving all or part of Thrive or as part of a corporate reorganization or other change in corporate control.
              </Text>
              <Text style={[styles.regularText]}>
                <Text style={[styles.boldText]}>LEGAL</Text>{"\n"}
                Thrive and our Canadian service providers and affiliates may disclose your personal information in response to a search warrant or other legally valid inquiry or order (which may include lawful access by Canadian, US or other foreign governmental authorities, courts or law enforcement agencies), to other organizations in the case of investigating a breach of an agreement or contravention of law or detecting, suppressing or preventing fraud, or as otherwise required or permitted by applicable Canadian, US or other law.
              </Text>
              <Text style={[styles.regularText, styles.blueText]}>How We Protect The Information We Collect</Text>
              <Text style={[styles.regularText]}>
                Our security measures are in line with best practices in the financial services industry. Your personal information is maintained on a confidential basis on our servers in Canada. We maintain appropriate administrative, technical and physical safeguards in an effort to protect personal information in our custody and control against accidental, unlawful or unauthorized destruction, loss, theft, alteration, access, disclosure or use and other unlawful forms of processing, including limiting access to personal information to employees and authorized service providers on a need-to-know basis.
                {"\n\n"}
                We have, and require our third-party service providers that receive Personal Information from us to have, a comprehensive written information security program that contains administrative, technical, and physical safeguards for our respective physical facilities and in our respective computer systems, databases, and communications networks that are reasonably designed to protect information contained within such systems from loss, misuse, or alteration. When your bank account information is transmitted via our Services, it will be protected by encryption technology, such as Secure Socket Layer (SSL).
                {"\n\n"}
                No method of electronic transmission or storage is 100% secure. Therefore, we cannot guarantee absolute security of your Personal Information. You also play a role in protecting your Personal Information. Please safeguard your username and password for your Thrive account and do not share them with others. If we receive instructions using your Thrive account login information, we will consider that you have authorized the instructions. You agree to notify us immediately of any unauthorized use of your Thrive account or any other breach of security. We reserve the right, in our sole discretion, to refuse to provide our Services, terminate Thrive accounts, and to remove or edit content.
                {"\n\n"}
                <Text style={styles.boldText}>Thrive will NEVER ask you for your usernames and passwords or any other confidential information in an email or text message.</Text> While a message asking for such information may look like it was sent from Thrive, please delete it immediately. If you've clicked on such a link and entered your username and password, we recommend you change your password at <Text style={styles.blueInnerText} onPress={() => Communications.web("https://thrivesavings.com")}>www.thrivesavings.com</Text>. Please report any suspicious messages to <Text style={styles.blueInnerText} onPress={() => Communications.email(["help@thrivesavings.com"],null,null,"Help Needed",null)}>help@thrivesavings.com</Text>.
              </Text>
            </ScrollView>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.contentContainer, styles.noTopBorder]}>
              <Text style={[styles.regularText, styles.blueText]}>How We Use Cookies And Similar Technologies</Text>
              <Text style={[styles.regularText]}>
                To help operate the Site, enhance you experience, and collect information about online activity, we may place small data files on your computer or other device. These data files may be in the form of cookies, pixel tags, local shared objects, or other similar technologies. Cookies and similar technologies enable us to personalize our Site and Services for you. These technologies allow us to store and manage your preferences and settings, measure and analyze how you use our Site and effectiveness of our communications, offer targeted products, programs and services, and help us improve our products, services, and security. Information collected includes internet protocol address, operating system, browser specifics of your device, device characteristics, user ID, and specifics regarding your interactions with (i.e., the path you take through) our Site and Services.
                {"\n\n"}
                Most browsers provide you with the ability to block, delete, or disable these technologies. If you choose to reject cookies or similar technologies, some Services may not be available or some functionality may be limited or unavailable. Please review your browser manufacturer’s help pages for assistance with changing your settings.
              </Text>

              <Text style={[styles.regularText, styles.blueText]}>Protecting Children's Privacy</Text>
              <Text style={[styles.regularText]}>
                Our Services are not directed, or intended to be attractive, to children under the age of majority in his or her jurisdiction of residence. We do not knowingly collect Personal Information from children under the age of majority. If you are under the age of majority in your jurisdiction of residence, do not use our Services or submit any information to us.
              </Text>

              <Text style={[styles.regularText, styles.blueText]}>Links to Third-Party Websites</Text>
              <Text style={[styles.regularText]}>
                When you use our Services, you may be directed to other websites that are beyond our control. We may also allow third-party websites or applications to link to our Services. We are not responsible for the privacy practices of any third parties or the content of linked websites, but we do encourage you to read the applicable privacy policies and terms and conditions of such parties and websites. This Privacy Policy only applies to our Services.
              </Text>

              <Text style={[styles.regularText, styles.blueText]}>Opting Out</Text>
              <Text style={[styles.regularText]}>
                You have the option to sign up to receive periodic Site or Services related alerts, weekly summaries, notifications, newsletters, promotions, or other information via email. It is your choice to sign-up or to stop receiving alerts, summaries, newsletters or promotions. You may unsubscribe at any time from any email or text message you receive. Please note that you may withdraw your consent to receive Communications electronically at any time by contacting us at <Text style={styles.blueInnerText} onPress={() => Communications.email(["help@thrivesavings.com"],null,null,"Help Needed",null)}>help@thrivesavings.com</Text>.
                {"\n\n"}
                If you withdraw your consent to receive Communications electronically, we may still have a legal obligation to send you account updates by law. Any withdrawal of your consent to receive Communications electronically will be effective within 10 business days of your withdrawal. Please note that withdrawal of your consent to receive Communications electronically will not apply to Communications electronically provided by us to you before the withdrawal of your consent becomes effective.
              </Text>

              <Text style={[styles.regularText, styles.blueText]}>Changes to our Privacy Policy</Text>
              <Text style={[styles.regularText]}>
                Subject to applicable law, we may revise this Privacy Policy at any time and in our sole discretion. When we revise this Privacy Policy, we will post the revised version via our Services and will update the date at the top of this Privacy Policy. The revised Privacy Policy will be effective upon posting via our Services, unless otherwise set forth therein or as otherwise required by applicable law. You are free to decide whether or not to accept a revised version of this Privacy Policy, but accepting this Privacy Policy, as revised, is required for you to continue accessing or using our Services. If you do not agree to the terms of this Privacy Policy or any revised version of this Privacy Policy, your sole recourse is to terminate your access and use of our Services. Except as otherwise expressly stated by us, your access and use of our Services is subject to the version of this Privacy Policy in effect at the time of access or use.
              </Text>

              <Text style={[styles.regularText, styles.blueText]}>Contacting Us</Text>
              <Text style={[styles.regularText]}>
                If you have any questions regarding this Privacy Policy, please contact our Privacy Officer at <Text style={styles.blueInnerText} onPress={() => Communications.email(["help@thrivesavings.com"],null,null,"Help Needed",null)}>help@thrivesavings.com</Text>, or <Text style={styles.boldText}>Thrive Savings Inc., Attn: Privacy Officer, 10 Dundas Street East, 6th Floor, Toronto ON M5B 2G9</Text>.
              </Text>
            </ScrollView>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

export default PP;
