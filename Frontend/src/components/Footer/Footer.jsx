import React from 'react';
import './footer.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import { Link } from 'react-router-dom'; 
import logo from "../../assets/images/logo.png"

const quick__links = [
  {
    path: '/home',
    display: 'Trang chủ'
  },
  {
    path: '/about',
    display: 'Giới thiệu'
  },
  {
    path: '/tours',
    display: 'Tours du lịch'
  },
];

const quick__links2 = [
  {
    path: '/gallery',
    display: 'Phòng trưng bày'
  },
  {
    path: '/login',
    display: 'Đăng nhập'
  },
  {
    path: '/register',
    display: 'Đăng ký'
  },
];


const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>Chúng tôi những người yêu và <br/>muốn phát triển Du lịch Quảng Trị</p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i class="ri-youtube-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-facebook-circle-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Về chúng tôi</h5>

            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Liên kết nhanh</h5>

            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Liên hệ</h5>

            <ListGroup className="footer__quick-links">
                <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 flex align-items-center gap-2">
                    <span><i class="ri-map-pin-line"></i></span>
                    Địa chỉ:
                  </h6>
                  <p className="mb-0">Quảng Trị</p>
                </ListGroupItem>  

                <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 flex align-items-center gap-2">
                    <span><i class="ri-mail-line"></i></span>
                    Email:
                  </h6>
                  <p className="mb-0">travelQT@gmail.com</p>
                </ListGroupItem>  

                <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 flex align-items-center gap-2">
                    <span><i class="ri-phone-line"></i></span>
                    Điện thoại:
                  </h6>
                  <p className="mb-0">+84 1234 56789</p>
                </ListGroupItem>          
            </ListGroup>
          </Col>

          <Col lg="12" className="text-center pt-5">
              <p className="copyright">Copyright {year}, All Rights Reserved | Du lịch Quảng Trị</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer