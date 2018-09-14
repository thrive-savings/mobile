const getDollarString = (amount, rounded = false) => {
  let amountInDollars = amount / 100;
  amountInDollars = !rounded ? amountInDollars.toFixed(2) : amountInDollars;
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

export { getDollarString, getSplitDollarStrings, convertWeeks };
