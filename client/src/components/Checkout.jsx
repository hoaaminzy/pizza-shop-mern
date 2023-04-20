import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderAction";
const Checkout = ({ subtotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, success, error } = orderState;
  const dispatch = useDispatch();
  const tokenHandle = (token) => {
    dispatch(placeOrder(token, subtotal));
    console.log(token);
  };
  return (
    <>
      {loading && <h1>Loading....</h1>}
      {error && { error }}
      {success && <h1>Successfully</h1>}
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandle}
        stripeKey="pk_test_51MecROJ6Ek87DARiGhJTYqyE250GbDI1tsc8Q4U1ytwv4UGWwT4nE29wxDnsWO4OHTuUhdFHHFG8gro5xGwxnEkV008cEMjyaY"
        currency="INR"
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
    </>
  );
};

export default Checkout;
