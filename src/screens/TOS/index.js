import React, { Component } from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  Text,
  StatusBar
} from "react-native";

import Header from "../../components/Header";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";
import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

class TOS extends Component {
  render() {
    return (
      <View style={globalStyles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <ImageBackground source={bg} style={globalStyles.background}>
          <Header navigation={this.props.navigation} button="back" content="text" text="TERMS OF SERVICE" />

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewsContainer}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.contentContainer, styles.noBottomBorder]}>
              <Text style={[styles.regularText, styles.boldText]}>Last Updated: May 01, 2018</Text>
              <Text style={[styles.regularText, styles.boldText]}>PLEASE NOTE THAT YOUR USE OF AND ACCESS TO THE SERVICES (AS DEFINED BELOW) ARE SUBJECT TO THE FOLLOWING TERMS; IF YOU DO NOT AGREE TO ALL OF THESE TERMS, YOU MAY NOT USE OR ACCESS THE SERVICES IN ANY MANNER.</Text>
              <Text style={[styles.regularText]}>These Terms of Service (these “Terms”) represent an agreement between you and Thrive Savings Inc. (“Thrive”) and contain the terms and conditions governing your use of and access to:</Text>

              <View style={styles.listContainer}>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>1  </Text>
                  <Text style={styles.regularText}>
                    our website at thrivesavings.com and all of our other websites to which these Terms are posted (collectively, the “Website”);
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>2  </Text>
                  <Text style={styles.regularText}>
                    our mobile applications to which these Terms are posted (collectively, the “Application”); and
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>3  </Text>
                  <Text style={styles.regularText}>
                    any products, services, and applications made available through the Website or the Application (together with the Website and the Application, the “Services”). “You” and “your” mean the person who uses or accesses the Services. “We,” “us,” and “our” mean Thrive and its successors, affiliates, and assignees. As used in these Terms, “Thrive Account” means the account you have with us for the Services.
                  </Text>
                </View>
              </View>

              <Text style={styles.regularText}>
                Your use of and access to the Services are subject at all times to these Terms and our <Text style={styles.blueInnerText}>Privacy Policy</Text>. Please read these Terms and our <Text style={styles.blueInnerText}>Privacy Policy</Text> carefully.
                {"\n\n"}
                By using or accessing the Services or by clicking to agree to these Terms when that option is made available to you, you represent that you have read and understand these Terms and our <Text style={styles.blueInnerText}>Privacy Policy</Text> and you agree to be bound by these Terms and our <Text style={styles.blueInnerText}>Privacy Policy</Text> which describes the collection, use, disclosure and safeguarding of my personal information by Thrive. If you do not agree to all the terms and conditions of these Terms and our Privacy Policy, do not use or access the Services.
                {"\n\n"}
                <Text style={styles.boldText}>
                  THESE TERMS INCLUDE, AMONG OTHER THINGS, YOUR AUTHORIZATION FOR VARIABLE PRE-AUTHORIZED DEBITS (“PADS”) AND CREDITS FROM AND TO YOUR LINKED BANK ACCOUNT (AS DEFINED BELOW) VIA ELECTRONIC FUND TRANSFER AND SHARING YOUR BANKING AND PERSONAL INFORMATION WITH THRIVE FOR THE PURPOSES DESCRIBED IN THE THRIVE TERMS, INCLUDING PROVIDING YOU INFORMATION AND RECOMMENDATIONS OF PRODUCTS TO HELP FURTHER YOUR FINANCIAL WELLNESS AND GOALS.
                  {"\n\n"}
                  YOU MUST READ THESE TERMS CAREFULLY AND BE SURE THAT YOU FULLY UNDERSTAND AND AGREE TO THE APPLICABLE TERMS AND CONDITIONS BEFORE USING THE SERVICES. YOU SHOULD CONTACT THRIVE IF YOU HAVE ANY QUESTIONS. IF YOU DO NOT AGREE WITH THE TERMS AND CONDITIONS SET OUT IN THIS AGREEMENT, YOU SHOULD NOT ACCESS OR USE ANY OF THE THRIVE SERVICES.
                </Text>
              </Text>
              <Text style={[styles.regularText, styles.boldText]}>IF YOU DO NOT AGREE TO EVERY PROVISION OF THIS PRIVACY POLICY AND OUR TERMS OF SERVICE, YOU MAY NOT ACCESS OR USE OUR SERVICES.</Text>

              <Text style={[styles.regularText, styles.blueText]}>Your Consent to Use Electronic Signatures And Communications</Text>
              <Text style={styles.regularText}>
                <Text style={styles.boldText}>YOUR CONSENT:</Text>{"\n"}
                By accepting and agreeing to these Terms electronically, you represent that: (1) you have read and understand this consent to use electronic signatures and to receive Communications electronically; (2) you satisfy the minimum hardware and software requirements specified below; and (3) your consent will remain in effect until you withdraw your consent as specified below.
                {"\n\n"}
                <Text style={styles.boldText}>YOUR RIGHT TO WITHDRAW CONSENT:</Text>{"\n"}
                Your consent to receive Communications electronically will remain in effect until you withdraw it. You may withdraw your consent to receive further Communications electronically at any time by contacting us at <Text style={styles.blueInnerText}>help@thrivesavings.com</Text>. If you withdraw your consent to receive Communications electronically, we may still have a legal obligation to send you account updates by law. Any withdrawal of your consent to receive Communications electronically will be effective within 10 business days of your withdrawal. Please note that withdrawal of your consent to receive Communications electronically will not apply to Communications electronically provided by us to you before the withdrawal of your consent becomes effective.
                {"\n\n"}
                <Text style={styles.boldText}>YOU MUST KEEP YOUR CONTACT INFORMATION CURRENT WITH US. </Text>{"\n"}
                In order to ensure that we are able to provide Communications to you electronically, you must notify us of any change in your email address and your mobile device number or other text message address by updating your profile on the Website or the Application.
                {"\n\n"}
                <Text style={styles.boldText}>COPIES OF COMMUNICATION:</Text>{"\n"}
                You should print and save and/or electronically store a copy of all Communications that we send to you electronically.
                {"\n\n"}
                <Text style={styles.boldText}>HARDWARE AND SOFTWARE REQUIREMENTS:</Text>{"\n"}
                In order to access and retain Communications provided to you electronically, you must have: (1) a valid email address; (2) a computer or other mobile device (such as tablet or smartphone) that operates on a platform like Windows or iOS; (3) a connection to the Internet; (4) a Current Version of Internet Explorer 8 (or higher), Mozilla Firefox 7.0, Safari 5, or Chrome 15; (5) a Current Version of a program that accurately reads and displays PDF files, such as Adobe Acrobat Reader version 7 or higher; (6) a computer or device and an operating system capable of supporting all of the above; and (7) a printer to print out and save Communications in paper form or electronic storage to retain Communications in an electronic form. “Current Version” means a version of the software that is currently being supported by its publisher.
              </Text>

              <Text style={[styles.regularText, styles.blueText]}>Your Authorization For Variable Pre-Authorized Debits and Credits</Text>
              <Text style={[styles.regularText]}>By agreeing to these Terms, you authorize each of Thrive and VersaPay Corporation (TSX: VPY), acting on behalf of Thrive (and any other third party service provider acting on behalf of Thrive), to electronically debit and credit your designated linked bank account at your designated depository financial institution (your “Linked Bank Account”) via Pre-Authorized Debit (PAD) and, if ever applicable, to correct erroneous debits and credits via Electronic Fund Transfer (“EFT”) as follows:</Text>
              <View style={styles.listContainer}>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>•  </Text>
                  <Text style={styles.regularText}>
                    Range of Acceptable Debit Amounts: up to $10,000 per Business Day (as defined below)
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>•  </Text>
                  <Text style={styles.regularText}>
                    Frequency of Debits: multiple times per Business Day (however, debits and credits may not necessarily occur every Business Day)
                  </Text>
                </View>
              </View>
              <Text style={styles.regularText}>
                By agreeing to the Thrive Terms of Service, you are also agreeing to the Pre-Authorized Debit Agreement (the “PAD Agreement”). <Text style={styles.boldText}>If you do not agree to the Pre-Authorized Debit Agreement, you may not use the Thrive services.</Text>
                {"\n\n"}
                The following is a summary of the key terms of the PAD Agreement (the complete agreement is available at <Text style={styles.blueInnerText}>www.ADD LINK IN</Text> and the complete PAD Agreement is incorporated by reference into these Terms and forms part of these Terms):
                {"\n\n"}
                You acknowledge that the amount and frequency of the foregoing debits (each such amount, “PAD Amount”) and credits may vary and that you waive your right to receive prior notice of the amount and date of each pre-authorized debit and credit.
                {"\n\n"}
                You acknowledge that the electronic authorization contained in this Section represents your written authorization for Pre-Authorized Debit (PAD) transactions as provided herein and will remain in full force and effect until you notify Thrive that you wish to revoke this authorization by emailing help@thrivesavings.com.
                {"\n\n"}
                This authorization is a “Personal PAD”, as such term is defined in the Canadian Payment Association Rule H1 (“Rule H1”). The PAD Amount will be variable based on the amount you specify from time to time. PADs will be sporadic based on the PAD Amount. This authorization authorizes “Sporadic PADs” within the meaning of Rule H1. Accordingly, we are required to obtain due “Authorization” (within the meaning of Rule H1) for each and every Sporadic PAD under this authorization. Your initiation of an instruction to Thrive to transfer funds from your Linked Bank Account will constitute valid and due Authorization for each Sporadic PAD and will constitute delivery of your authorization to your bank to debit your Linked Bank Account for the PAD Amount.
                {"\n\n"}
                You authorize and direct each of Thrive and VersaPay, as payee, to debit your Linked Bank Account in accordance with the terms of this PAD Agreement, and to credit the payment received to your Savings.
                {"\n\n"}
                You consent to the disclosure of personal information contained in this PAD Agreement, and any debit issued pursuant to this authorization, to financial institutions as necessary in order to give effect to this PAD Agreement, subject to the rules of Payments Canada and applicable privacy laws.
                {"\n\n"}
                You must notify Thrive at least five <Text style={styles.boldText}>Business Days</Text> before the scheduled debit date of any PAD transaction from your Linked Bank Account in order to cancel this authorization. If we do not receive notice at least five Business Days before the scheduled debit date, we may attempt, in our sole discretion, to cancel the debit transaction. However, we assume no responsibility for our failure to do so.
                {"\n\n"}
                If you withdraw your electronic authorization contained in this Section, we will close your Thrive Account and return the balance in your Savings to your Linked Bank Account as set forth in these Terms, and you will no longer be able to use your Thrive Account or the Services, except as expressly provided in these Terms. Please note that withdrawal of your electronic authorization contained in this Section will not apply to PAD transactions performed before the withdrawal of your authorization becomes effective.
                {"\n\n"}
                To the extent permitted under Rule H1, you confirm that you will not be provided with written Notice of the amount of each debit and waive any notices otherwise required Rule H1.
                {"\n\n"}
                Thrive may assign this authorization, whether directly or indirectly, by operation of law, change of control or otherwise, by providing at least 10 days prior Notice to you.
              </Text>

              <Text style={[styles.regularText, styles.blueText]}>Are there any fees for using the Thrive program?</Text>
              <Text style={[styles.regularText]}>
                Thrive does not charge fees to end users for use of the Services. Your employer or work provider may pay a subscription access fee to Thrive to enable you to use the Thrive Services.
                {"\n\n"}
                You agree that Thrive shall not be liable to you for any fees or penalties charged by any financial institution that maintains your Linked Bank Account in connection with a pre-authorized debit or credit, including any overdraft fees. You agree that you are responsible for any fees or penalties that you may incur from any financial institution that maintains your Linked Bank Account as a result of any pre-authorized debit or credit.
              </Text>
            </ScrollView>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.contentContainer, styles.noTopBorder, styles.noBottomBorder]}>
              <Text style={[styles.regularText, styles.blueText]}>What are the requirements to use the Thrive Program?</Text>
              <View style={styles.listContainer}>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(a) </Text>
                  <Text style={styles.regularText}>
                    accept and agree to these Terms and our Privacy Policy;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(b) </Text>
                  <Text style={styles.regularText}>
                    register with us on the Website or the Application;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(c) </Text>
                  <Text style={styles.regularText}>
                    be a Canadian citizen (or a legal Canadian resident) of at least the age of majority in your jurisdiction of residence;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(d) </Text>
                  <Text style={styles.regularText}>
                    have a Bank Account with a Canadian financial institution;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(e) </Text>
                  <Text style={styles.regularText}>
                    provide all information requested by us, such as your name, address, email address, gender, mobile device number, online credentials for your Linked Bank Account, and such other information as we may request from time to time (collectively, “User Information”); and
                  </Text>
                </View>
              </View>

              <Text style={styles.regularText}>
                You represent and warrant that all User Information you provide us from time to time is truthful, accurate, current, and complete, and you agree not to misrepresent your identity or your User Information. You agree to promptly notify us of changes to your User Information by updating your Thrive Account on the Website or the Application; provided, however, that you must notify us at least five Business Days before any changes to your Linked Bank Account information, including, but not limited to, the closure of your Linked Bank Account for any reason by emailing <Text style={styles.blueInnerText}>help@thrivesavings.com</Text> or by updating your Thrive Account via the Website or the Application. If we approve your registration, you will be authorized to use the Services, subject to these Terms.
                {"\n\n"}
                For our compliance purposes and in order to provide the Services to you, you hereby authorize us to, directly or through a third-party, obtain, verify, and record information and documentation that helps us verify your identity and Linked Bank Account information. When you register for the Services and from time to time thereafter, we may require you to provide and/or confirm information and documentation that will allow us to identify you, such as:
              </Text>

              <View style={styles.listContainer}>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>•  </Text>
                  <Text style={styles.regularText}>
                    a copy of your government-issued photo ID, such as a passport or driver’s license;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>•  </Text>
                  <Text style={styles.regularText}>
                    a copy of a utility bill, bank statement, or other bill, dated within three months of our request, with your name and Canadian street address on it; and
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>•  </Text>
                  <Text style={styles.regularText}>
                    other information and documentation that we may require from time to time.
                  </Text>
                </View>
              </View>

              <Text style={[styles.regularText, styles.blueText]}>How do I use the Thrive Services?</Text>
              <Text style={[styles.regularText]}>
                The purpose of the Services is to try to help you save money with limited effort. We monitor and analyze your Linked Bank Account. Based upon our analytics and your PAD authorization provided in these Terms, we identify funds in your Linked Bank Account that may be put towards your Savings.
                {"\n\n"}
                Thrive is not a financial institution and does not accept deposits.  Instead, as mentioned above, the purpose of the Services is to help you save money.  Only funds from your Linked Bank Account may be transferred to your Savings. The funds are held in a deposit account at a Canadian financial institution and are CDIC insured. For each individual customer, the current CDIC insurance limit is $100,000.  The funds held in your Savings do not constitute liabilities of Thrive; instead they constitute deposit liabilities of the Canadian financial institution where such funds will be held in a deposit account.
                {"\n\n"}
                <Text style={styles.boldText}>The only way to put money in or take money out of your Savings is via Thrive.</Text>
                {"\n\n"}
                Your funds will remain in your Savings until you instruct us to transfer any or all of your funds to your Linked Bank Account by texting “WITHDRAW” to the unique number provided by us or by emailing us at <Text style={styles.blueInnerText}>help@thrivesaving.com</Text>. We will generally transfer the requested funds to your Linked Bank Account within four Business Days of when we receive your request. It is important to know the amount of available funds in your Savings before instructing us to transfer funds from your Savings to your Linked Bank Account. If you do not have sufficient available funds in your Savings to cover the amount of the requested transfer, your request for the transfer will be declined.
                {"\n\n"}
                You acknowledge that you forfeit your rights to dispute any pre-authorized debit unless the debit does not comply with the PAD authorization included in these Terms. For example, you have the right to receive reimbursement for any PAD that is not consistent with the above. To obtain a form for a reimbursement claim, or for more information on your recourse rights, you may contact the financial institution that holds your Linked Bank Account or visit <Text style={styles.blueInnerText}>www.cdnpay.ca</Text>.
                {"\n\n"}
                We may also transfer funds from your Savings to your Linked Bank Account without notice to you upon the closure of your Thrive Account as described below and at any time if required by applicable law or if we, in our sole discretion, suspect the Services are being used for illicit purposes or otherwise in violation of these Terms.
                {"\n\n"}
                You may not use the funds in your Savings to make purchases, withdraw cash, transfer funds to third parties, or for any other purpose. You are solely responsible for determining whether the funds debited from your Linked Bank Account and the funds maintained in your Savings are acceptable to you.
                {"\n\n"}
                Thrive is not a financial adviser, and the Services are not intended to provide financial advice. Your financial situation is unique, so we are not responsible for ensuring your Linked Bank Account has sufficient funds for your needs, purposes, or transactions. We do not make any representations, warranties, or guarantees of any kind that the Services are appropriate for you. Before using the Services, you should consider obtaining additional information and advice from a financial adviser. For more information about the Services, please review these Terms and visit our <Text style={styles.blueInnerText}>Frequently Asked Questions</Text> page on the Website or the Application.
              </Text>

              <Text style={[styles.regularText, styles.blueText]}>What personal financial information is required to use the Services?</Text>
              <Text style={[styles.regularText]}>
                <Text style={styles.boldText}>ACCESS TO BANK ACCOUNTS:</Text>{"\n"}
                Thrive’s technology partner for bank account verification is Flinks Inc. and enabled by the Flinks API (“Flinks Service”, “Flinks Software”) from within the Thrive application and website. You authorize Thrive and Flinks to access and log-in to your Linked Bank Account that you connect to your Thrive Account on your behalf as your agent using the credentials that you provide to us, including usernames and passwords for the purpose of calculating the pre-authorized debit. The Flinks Software is subject to the following terms:
                {"\n\n"}
                You are licensing to Thrive and Flinks Technology, Inc. (“Flinks”), any data, passwords, or other information (collectively, “Content”) you provide through or to the Flinks Service. Thrive and Flinks may use, modify, display, distribute and create new material using such Content only to provide the Flinks Service to you. By submitting Content, you automatically agree, or promise that the owner of such Content has expressly agreed that, without any particular time limit, and without the payment of any fees, Thrive and Flinks may use the Content for the purposes set out above.
                {"\n\n"}
                By using the Software and the Flinks Service, you authorize Thrive and Flinks to access third party sites designated by you, on your behalf, to retrieve information requested by you, and to register for accounts requested by you. For all purposes hereof, you hereby grant Thrive and Flinks a limited power of attorney, and you hereby appoint Thrive and Flinks as your true and lawful attorney-in-fact and agent, with full power of substitution and resubstitution, for you and in your name, place and stead, in any and all capacities, to access third party Internet sites, servers or documents, retrieve information, and use your information, all as described above, with the full power and authority to do and perform each and every act and thing requisite and necessary to be done in connection with such activities, as fully to all intents and purposes as you might or could do in person, only as required to provide you the Flinks Service. You acknowledge and agree that when Thrive or Flinks accesses and retrieves information from third party sites, Thrive and Flinks are acting as your agent, and not the agent or on behalf of the third party. You agree that third party account providers shall be entitled to rely on the foregoing authorization, agency, and power of attorney granted by You. You understand and agree that the Flinks Service is not endorsed or sponsored by any third party account providers accessible through the Flinks Service.
                {"\n\n"}
                You expressly understand and agree that:
              </Text>

              <View style={styles.listContainer}>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(a) </Text>
                  <Text style={styles.regularText}>
                    Your use of the Flinks Service and all information, products and other content (including that of third parties) included in or accessible from the Flinks Service is at your sole risk. The Flinks Service is provided on an "as is" and "as available" basis. Thrive and Flinks expressly disclaim all warranties of any kind as to the Flinks Service and all information, products and other content (including that of third parties) included in or accessible from the Flinks Service , whether express or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose and non-infringement.
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(b) </Text>
                  <Text style={styles.regularText}>
                    Thrive and Flinks make no warranty that (i) the Flinks Service will meet your requirements, (ii) the Flinks Service will be uninterrupted, timely, or error-free, (iII) the quality of any products, services, information, or other material purchased or obtained by you through the Flinks Service will meet your expectations, or (Iv) any errors in the technology will be corrected.
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(c) </Text>
                  <Text style={styles.regularText}>
                     Any material downloaded or otherwise obtained through the use of the Flinks Service is done at your own discretion and risk and you are solely responsible for any damage to your computer system or loss of data that results from the download of any such material. No advice or information, whether oral or written, obtained by you from Thrive or Flinks through or from the Flinks Service will create any warranty not expressly stated in these terms.
                  </Text>
                </View>
              </View>
            </ScrollView>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.contentContainer, styles.noTopBorder, styles.noBottomBorder]}>
              <Text style={styles.regularText}>
                <Text style={styles.boldText}>LIMITATION OF LIABILITY:</Text>{"\n"}
                You agree that neither Thrive or Flinks nor any of their affiliates, account providers or any of their affiliates will be liable for any harms, which lawyers and courts often call direct, indirect, incidental, special, consequential or exemplary damages, including, but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses, even if Thrive or Flinks has been advised of the possibility of such damages, resulting from:
              </Text>
              <View style={styles.listContainer}>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(a) </Text>
                  <Text style={styles.regularText}>
                    the use or the inability to use the Flinks Service;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(b) </Text>
                  <Text style={styles.regularText}>
                    the cost of getting substitute goods and services;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(c) </Text>
                  <Text style={styles.regularText}>
                    any products, data, information or services purchased or obtained or messages received or transactions entered into, through or from the Flinks Service;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(d) </Text>
                  <Text style={styles.regularText}>
                    unauthorized access to or alteration of your transmissions or data;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(e) </Text>
                  <Text style={styles.regularText}>
                    statements or conduct of anyone on the Flinks Service;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(f) </Text>
                  <Text style={styles.regularText}>
                    the use, inability to use, unauthorized use, performance or non-performance of any third party account provider site, even if the provider has been advised previously of the possibility of such damages, or;
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(g) </Text>
                  <Text style={styles.regularText}>
                    any other matter relating to the Flinks Service.
                  </Text>
                </View>
              </View>

              <Text style={styles.regularText}>
                You agree to protect and fully compensate Thrive and Flinks and their affiliates from any and all third party claims, liability, damages, expenses and costs (including, but not limited to, reasonable attorneys/legal fees) caused by or arising from your use of the Flinks Service, your violation of these terms or your infringement, or infringement by any other user of your account, of any intellectual property or other right of anyone.
                {"\n\n"}
                You agree that Flinks is a third party beneficiary of the above provisions, with all rights to enforce such provisions as if Flinks were a party to this Agreement.
                {"\n\n"}
                YOU ARE RESPONSIBLE FOR ENSURING THAT YOUR AGREEMENTS WITH YOUR FINANCIAL INSTITUTION RELATING TO YOUR LINKED BANK ACCOUNT PERMIT YOU TO APPOINT THRIVE AS YOUR LAWFUL AGENT TO ACCESS YOUR LINKED BANK ACCOUNT.
                {"\n\n"}
                <Text style={styles.boldText}>TRANSACTION HISTORY:</Text>{"\n"}
                YOU AUTHORIZE THRIVE TO EXAMINE, ANALYZE, TRACK AND COLLECT INFORMATION ABOUT YOUR TRANSACTION HISTORY IN ORDER TO: (I) PROVIDE YOU WITH ACCESS TO PRE-AUTHORIZED DEBIT FEATURE; (II) DEVELOP AND IMPROVE YOUR FINANCIAL PROFILE; AND (III) TO CUSTOMIZE THE THRIVE EXPERIENCE FOR YOU. IF YOUR LINKED BANK ACCOUNT REFUSES TO ALLOW THRIVE ACCESS TO INFORMATION ON PURCHASES MADE IN YOUR LINKED BANK ACCOUNT, THRIVE MAY TERMINATE THIS PROGRAM AGREEMENT WITHOUT FURTHER OBLIGATIONS OR LIABILITY TO YOU.
                {"\n\n"}
                <Text style={styles.boldText}>CREDIT INFORMATION:</Text>{"\n"}
                You authorize Thrive to request and obtain your Credit Information from any consumer reporting agency. You furthermore authorize Thrive to share your Credit Information with other service providers to the Thrive Program in order for them to: (i) verify your identity; (ii) perform AML verifications, (iii) develop and improve your Financial Profile; and (iv) customize the Thrive Services for you.
                {"\n\n"}
                <Text style={styles.boldText}>FINANCIAL PROFILE:</Text>{"\n"}
                Thrive develops a Financial Profile for each user of the Thrive Services. “Financial Profile” means information about your finances possessed by Thrive, including, but not limited to Transaction History and your financial, savings and investment goals and objectives.
                {"\n\n"}
                You acknowledge and authorize Thrive to develop and use your Financial Profile to: (i) customize and improve the Thrive Services; (ii) provide you with an overview of your savings and finances; (iii) provide you with tips, recommendations and education materials on how to save, organize and manage your finances; (iv) provide you with information about third party products or services that can help you organize and manage your finances; and (v) to conduct statistical research and analysis on an aggregated basis for comparative and historical insights.
                {"\n\n"}
                <Text style={styles.boldText}>FINANCIAL INSIGHTS:</Text>{"\n"}
                In order to help you achieve your financial and lifestyle goals, Thrive may provide you with general tips, recommendations and education materials on how to save, organize and manage your finances.
                {"\n\n"}
                <Text style={styles.boldText}>THIRD-PARTY PRODUCTS AND SERVICES</Text>{"\n"}
                Thrive will provide you with information relating to third-party products or services that can help you save, organize and manage your finances. You will receive offers, promotions and other commercial electronic communications from Thrive and its promotional partners as an integral part of the Thrive Services. Thrive may receive fees for providing such third-party information or otherwise promoting third party products and services to you.
                {"\n\n"}
                You can unsubscribe at any time by using the unsubscribe links provided in these electronic communications or by contacting Thrive Savings Inc. at <Text style={styles.blueInnerText}>help@thrivesavings.com</Text>. If you withdraw your consent to receive information relating to third-party products or services electronically, we may still be obligated by law to send you updates on your account by email.
                {"\n\n"}
                <Text style={styles.boldText}>AGGREGATED DATA:</Text>{"\n"}
                You grant Thrive a non-exclusive, transferable, assignable, irrevocable, royalty-free, worldwide, perpetual license to create Aggregated Data and to use such Aggregated Data, and all modifications thereto and derivatives thereof, for any purpose, including, without limitation, to improve your Financial Profile, the Thrive Services, or to develop new products and services, to understand usage, to build and create data profiles and to conduct statistical research and analysis for comparative and historical insights. “Aggregated Data” means aggregated, anonymized data pertaining to a group of users without any risk of disclosing any one user’s identity. Aggregated Data may include information about your location, your Financial Profile and your Financial Products.
                {"\n\n"}
                <Text style={styles.boldText}>TERMINATION:</Text>{"\n"}
                In the event that these Services are terminated or if you remove Your Information from your Thrive Profile, Thrive may maintain Your Information and may continue to use Your Information pursuant to the licenses granted above, in according with its Privacy Policy.
              </Text>
            </ScrollView>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.contentContainer, styles.noTopBorder, styles.noBottomBorder]}>
              <Text style={[styles.regularText, styles.blueText]}>How do I check the balance in my Thrive Savings?</Text>
              <Text style={styles.regularText}>
                You may obtain information about the balance of funds in your Savings at any time by texting “BALANCE” to the unique number provided by us or by logging in to your Thrive Account on the Website or the Application. Your mobile carrier's standard text message and data charges may apply to text messages you receive from us, and you are responsible for any fees charged by your mobile carrier.
              </Text>

              <Text style={[styles.regularText, styles.blueText]}>Will I receive interest on the funds held with Thrive Savings?</Text>
              <Text style={styles.regularText}>
                You agree that you will not receive interest or other earnings on the funds in your Savings and nothing in these Terms grants Thrive any rights to the principal of the funds held in your Savings.
              </Text>

              <Text style={[styles.regularText, styles.blueText]}>What are some restrictions on using the Services?</Text>
              <Text style={styles.regularText}>
                You may only use the Thrive Services for your own personal, non-commercial use and not on behalf of or for the benefit of any third party. Your use of the Services must comply with all applicable law. If your use of the Services is prohibited by applicable law, then you are not authorized to use the Services. We are not responsible if you use the Services in any manner that violates applicable law.
                {"\n\n"}
                You agree not to authorize any other person or entity to use your Username and Password or mobile device to access the Services. You are solely responsible for the maintenance, confidentiality, and security of your username, password, and other User Information. Except as otherwise required by applicable law, you are responsible for all transactions and other activities authorized or performed using your username and password or mobile device, whether authorized or unauthorized by you. Except as otherwise expressly stated in these Terms or required by applicable law, we are not responsible for any losses arising out of the loss or theft of your User Information or your mobile device or from unauthorized or fraudulent transactions associated with your Bank Account or your Savings. If you suspect or become aware of any unauthorized activity or access to your username, password, or mobile device, you must contact us immediately at <Text style={styles.blueInnerText}>help@thrivesavings.com</Text>.
                {"\n\n"}
                We offer the Services and the features, information, materials, and content provided and depicted through the Services (collectively, “Content”) solely for your personal use for the purposes described therein and in these Terms. Any and all other uses are prohibited. You may not restrict or inhibit any other person from using or enjoying the Services or Content.
                {"\n\n"}
                The Services and Content are protected by copyright, trademark, patent, and other intellectual property laws. We expressly reserve all rights and remedies under applicable law. Except as expressly provided by these Terms or with our prior written consent, you may not use, modify, disassemble, decompile, reverse engineer, reproduce, distribute, rent, sell, license, publish, display, download, transmit, or otherwise exploit any Content in any form by any means. Without limiting the foregoing, you agree not to (and not to allow any third party to): (a) use any robot, spider, scraper, or other automatic or manual device, process, or means to access the Services or copy any Content, except as expressly authorized by us; (b) take any action that imposes or may impose (in our sole determination) an unreasonable or a disproportionately large load on the Services or our infrastructure; (c) utilize any device, software, or routine that will interfere or attempt to interfere with the functionality of the Services; (d) rent, lease, copy, provide access to, or sublicense any portion of the Services or Content to a third party; (e) use any portion of the Services or Content to provide, or incorporate any portion of the Services or Content into, any product or service provided to a third party; (f) reverse engineer, decompile, disassemble, or otherwise seek to obtain the source code of the Services or Content; (g) modify the Services or Content or create any derivative product from any of the foregoing; (h) remove or obscure any proprietary or other notices contained in the Services or Content; (i) use the Services or Content in any way that is illegal, harmful, fraudulent, deceptive, threatening, harassing, defamatory, obscene, or otherwise objectionable, as we may determine in our sole discretion; (j) jeopardize the security of your Thrive Account or any other person’s Thrive Account (such as allowing someone else to use your username and password to access the Services); (k) attempt, in any manner, to obtain the username, password, account, or other security information from any other user of the Services; (l) violate the security of any computer network or crack any passwords or security encryption codes; or (m) run Maillist, Listserv, any form of auto- responder or “spam,” or any processes that run or are activated while you are not logged in to access the Services. We may, but are not obligated to, monitor your use of the Services and Content.
                {"\n\n"}
                We do not grant you any licenses, express or implied, to our intellectual property or the intellectual property of our licensors, except as expressly stated in these Terms. We and our third-party licensors retain all right, title, and interest in and to the Services, Content, and any associated patents, trademarks, copyrights, mask work rights, trade secrets, and other intellectual property rights.
                {"\n\n"}
                The Services may permit you to submit content, send emails and other communications, and provide other information for publication or distribution to third parties (collectively, “User Content”). Any User Content must not be illegal, threatening, obscene, racist, defamatory, libelous, pornographic, infringing of intellectual property rights or personality rights, promoting of illegal activity or harm to groups and/or individuals, invasive of privacy, purposely false or otherwise injurious to third parties, or objectionable and must not consist of or contain software, computer viruses, commercial solicitation, political campaigning, chain letters, mass mailings, or any form of “spam.” If you submit User Content, and unless we indicate otherwise, you grant us a nonexclusive, perpetual, royalty-free, irrevocable, and fully sublicensable (through multiple tiers) right to use, modify, reproduce, adapt, translate, publish, create derivative works from, distribute, display, and otherwise exploit such User Content throughout the world in any media. You further waive all moral rights in such User Content in favour of Thrive. We take no responsibility and assume no liability for any User Content submitted by you or any other user or third party.
                {"\n\n"}
                To the extent permitted by applicable law, we may, in our sole discretion and without liability to you, terminate (or suspend access to) your use of the Services, Content, or your Thrive Account for any reason, including, but not limited to, your breach of these Terms.
              </Text>

              <Text style={[styles.regularText, styles.blueText]}>What do I do if my mobile device is lost or stolen or if I suspect someone has gained unauthorized access to my Username or Password?</Text>
              <Text style={styles.regularText}>
                If your mobile device is lost or stolen or if you suspect someone has gained unauthorized access to your username or password, you must contact us immediately at help@thrivesavings.com. In order to take any action, you will need to provide certain User Information so we can verify your identity.
              </Text>

              <Text style={[styles.regularText, styles.blueText]}>How does Thrive communicate with me about the Services?</Text>
              <Text style={styles.regularText}>
                In order to use the Services, you must provide us the code that will be delivered to you by your employer or work provider. You must then verify your mobile device number or other text message address to us, and you must expressly consent to receive text messages relating to the Services at that number or address. Third-party data and message fees may apply. To verify your mobile device number or text message address, we may send you a code via text message to the mobile device number or text message address you provide, and you must enter that code as instructed by us. If you change your mobile device number or text message address, you must promptly provide and verify your new mobile device number or text message address.
                {"\n\n"}
                You may receive offers, promotions and other commercial electronic communications from Thrive and its promotional partners as an integral part of the Thrive Services. In addition, we may send you important notices via email about the Services. {"\n"}
                Please note that you may withdraw your consent to receive Communications electronically at any time by unsubscribing or contacting us at <Text style={styles.blueInnerText}>help@thrivesavings.com</Text>. If you withdraw your consent to receive Communications electronically, we may still have a legal obligation to send you account updates by law. Any withdrawal of your consent to receive Communications electronically will be effective within 10 business days of your withdrawal. Please note that withdrawal of your consent to receive Communications electronically will not apply to Communications electronically provided by us to you before the withdrawal of your consent becomes effective.
              </Text>

              <Text style={[styles.regularText, styles.blueText]}>What do I need to know about third-party websites?</Text>
              <Text style={styles.regularText}>
                The Services may contain links or connections to third-party websites or services that are not owned or operated by us or our third-party service providers or licensors. We provide such links and connections for your reference only. We do not control such third-party websites or services and are not responsible for their availability or content. Our inclusion of such links and connections does not imply our endorsement of such third-party websites or services or any association with their owners or operators. We assume no liability whatsoever for any such third-party websites or services or any content, features, products, or practices of such third-party websites or services. Your access and use of such third-party websites and services is subject to applicable third- party terms and conditions and privacy policies. We encourage you to read the terms and conditions and privacy policy of each third-party website or service that you visit or utilize.
              </Text>
            </ScrollView>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.contentContainer, styles.noTopBorder, styles.noBottomBorder]}>
              <Text style={[styles.regularText, styles.blueText]}>What if I want to stop using the Services?</Text>
              <Text style={styles.regularText}>
                You may stop using the Services, close your Thrive Account, and cancel these Terms at any time by contacting us at <Text style={styles.blueInnerText}>help@thrivesavings.com</Text> and providing sufficient information for us to verify your identity. Notwithstanding the foregoing, if there are any pending transactions relating to your Savings when we receive your termination notice, we will close your Thrive Account promptly after such transactions are completed. Your termination of these Terms will not affect any of our rights or your obligations arising under these Terms prior to termination.
                {"\n\n"}
                Upon the closure of your Thrive Account, we will transfer the funds in your Savings, if any, to your Linked Bank Account. If your Linked Bank Account is closed or we are otherwise unable to transfer the funds in your Savings to your linked Bank Account, we will send you a cheque for the amount of the funds to you at your Canadian street address in our records.
                {"\n\n"}
                If you do not use the Services for a certain period of time, applicable law may require us to report the funds in your Savings as unclaimed property. If this occurs, we may try to locate you at the Canadian address shown in our records. If we are unable to locate you, we may be required to deliver any funds in your Savings to the applicable province as unclaimed property. The specified period of time to report and deliver funds to a province varies by province, but usually ranges between two and five years.
              </Text>

              <Text style={[styles.regularText, styles.blueText]}>What about my privacy?</Text>
              <Text style={styles.regularText}>
                Thrive takes the privacy of its users very seriously. You understand that by using the Services, you consent to the collection, use, storage, and disclosure of your information as set forth in these Terms and our Privacy Policy. <Text style={styles.blueInnerText}>Please read our Privacy Policy here</Text>.
                {"\n\n"}
                You retain ownership of Your Information, including all rights therein and relating thereto.
              </Text>

              <Text style={[styles.regularText, styles.blueText]}>What about Anti-Money Laundering (“AML”) Rules? </Text>
              <Text style={styles.regularText}>
                You represent and warrant that you will abide by all applicable AML rules, including, but not limited to the Proceeds of Crime (Money Laundering) and Terrorist Financing Act (Canada) and that you will, upon request, provide Thrive with any information or documents that Thrive may require in order to comply with applicable regulatory requirements, including the AML rules and other applicable requirements.
              </Text>

              <Text style={[styles.regularText, styles.blueText]}>What else do I need to know about the Services?</Text>
              <Text style={styles.regularText}>
                <Text style={styles.boldText}>ADDITIONAL TERMS:</Text>{"\n"}
                In conjunction with your access or use of the Services, you may be subject to additional terms, rules, policies, and conditions that are posted on the Website or the Application, including, but not limited to, terms and conditions for our referral or rewards programs (the “Additional Terms”), which are hereby incorporated by reference into these Terms. In the event of a conflict between any Additional Terms and these Terms, these Terms will control.
                {"\n\n"}
                <Text style={styles.boldText}>WARRANTIES</Text>{"\n"}
                Thrive represents and warrants that it will provide the Services described herein in a professional manner consistent with general industry standards. Your exclusive remedy for a breach of this warranty shall be as provided below.
                {"\n\n"}
                SOME PROVINCES AND TERRITORIES DO NOT ALLOW FOR THE EXCLUSION OF WARRANTIES. IN THESE PROVINCES AND TERRITORIES, YOU HAVE ONLY THE WARRANTIES THAT ARE EXPRESSLY REQUIRED TO BE PROVIDED IN ACCORDANCE WITH APPLICABLE LAW.
                {"\n\n"}
                IN ALL OTHER PROVINCES AND TERRITORIES, EXCEPT AS EXPRESSLY PROVIDED HEREIN, THE THRIVE PROGRAM IS PROVIDED TO YOU ON AN "AS IS" BASIS WITHOUT ANY WARRANTY WHATSOEVER AND THRIVE EXPRESSLY DISCLAIMS ALL OTHER REPRESENTATIONS, WARRANTIES, AND CONDITIONS, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY REPRESENTATION, WARRANTY OR CONDITION OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NONINFRINGEMENT, OR ANY WARRANTY ARISING FROM A COURSE OF DEALING, PERFORMANCE, OR TRADE USAGE. YOUR SOLE AND EXCLUSIVE REMEDY, AND THRIVE’S SOLE OBLIGATION TO YOU OR ANY THIRD PARTY FOR ANY CLAIM ARISING OUT OF YOUR USE OF THE THRIVE PROGRAM, IS THAT YOU ARE FREE TO DISCONTINUE YOUR USE OF THE THRIVE PROGRAM AT ANY TIME.
                {"\n\n"}
                WITHOUT LIMITING THE FOREGOING, WE AND OUR THIRD-PARTY SERVICE PROVIDERS MAKE NO WARRANTY THAT (A) THE SERVICES WILL MEET YOUR REQUIREMENTS, (B) THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (C) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICES WILL BE ACCURATE OR RELIABLE, (D) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICES WILL MEET YOUR EXPECTATIONS, OR (E) ANY ERRORS IN THE SERVICES WILL BE CORRECTED. NO ORAL OR WRITTEN INFORMATION OR ADVICE OBTAINED BY YOU FROM US OR OUR THIRD-PARTY SERVICE PROVIDERS THROUGH OR FROM THE SERVICES WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THESE TERMS.
                {"\n\n"}
                ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE SERVICES IS DONE AT YOUR OWN DISCRETION AND RISK, AND YOU ARE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL.
                {"\n\n"}
                <Text style={styles.boldText}>LIMITATION OF LIABILITY:</Text>{"\n"}
                SOME PROVINCES AND TERRITORIES DO NOT PROVIDE EXCLUSION OF LIMITATION OF LIABILITY FOR ALL TYPES OF DAMAGES. IN THOSE PROVINCES, THRIVE WILL ONLY BE LIABLE TO YOU FOR DAMAGES THAT WE ARE EXPRESSLY REQUIRED TO BE LIABLE TO YOU UNDER APPLICABLE LAW. IN ANY OTHER CASE, THRIVE SHALL NOT BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL CONSEQUENTIAL OR EXEMPLARY DAMAGES WHICH MAY BE INCURRED BY YOU IN CONNECTION WITH YOUR USE OF THE THRIVE PROGRAM, HOWEVER CAUSED AND UNDER ANY THEORY OF LIABILITY INCLUDING, BUT NOT LIMITED TO, ANY LOSS OF PROFIT, LOST OPPORTUNITIES, LOSS OF DATA SUFFERED, OR OTHER INTANGIBLE LOSS.
                {"\n\n"}
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU AGREE THAT THRIVE, ITS AFFILIATES, AND ITS AND THEIR RESPECTIVE EMPLOYEES, OFFICERS, DIRECTORS, AGENTS, AND THIRD-PARTY SERVICE PROVIDERS WILL NOT BE LIABLE TO YOU OR ANY THIRD PARTY FOR (A) THE PERFORMANCE OF THE SERVICES OR THE INABILITY TO USE THE SERVICES; (B) ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, WHETHER BASED IN CONTRACT, TORT, OR OTHERWISE, INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, EVEN IF SUCH PERSONS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, WHICH ARISE OUT OF OR ARE IN ANY WAY CONNECTED WITH THESE TERMS, THE SERVICES, OR CONTENT; (C) ANY AMOUNT, IN THE AGGREGATE, IN EXCESS OF THE GREATER OF $100 OR THE AMOUNT TRANSFERRED FROM YOUR LINKED BANK ACCOUNT TO YOUR SAVINGS VIA THE SERVICES; OR (D) ANY EVENT BEYOND OUR REASONABLE CONTROL. SOME PROVINCES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO THE ABOVE LIMITATION AND EXCLUSIONS MAY NOT APPLY TO YOU.
                {"\n\n"}
                <Text style={styles.boldText}>CONNECTIVITY:</Text>{"\n"}
                THRIVE SHALL NOT BE LIABLE FOR DELAYS, INTERRUPTIONS, SERVICE FAILURES, OR OTHER PROBLEMS INHERENT IN USE OF THE INTERNET, ELECTRONIC COMMUNICATIONS, TELECOMMUNICATIONS NETWORKS OR OTHER SYSTEMS OR NETWORKS OUTSIDE THE REASONABLE CONTROL OF THRIVE.
                {"\n\n"}
                <Text style={styles.boldText}>INDEMNITY:</Text>{"\n"}
                At our request, you agree to defend, indemnify, and hold harmless Thrive, its affiliates, and its and their respective employees, officers, directors, agents, and third- party service providers from and against any and all claims, suits, liabilities, damages (actual and consequential), losses, fines, penalties, costs, and expenses (including reasonable lawyer’s fees) arising from or in any way related to any third-party claims relating to your use of the Services, violation of these Terms, applicable law or any third-party rights, or your fraud or willful misconduct. Such indemnified parties reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you, in which event you will cooperate in asserting any available defenses.
                {"\n\n"}
                <Text style={styles.boldText}>ASSIGNMENT:</Text>{"\n"}
                You may not transfer, assign, or delegate these Terms or your rights or obligations hereunder or Thrive Account in any way (by operation of law or otherwise) without our prior written consent. To the extent permitted by applicable law, we may transfer, assign, or delegate these Terms and our rights and obligations hereunder without your consent.
                {"\n\n"}
                <Text style={styles.boldText}>THIRD-PARTY BENEFICIARY:</Text>{"\n"}
                You agree that our third-party services providers are third- party beneficiaries of the applicable provisions of these Terms, with all rights to enforce such provisions as if such service providers were a party to these Terms.
                {"\n\n"}
                <Text style={styles.boldText}>GOVERNING LAW:</Text>{"\n"}
                This Agreement shall be governed by the laws of the province of Ontario and the federal laws applicable therein without regard to the principles of conflict of laws. Any dispute with Thrive, or its officers, directors, employees, agents or affiliates, arising under or in relation to these Terms of Service shall be resolved exclusively through the courts within the city of Toronto, Ontario, except with respect to imminent harm requiring temporary or preliminary injunctive relief in which case Thrive may seek such relief in any court with jurisdiction over the parties. You understand that, in return for agreement to this provision, Thrive is able to offer the Service at the terms designated, and that your assent to this provision is an indispensable consideration to these Terms of Service.
                {"\n\n"}
                <Text style={styles.boldText}>MISCELLANEOUS:</Text>{"\n"}
                You will be responsible for paying, withholding, filing, and reporting all taxes, duties, and other governmental assessments associated with your activity in connection with the Services, provided that we may, in our sole discretion, do any of the foregoing on your behalf or for ourselves. The failure of either you or us to exercise, in any way, any right herein will not be deemed a waiver of any further rights hereunder. If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated, to the minimum extent necessary, so that these Terms will otherwise remain in full force and effect and enforceable. These Terms, together with our Privacy Policy, constitute the entire and sole agreement between you and us with respect to the Services and supersedes all prior understandings, arrangements, or agreements, whether written or oral, regarding the Services. You hereby acknowledge and agree that you are not an employee, agent, partner, or joint venture of Thrive, and you do not have any authority of any kind to bind Thrive in any respect whatsoever.
              </Text>

              <Text style={[styles.regularText, styles.blueText]}>Will Thrive ever change these Terms or the Services?</Text>
              <Text style={styles.regularText}>
                We may add to or terminate any of the Services or amend these Terms at any time, in our sole discretion, without providing notice to you, subject to applicable law. We reserve the right, subject to applicable law, to deliver to you any notice of changes to existing terms or the addition of new terms by posting an updated version of these Terms on the Website and the Application or delivering notice thereof to you electronically. You are free to decide whether or not to accept a revised version of these Terms, but accepting these Terms, as revised, is required for you to continue accessing or using the Services. If you do not agree to these Terms or any revised version of these Terms, your sole recourse is to terminate your access or use of the Services. Except as otherwise expressly stated by us, your access and use of the Services are subject to, and constitute your acceptance of, the version of these Terms in effect at the time of your access or use.
                {"\n\n"}
                Thrive reserves the right to change any process or service provided under the Terms or to comply with all applicable local, provincial, national and foreign laws in connection with its delivery of the Services, including those laws related to financial services, data privacy, communications, and the transmission of technical or personal data.
              </Text>
            </ScrollView>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.contentContainer, styles.noTopBorder]}>
              <Text style={[styles.regularText, styles.blueText]}>Apple App Store Additional License Terms</Text>
              <Text style={styles.regularText}>If the Application is provided to you through the Apple Inc. (Apple Inc. together with all of its affiliates, “Apple”) App Store, the following terms and conditions apply to you in addition to all the other terms and conditions of these Terms:</Text>

              <View style={styles.listContainer}>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(a) </Text>
                  <Text style={styles.regularText}>
                    The parties acknowledge these Terms are concluded between the parties, and not with Apple. The responsibility for the Application and content thereof is governed by these Terms.
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(b) </Text>
                  <Text style={styles.regularText}>
                    Notwithstanding anything to the contrary hereunder, you may use the Application only on an iPhone or iPod touch that you own or control.
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(c) </Text>
                  <Text style={styles.regularText}>
                    You and we acknowledge that Apple has no obligation to furnish any maintenance or support services with respect to the Application.
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(d) </Text>
                  <Text style={styles.regularText}>
                    In the event of any failure of the Application to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price for the Application (if any) to you. Except for the foregoing, to the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the Application, and any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be governed by these Terms.
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(e) </Text>
                  <Text style={styles.regularText}>
                    Any claim in connection with the Application related to product liability, a failure to conform to applicable legal or regulatory requirements, or claims under consumer protection or similar legislation is governed by these Terms, and Apple is not responsible for such claim.
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(f) </Text>
                  <Text style={styles.regularText}>
                    Any third party claim that the Application or your possession and use of the Application infringes that third party’s intellectual property rights will be governed by these Terms, and Apple will not be responsible for the investigation, defense, settlement and discharge of such intellectual property infringement claim.
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(g) </Text>
                  <Text style={styles.regularText}>
                    You represent and warrant that you are not: (i) located in any country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country; or (ii) listed on any U.S. Government list of prohibited or restricted parties.
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(h) </Text>
                  <Text style={styles.regularText}>
                    You represent and warrant that you are not: (i) located in any country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country; or (ii) listed on any U.S. Government list of prohibited or restricted parties. (h) You may contact us in writing regarding any notices, questions, complaints or claims with respect to the Application.
                    {"\n\n"}
                    Name: Thrive Savings Inc, Attn: Privacy Officer
                    {"\n\n"}
                    Address: 10 Dundas Street, 6th Floor, Toronto ON M5B 2G9 Canada
                    {"\n\n"}
                    Telephone Number: 1-833-7THRIVE
                    {"\n\n"}
                    Email Address: <Text style={styles.blueInnerText}>help@thrivesavings.com</Text>
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(i) </Text>
                  <Text style={styles.regularText}>
                    Apple is a third party beneficiary to these Terms and may enforce these Terms of Use against you.
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(j) </Text>
                  <Text style={styles.regularText}>
                    If any of the terms and conditions in these Terms are inconsistent or in conflict with Apple’s applicable instructions for Minimum Terms for Developer’s End User License Agreement (the current version as of the date these Terms was last updated is located at: http://www.apple.com/legal/internet-services/itunes/appstore/dev/minterms/) or the App Store Terms of Service (the current version as of the date these Terms was last updated is located at: http://www.apple.com/legal/internet-services/itunes/ca/terms.html), the terms and conditions of Apple’s instructions for Minimum Terms for Developer’s End User License Agreement or App Store Terms of Service, as applicable, will apply to the extent of such inconsistency or conflict.
                  </Text>
                </View>
              </View>

              <Text style={[styles.regularText, styles.blueText]}>Google Play Additional License Terms </Text>
              <Text style={styles.regularText}>If the Application is provided to you through the Google Inc. (Google Inc. together with all of its affiliates, “Google”) Google Play, the following terms and conditions apply to you in addition to all the other terms and conditions of these Terms:</Text>

              <View style={styles.listContainer}>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(a) </Text>
                  <Text style={styles.regularText}>
                    You acknowledge that Google is not responsible for providing support services for the Application.
                  </Text>
                </View>
                <View style={styles.listRow}>
                  <Text style={styles.regularText}>(b) </Text>
                  <Text style={styles.regularText}>
                    If any of the terms and conditions in these Terms are inconsistent or in conflict with the Google Play Developer Distribution Agreement (the current version as of the date these Terms was last updated is located at https://play.google.com/about/developer-distribution-agreement.html), the terms and conditions of Google’s Google Play Developer Distribution Agreement will apply to the extent of such inconsistency or conflict.
                  </Text>
                </View>
              </View>

              <Text style={[styles.regularText, styles.blueText]}>How can I contact Thrive?</Text>
              <Text style={styles.regularText}>
                If you have any questions, comments, or concerns regarding these Terms or the Services, please contact us at <Text style={styles.blueInnerText}>help@thrivesavings.com</Text>, or Thrive Savings Inc., 10 Dundas Street East, 6th Floor, Toronto, ON M5B 2G9.
                {"\n\n"}
                <Text style={styles.boldText}>
                  CLIENT ACKNOWLEDGEMENT: YOU HEREBY ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD THESE TERMS OF SERVICE AND THE VERSAPAY PRE-AUTHORIZED DEBIT AGREEMENT, AND THAT YOU HAVE HAD AN OPPORTUNITY TO SEEK TAX, LEGAL AND OTHER PROFESSIONAL ADVICE. YOU AGREE TO ENTER INTO THE AGREEMENTS AND AGREE TO BE BOUND BY THEIR TERMS AND CONDITIONS.
                </Text>
              </Text>

            </ScrollView>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

export default TOS;
