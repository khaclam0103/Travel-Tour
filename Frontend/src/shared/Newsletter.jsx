import React from 'react'
import './Newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
    <section className="newsletter">
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Đăng ký ngay để nhận thông tin du lịch hữu ích.</h2>
                    </div>

                    <div className="newsletter__input">
                        <input type="email" placeholder="Nhập email của bạn" />
                        <button className="btn newsletter__btn">Đăng ký</button>
                    </div>

                    <p>Đừng bỏ lỡ những điểm đến thú vị và kinh nghiệm du lịch bổ ích dành riêng cho bạn.</p>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter