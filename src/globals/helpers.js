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

export { getDollarString, getSplitDollarStrings };
