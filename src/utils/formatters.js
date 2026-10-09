/**
 * Formats a number into Indian Rupee (INR) currency format.
 * @param {number} amount
 * @returns {string} e.g. "₹549" or "₹1,899"
 */
export const formatINR = (amount) => {
  if (typeof amount !== 'number' || isNaN(amount)) return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};
