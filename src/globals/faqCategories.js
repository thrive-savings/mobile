const FAQ_CATEGORIES = [
  {
    icon: require("../../assets/ThumbnailLogo/Large/thumbnail.png"),
    name: "USING THRIVE",
    questions: [
      {
        question: "What is Thrive Savings?",
        answer: "Thrive Savings is a savings and goal-setting app for employers to offer their employees. "
      },
      {
        question: "How does Thrive Savings make money?",
        answer: "Your employer or affiliated organization may pay Thrive a monthly subscription fee on your behalf to use the Thrive wellness tool. From time to time, we may present you with special offers or discounts from our partner providers who may pay Thrive a fee."
      },
      {
        question: "Who can use Thrive?",
        answer: "Thrive is available for almost everyone! You’ll need to be a resident of Canada, at least 18 years of age, with an existing chequing account at a Canadian bank or credit union. Unfortunately, we are currently unavailable in Quebec, but stay tuned! US residents will be able to join Thrive later this year. "
      },
      {
        question: "How do I access my Thrive account?",
        answer: "Easy. Open the Thrive Savings App to see your balance or send ThriveBot a text message with the ‘Balance’ command. Text ThriveBot at 647-694-1740."
      },
      {
        question: "Do I need regular income to save with Thrive?",
        answer: "Not at all. Many of our users are freelancers or part-time workers. We can put small amounts aside on a regular basis for anyone, regardless of their job status."
      },
      {
        question: "What is Thrive Fixed vs Thrive Flex?",
        answer: "Thrive offers you 2 options to save depending on your job type and earning profile:\n\n1. Thrive Flex is purely automated. Let us do the heavy-lifting and save for you. We’ll find small amounts of disposable income, and a couple times a week will auto-transfer this to your savings account.\n\n2. Thrive Fixed is manual. You’ll set a recurring and fixed deposit based on what you want to save. "
      },
      {
        question: "How much does Thrive cost to use?",
        answer: "How does free sound? Yep, free. Thrive is a perk that is offered to you by your employer. Withdrawals are free and unlimited too - but be sure to check if your bank charges you transaction fees on transfers."
      },
      {
        question: "What are the full list of commands that I can send to ThriveBot?",
        answer: "Here they are. Missing a command you’d like to see? Text in with any feedback.\n\nBalance → Lets you know the balance in your savings\n\nWithdraw →  Just tell us how much and the money will be back into your chequing\n   - Example: Withdraw 10.00\n\nSave →  Do one-off savings transfer to your savings. Just tell us how much!\n   - Example: Save 10.00\n\nPause →  Pauses your automated deposits to your savings. Just tell us how long!\n   - Example: Pause 1 week\n\nStart →  Restarts your automated savings program. Welcome back!\n\nInvite →  Invites a friend to save with Thrive. You’ll get VIP status with us and them!"
      },
      {
        question: "Why do I automatically have a Rainy Day Fund in my Savings Goals?",
        answer: "When you join Thrive, you’ll be encouraged to set a few meaningful goals to save for that matter to you. As a default, all Thrive users have a rainy day fund. This is in recognition that 50% of our users live month-to-month. We want to build in some wiggle room for unforeseen events that can cause a huge impact on finances and well-being. We’ll get you started with some emergency savings to build up your savings reserve and reduce your monthly stress."
      }
    ]
  },
  {
    icon: require("../../assets/Icons/PiggyBank/piggybank.png"),
    name: "MONEY MANAGEMENT",
    questions: [
      {
        question: "Do I get interest on my money?",
        answer: "Not yet. We are in the process of adding in this feature plus loads more. "
      },
      {
        question: "How can I withdraw my money?",
        answer: "To withdraw your funds, text ThriveBot with the word ‘Withdraw’ and the amount you would like to withdraw. Your funds will arrive in your chequing account in 1 business day."
      },
      {
        question: "Can you guarantee that you will not take me into overdraft?",
        answer: "You are in good hands. We are confident in our programming, our math skills and in-house analytics and have put a number of additional safeguards in place. "
      },
      {
        question: "Can I save if I am in overdraft?",
        answer: "Unfortunately not. We’ll avoid saving for you if you’re in negative balance."
      },
      {
        question: "When will my first automated savings transfer take place?",
        answer: "Your first automatic saving transfer will take place 2 to 4 business days after you set up your savings preferences during onboarding."
      },
      {
        question: "How much money does Thrive save for me?",
        answer: "Every person is different, and your savings amount will be custom to you. The minimum amount we withdraw is $7, and we never take out money if your account balance is too low. Rest assured, we have your best interests in mind."
      },
      {
        question: "What should I do with the money I save?",
        answer: "What do you want to do? You can use Thrive to help save for a trip, to pay bills, keep a rainy day fund, or pay for a health expense. Some of our customers are savings for bigger ticket financial items such as their mortgage, house downpayment or new car. Your employer also has the option to make a contribution towards your personal goals."
      }
    ]
  },
  {
    icon: require("../../assets/Icons/SafeBox/safebox.png"),
    name: "SAFETY",
    questions: [
      {
        question: "Where is my money held?",
        answer: "Your funds are held at a Canadian Schedule I Bank and are CDIC insured. Remember - the only way to put money in or take money out is via Thrive."
      },
      {
        question: "Do you store my bank login details?",
        answer: "No, we never store your bank login details. Your login information is tokenized and your personal information is anonymized, encrypted and securely stored."
      },
      {
        question: "Is my data safe?",
        answer: "Safe and secure. We employ 256-bit bank-level security to keep your information safe. We also use Secure Socket Layer (SSL) to help ensure all information is protected. Our technology service providers have equally tough physical, electronic, and procedural safeguards to protect your data."
      },
      {
        question: "Do you sell my personal information?",
        answer: "Security is our priority. We will never sell, publish or share your contact information or any identifiable personal information to third parties."
      },
      {
        question: "What information are you sharing with my employer or affiliated organization",
        answer: "Thrive never shares details about your personal goal setting, spending, income, or lifestyle. Any data provided to your employer or affiliated organization will be anonymized and aggregated."
      }
    ]
  },
  {
    icon: require("../../assets/Icons/ThriveBotSmaller/thriveBot.png"),
    name: "MY ACCOUNT",
    questions: [
      {
        question: "I am no longer affiliated with my employer/organization. Can I still save with Thrive?",
        answer: "Absolutely. Your savings are your savings, and you can take them with you regardless of who you work for or where you work. Just let us know when you move employers and we’ll set it all up for you.  As a bonus, if you introduce us to your new company and they join Thrive, we’ll add a cash bonus to your favourite savings goal as a thank-you! "
      },
      {
        question: "How do I change or remove my linked bank account?",
        answer: "To change or remove your linked bank account, send us a request through the Settings menu, or contact us directly through phone or email."
      },
      {
        question: "How do I pause automatic savings?",
        answer: "Take a pause from saving at any time. Simply text ThriveBot and the word 'Pause' and the length of time. Don’t forget, you can always save manually by typing ‘Save’ and amount of money you want to save. Let us know when you are ready to automate again - text ‘Start’ to ThriveBot."
      },
      {
        question: "How do I cancel my Thrive account?",
        answer: "We’d be sorry to see you go. You can cancel at any time by sending us an email to help@thrivesavings.com. Any pending transactions such as a withdrawal or deposit will have to be settled first. Once settled, we’ll send back all your money to your linked chequing account."
      }
    ]
  }
];

export default FAQ_CATEGORIES;
