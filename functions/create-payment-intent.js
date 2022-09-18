// Node.js land 🌄
// http://localhost:8888/.netlify/functions/create-payment-intent
require("dotenv").config();
// Connect to stripe
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  // POST request, accessing trough url bar wont work therefore
  if (event.body) {
    // cart here just for testing purpose. If setting up a real stripe payment, iterate over cart, get ids, connect to API/backend and retrieve the prices from there
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);

    const calculateOrderAmount = () => {
      // Here we would connect to our own back
      // Important to calculate order total on the server to prevent people from directly manipulating the amount on the client
      return shipping_fee + total_amount;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "usd",
      });
      // The createPaymentIntent return
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    }
  }
  // Not for production
  return {
    statusCode: 200,
    body: "create payment intent",
  };
};
