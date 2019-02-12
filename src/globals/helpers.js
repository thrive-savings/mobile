const getDollarString = (amount, rounded = false) => {
  let amountInDollars = amount / 100;
  amountInDollars = !rounded
    ? amountInDollars.toFixed(2)
    : amountInDollars.toFixed(0);
  amountInDollars =
    "$" +
    amountInDollars.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

  return amountInDollars;
};

const getSplitDollarStrings = amount => {
  let amountInDollars = getDollarString(amount);
  const beforeDot = amountInDollars.substring(0, amountInDollars.length - 2);
  const afterDot = amountInDollars.substring(amountInDollars.length - 2);

  return { beforeDot, afterDot };
};

const convertWeeks = weeks => {
  const WEEKS_IN_YEAR = 48;
  const WEEKS_IN_MONTH = 4;

  let leftOver = weeks;
  let formatted = "";

  const years = Math.floor(leftOver / WEEKS_IN_YEAR);
  if (years) {
    formatted += `${years} year${years > 1 ? "s" : ""} `;
    leftOver = leftOver % WEEKS_IN_YEAR;
  }

  const months = Math.floor(leftOver / WEEKS_IN_MONTH);
  if (months) {
    formatted += `${months} month${months > 1 ? "s" : ""} `;
    leftOver = leftOver % WEEKS_IN_MONTH;
  }

  if (leftOver === weeks) {
    formatted = `${leftOver} week${leftOver > 1 ? "s" : ""}`;
  }

  return formatted;
};

const hiddenCardNumber = number => {
  const numLenth = number.length;
  const last4 = number.substring(numLenth - 4);
  const tillLast4 = number.substring(0, numLenth - 4);

  return numLenth < 5 ? number : `${tillLast4.replace(/./g, "*")}${last4}`;
};

export { getDollarString, getSplitDollarStrings, convertWeeks, hiddenCardNumber };
