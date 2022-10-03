import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import "../assets/css/components/Signin.Modal.css";
import { useDispatch } from "react-redux";

import { login } from "../actions/authAction";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // const { loading, error } = useSelector((state) => state.status);
  return (
    <>
      <Modal
        show={props.show}
        onHide={() => props.setShow(false)}
        className="Modal__signin"
      >
        <Modal.Body className="body__signin">
          <Container fluid>
            <Row>
              <Col lg={12} className="text-center title">
                เข้าสู่ระบบ
              </Col>
              <Col lg={12} className="text-center title mt-4">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
              <Col lg={12} className="text-center title mt-3">
                <input
                  type="password"
                  placeholder="รหัสผ่าน"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
              <Col lg={12} className="text-center title mt-3">
                <Button
                  className="btn btn-danger"
                  disabled={email == "" || password == "" ? true : false}
                  onClick={() => dispatch(login(email, password))}
                >
                  เข้าสู่ระบบ
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Signin;
