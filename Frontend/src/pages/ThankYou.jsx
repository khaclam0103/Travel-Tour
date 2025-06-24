import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Styles/thank-you.css'; 

const ThankYou = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className="pt-5 text-center">
                    <div className="thank-you">
                        <span>
                            <i className="ri-checkbox-circle-fill"></i>
                        </span>
                        <h1 className="mb-3 fw-semibold">Cảm ơn bạn đã đặt tour!</h1>
                        <h3 className="mb-4">Chúng tôi đã nhận được thông tin đặt tour của bạn.</h3>

                        <Button className="btn primary__btn w-25">
                            <Link to="/home">Quay về trang chủ</Link>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ThankYou