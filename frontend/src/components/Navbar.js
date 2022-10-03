import React, { useState } from "react";
import "../assets/css/components/Navbar.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaShoppingCart,
  FaSignInAlt,
  FaMailBulk,
  FaPhoneAlt,
  FaSearch,
  FaUserAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Outlet, NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.jpg";

// component modal signin
import Signin from "./Sign_in";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className="utility-nav d-none d-md-block">
        <Container>
          <Row className="">
            <Col md={6} className="d-flex align-items-center">
              <span className="small">
                <FaMailBulk className="mr-1" /> logo@example.com |
                <FaPhoneAlt className="ml-1" /> +99-999999
              </span>
            </Col>
            <Col
              md={6}
              className="d-flex align-items-center justify-content-end"
            >
              <span className="small">
                Free shipping on total of $99 of all products
              </span>
            </Col>
          </Row>
        </Container>
      </div>

      <nav className="navbar-Ecom">
        <Container>
          <Row className="align-items-start justify-content-between">
            <Col lg={1} md={1} xs={3} className="box-item">
              <img src={Logo} alt="" className="img-fluid" />
            </Col>
            <Col lg={7} md={7} xs={0} className="box-item d-none d-md-block">
              <div className="input-group mb-3">
                <input type="text" className="form-control" />
                <div className="input-group-append">
                  <button className="btn btn-primary">
                    <FaSearch size={20} />
                  </button>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4} xs={7} className="box-cart">
              <NavLink to="order" className="btn btn-link cart">
                <FaShoppingCart size={20} />
                <span className="ml-2 badge badge-danger">100</span>
              </NavLink>
              {user === null ? (
                <button
                  to="home"
                  className="btn btn-primary"
                  onClick={() => setShow(true)}
                >
                  sign in
                  <FaSignInAlt className="ml-2" />
                </button>
              ) : (
                <button
                  to="home"
                  className="btn btn-danger"
                  onClick={() => setShow(true)}
                >
                  sign out
                  <FaSignOutAlt className="ml-2" />
                </button>
              )}
            </Col>
          </Row>
        </Container>
      </nav>
      <nav className="navbar-menu">
        <Container>
          <Row className="justify-content-center align-item-center">
            <Col lg={8} className="list-menu">
              <NavLink
                to="home"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                home
              </NavLink>
              <NavLink to="product" className="">
                product
              </NavLink>
              <NavLink to="order" className="">
                order
              </NavLink>
              <NavLink to="contact" className="">
                about
              </NavLink>
            </Col>
          </Row>
        </Container>
      </nav>
      <main>
        {/* route */}
        <Outlet />
      </main>
      {/*  component modal signin */}
      <Signin show={show} setShow={setShow} />
    </>
  );
};

export default Navbar;
