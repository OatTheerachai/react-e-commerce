import React from "react";
import "../assets/css/screens/Product.css";
import { Container, Row, Col } from "react-bootstrap";
import CardItem from "../components/CardItem";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  return (
    <div className="Product pt-3">
      <Container className="best-seller">
        <h3>Best Seller</h3>
        <Row className="pt-2 pb-4">
          <Col md={3} className="mt-2 mb-2">
            <CardItem />
          </Col>
          <Col md={3} className="mt-2 mb-2">
            <CardItem />
          </Col>
          <Col md={3} className="mt-2 mb-2">
            <CardItem />
          </Col>
          <Col md={3} className="mt-2 mb-2">
            <CardItem />
          </Col>
          <Col md={3} className="mt-2 mb-2">
            <CardItem />
          </Col>
          <Col md={3} className="mt-2 mb-2">
            <CardItem />
          </Col>{" "}
          <Col md={3} className="mt-2 mb-2">
            <CardItem />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
