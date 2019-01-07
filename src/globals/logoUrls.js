const PUBLIC_S3_BUCKET =
  "https://s3.ca-central-1.amazonaws.com/public-resources-thrive-ca-central-1";

export const companyLogoUrl = companyName => {
  return `${PUBLIC_S3_BUCKET}/company_logos/${companyName}.png`;
};

export const bankLogoUrl = (bankName, isSquare) => {
  return `${PUBLIC_S3_BUCKET}/bank_logos/${bankName}/${isSquare
    ? "square"
    : "original"}/logo.png`;
};
