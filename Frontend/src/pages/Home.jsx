import React from 'react'
import '../Styles/home.css'

import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg2 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/vd.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from './../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import ImagesGallery from '../components/image-gallery/ImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
    <>
      {/* ============= hero section start ============= */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={'Biết trước khi bạn đi'}/>
                  <img src={worldImg} alt="" />
                </div>
                <h1>Khám phá <span className="highlight">Quảng Trị</span> <br/> vùng đất của lịch sử và thiên nhiên kỳ vĩ</h1>
                <p>
                  Quảng Trị – nơi giao thoa giữa thiên nhiên hoang sơ và chiều sâu lịch sử. Hành trình 
                  về miền Trung này sẽ đưa bạn khám phá Cầu Hiền Lương, sông Bến Hải, địa đạo Vịnh Mốc 
                  và nhiều di tích gắn liền với những câu chuyện hào hùng của dân tộc.
                </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box hero__video-box mt-4">
                <video 
                  src={heroVideo} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-100"
                />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg2} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ============= hero section start ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">Những gì chúng tôi phục vụ</h5>
              <h2 className="services__title">Chúng tôi mang đến những dịch vụ tốt nhất dành cho bạn</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ============== featured tour section start ===============*/}

        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Khám phá"} />
              <h2 className="featured__tour-title">Các tour du lịch nổi bật của chúng tôi</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>

      {/* ============== featured tour section end ===============*/}

      {/* ============== experience section start ===============*/}

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={"Kinh nghiệm"}/>

                <h2>
                  Với tất cả kinh nghiệm của <br/> chúng tôi sẽ phục vụ bạn
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  <br/>
                  Quas aliquam, hic tempora inventore suscipit unde.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Chuyến đi thành công</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Khách hàng thường xuyên</h6>
                </div>
                <div className="counter__box">
                  <span>5</span>
                  <h6>Năm kinh nghiệm</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ============== experience section end ===============*/}

      {/* ============== gallery section start ===============*/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Phòng trưng bày'}/>
              <h2 className="gallery__title">
                Ghé thăm phòng trưng bày của khách hàng
              </h2>
            </Col>
            <Col lg='12'>
              <ImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============== gallery section end ===============*/}

      {/* ============== testimonial section end ===============*/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Ý kiến khách du lịch'} />
              <h2 className="testimonial__title">Khách du lịch nói gì về trải nghiệm của họ?</h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============== testimonial section end ===============*/}
      <Newsletter />

    </>    
  )
}

export default Home