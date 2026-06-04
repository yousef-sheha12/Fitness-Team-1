

export const calcDiscountedPrice = (price, discount) => {
  if (discount <= 0) return parseFloat(price);
  const discountedPrice =
    parseFloat(price) - (parseFloat(price) * discount) / 100;
  return parseFloat(discountedPrice.toFixed(2));
};

export const roundRating = (rating) => {
  return Math.round(rating * 2) / 2;
};
