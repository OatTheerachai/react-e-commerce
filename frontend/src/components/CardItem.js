import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaShoppingBasket, FaRegHeart } from "react-icons/fa";
import "../assets/css/components/Card.css";

const CardItem = () => {
  return (
    <Card className="card-product">
      <Card.Img
        className="card-img img-fluid"
        variant="top"
        src="https://www.dolce-gusto.co.th/media/magpleasure/mpblog/post_thumbnail_file/1/4/cache/5/119bdf99710d9a86013f24c82ab9b2da/140f6969d5213fd0ece03148e62e461e.jpg"
      />
      <div className="wishlist">
        <FaRegHeart color="#000" size={15} />
      </div>
      <div className="add_cart">
        <FaShoppingBasket color="#fff" size={20} />
      </div>
      <Card.Body className="card-content">
        <Card.Title className="product-name">item 1</Card.Title>
        <Card.Text className="w-100">
          <Row className="justify-content-center aaa">
            <Col md={12} className="size-product p-0 m-0">
              <span>S</span>
              <span>M</span>
              <span>L</span>
            </Col>
          </Row>
        </Card.Text>
        <Card.Text className="price">100 Baht</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
