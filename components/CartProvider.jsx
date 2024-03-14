"use client";

import { CartProvider as CProvider } from "use-shopping-cart";

const CartProvider = ({ children }) => {
  return (
    <CProvider
      mode="payemnt"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
      successUrl="success"
      cancelUrl="error"
      language="en-UK"
      currency="NGN"
      billingAddressCollection={true}
      shouldPersists={true}>
      {children}
    </CProvider>
  );
};


export default CartProvider;