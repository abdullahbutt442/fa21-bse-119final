import Stripe from 'stripe';
const stripe = new Stripe('your-stripe-secret-key', { apiVersion: '2020-08-27' });

app.post('/create-checkout-session', async (_req: any, res: { json: (arg0: { id: any; }) => void; }) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Product Name',
          },
          unit_amount: 2000, // in cents
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.BASE_URL}/success`,
    cancel_url: `${process.env.BASE_URL}/cancel`,
  });

  res.json({ id: session.id });
});
