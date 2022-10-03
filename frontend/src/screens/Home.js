import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/screens/Home.css";
import Coffee from "../assets/img/img1.png";
import {
  FaStar,
  FaGlobe,
  FaMoneyCheck,
  FaHeadphonesAlt,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import Footer from "../components/Footer";

// module slide
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Autoplay } from "swiper";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";

const Home = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => console.log(state.cart));

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="overflow-hidden">
      {/* section 1 */}
      <section className="p-0 m-0 w-100 one">
        <Container>
          <Row>
            <Col className="gift-box">
              <div className="title">
                <h1>EVERYDAY IS A GIFFING DAY</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore quod, odit id corporis facilis error libero vero sed
                  eos blanditiis enim corrupti. Perferendis ab accusantium,
                  saepe itaque dolores laboriosam adipisci!
                </p>
                <button>get start</button>
              </div>
            </Col>
            <Col className="gift-box ml-5">
              <img
                src={Coffee}
                alt=""
                // className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* sub section */}
      <section className="pt-5 pb-2 m-0 w-100 sub">
        <Container fluid>
          <Row className="pr-5 pl-5">
            <Col lg={3}>
              <Row>
                <div className="circle">
                  <FaGlobe size={20} />
                </div>
                <div className="ml-3 d-flex flex-column">
                  <span>Free Shipping And Return</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </Row>
            </Col>
            <Col lg={3}>
              <Row>
                <div className="circle">
                  <FaMoneyCheckAlt size={20} />
                </div>
                <div className="ml-3 d-flex flex-column">
                  <span>Money Back Guarantee</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </Row>
            </Col>
            <Col lg={3}>
              <Row>
                <div className="circle">
                  <FaHeadphonesAlt size={20} />
                </div>
                <div className="ml-3 d-flex flex-column">
                  <span>Online Support 24/7</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </Row>
            </Col>
            <Col lg={3}>
              <Row>
                <div className="circle">
                  <FaMoneyCheck size={20} />
                </div>
                <div className="ml-3 d-flex flex-column">
                  <span>Safe Payment</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* section 3 */}
      <section className="p-0 m-0 w-100 three">
        <Container fluid>
          <Row className="pr-5 pl-5">
            <Col lg={7} xs={12}>
              <img
                src={require("../assets/img/promotion2.jpg")}
                alt=""
                className="img-fluid w-100"
              />
            </Col>
            <Col lg={5} xs={12} className="box-content">
              <span>Delivery</span>
              <h2>Just One Click Away! Shop From Your Own Home.</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <button>Read More</button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* section 2 #Menu discount */}
      <section className="p-0 m-0 w-100 two">
        <Container>
          <Row className="justify-content-around">
            <Col lg={12} className="pt-5 text-center">
              <h4>Offers This Week</h4>
              <h1>Discount And Promotion</h1>
            </Col>
            <Col lg={12} xs={12} className="p-0 m-0">
              <Swiper
                autoplay={{ delay: 3000 }}
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper swiper-main-content"
              >
                <SwiperSlide>
                  <Col lg={12} xs={12} className="p-2 card-item mt-5">
                    <img
                      src={require("../assets/img/img1.png")}
                      alt=""
                      className="img-fluid"
                    />
                    <Row className="rating mt-3">
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                      <FaStar color="#5f727f" />
                      <FaStar color="#5f727f" />
                    </Row>
                    <span className="mt-2 name">Coffee</span>
                    <span className="mt-1 price">$29.95</span>
                    <button
                      className="mt-3"
                      onClick={() => dispatch(addToCart(1, 1))}
                    >
                      Add To Cart
                    </button>
                  </Col>
                </SwiperSlide>
                <SwiperSlide>
                  <Col lg={12} xs={12} className="p-2 card-item mt-5">
                    <img
                      src={require("../assets/img/img2.png")}
                      alt=""
                      className="img-fluid"
                    />
                    <Row className="rating mt-3">
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                      <FaStar color="#5f727f" />
                      <FaStar color="#5f727f" />
                    </Row>
                    <span className="mt-2 name">Coffee</span>
                    <span className="mt-1 price">$29.95</span>
                    <button
                      className="mt-3"
                      onClick={() => dispatch(addToCart(2, 1))}
                    >
                      Add To Cart
                    </button>
                  </Col>
                </SwiperSlide>
                <SwiperSlide>
                  <Col lg={12} xs={12} className="p-2 card-item mt-5">
                    <img
                      src={require("../assets/img/img3.png")}
                      alt=""
                      className="img-fluid"
                    />
                    <Row className="rating mt-3">
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                      <FaStar color="#5f727f" />
                      <FaStar color="#5f727f" />
                    </Row>
                    <span className="mt-2 name">Coffee</span>
                    <span className="mt-1 price">$29.95</span>
                    <button
                      className="mt-3"
                      onClick={() => dispatch(addToCart(3, 1))}
                    >
                      Add To Cart
                    </button>
                  </Col>
                </SwiperSlide>
                <SwiperSlide>
                  <Col lg={12} xs={12} className="p-2 card-item mt-5">
                    <img
                      src={require("../assets/img/img2.png")}
                      alt=""
                      className="img-fluid"
                    />
                    <Row className="rating mt-3">
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                      <FaStar color="yellow" />
                      <FaStar color="#5f727f" />
                      <FaStar color="#5f727f" />
                    </Row>
                    <span className="mt-2 name">Coffee</span>
                    <span className="mt-1 price">$29.95</span>
                    <button
                      className="mt-3"
                      onClick={() => dispatch(addToCart(4, 1))}
                    >
                      Add To Cart
                    </button>
                  </Col>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
      {/* section 4 */}
      <section className="pt-4 pl-5 pr-5 m-0 w-100 four">
        <Container fluid>
          <Row>
            <Col lg={12} xs={12} className="box-content promotion">
              <span>Delivery</span>
              <h2>Just One Click Away! Shop From Your Own Home.</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <button>Read More</button>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
