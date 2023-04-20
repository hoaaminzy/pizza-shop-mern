import React, { useEffect } from "react";
import AllPizza from "../pizza-data";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../components/Pizza";
import { getAllPizzas } from "../actions/pizzaAction";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../components/Filter";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <Container>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error while fetching pizzas {error}</h1>
        ) : (
          <Row>
            <Filters />
            {pizzas?.map((pizza) => (
              <Col md={4} key={pizza.name}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
