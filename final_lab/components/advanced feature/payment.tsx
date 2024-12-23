import Stripe from 'react-native-stripe-sdk';

const stripe = new Stripe('your-stripe-key');

export const createEscrowPayment = async (amount: number, currency: string) => {
  return await stripe.paymentRequestWithCardForm({
    amount,
    currency,
    description: 'Payment held in escrow',
  });
};
