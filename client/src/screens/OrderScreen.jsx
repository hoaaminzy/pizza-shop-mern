import React, { useEffect } from "react";
import { getUserOrder } from "../actions/orderAction";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
const OrderScreen = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { loading, error, orders } = orderState;
  useEffect(() => {
    dispatch(getUserOrder());
  }, [dispatch]);
  return (
    <>
      <h1 className="text-center">Your Order</h1>
      {loading && <h1>Loading...</h1>}
      {error && { error }}
      {orders &&
        orders.map((order) => (
          <div className="container border p-4 bg-light">
            <Row>
              <Col md={4}>
                {order.orderItems.map((item) => (
                  <div>
                    <h6>
                      {item.name}[{item.varient}] * {item.quantity} ={" "}
                      {item.price}
                    </h6>
                  </div>
                ))}
              </Col>
              <Col md={3}>
                <h4>Address :</h4>
                <h6>Street : {order.shippingAddress.street}</h6>
                <h6>City : {order.shippingAddress.city}</h6>
                <h6>PinCode : {order.shippingAddress.picode}</h6>
                <h6>Countery : {order.shippingAddress.country}</h6>
              </Col>
              <Col md={5}>
                <h4>Order Info :</h4>
                <h6>Order Amount : {order.orderAmount}</h6>
                <h6>Transection id : {order.transectionId}</h6>
                <h6>Order id : {order._id}</h6>
              </Col>
            </Row>
          </div>
        ))}
    </>
  );
};

export default OrderScreen;
