import React, {useEffect, useRef, useState, useContext} from 'react'
import '../Styles/tours-details.css'
import { Container, Row, Col, Form, ListGroup} from 'reactstrap'
import { useParams} from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import  avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/Newsletter'
import useFetch from './../hooks/useFetch'
import { BASE_URL } from './../utils/config'
import { AuthContext } from './../context/AuthContext'

const ToursDetails = () => {
  const {id} = useParams ()
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const {user} = useContext(AuthContext);

  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);
  const {
    photo, 
    title, 
    desc, 
    price, 
    address, 
    reviews, 
    city, 
    distance, 
    maxGroupSize
  } = tour;

  const {totalRating, avgRating} = calculateAvgRating(reviews);

  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  const submitHandler = async e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value;

    try {
      if(!user || user === undefined || user === null) {
        alert('Vui lòng đăng nhập để gửi đánh giá')
      }
      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating
      };
      
      const res = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj)
      });

      const result = await res.json();
      if(!res.ok) {
        return alert(result.message);
      }

      alert(result.message);
      } catch (err) {
        alert(err.message);
      }
    }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading...</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          {
            !loading && !error && 
            <Row>
              <Col lg='8'>
                <div className="tour__content">
                  <img src={photo} alt="" />

                  <div className="tour__info">
                    <h2>{title}</h2>
                    
                    <div className="d-flex align-items-center gap-5">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <i 
                          className="ri-star-s-fill"
                          style={{color: "var(--secondary-color)"}}
                        ></i>
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          "Not rated"
                        ) : (
                          <span>({reviews?.length} đánh giá)</span>
                        )}
                      </span>

                      <span>
                        <i class="ri-map-pin-range-line"></i> {address}
                      </span>
                    </div>

                    <div className="tour__extra-details">
                      <span><i className="ri-map-pin-2-line"></i> {city}</span>
                      <span><i className="ri-money-dollar-circle-line"></i> {price} vnđ / khách</span>
                      <span><i className="ri-time-line"></i> {distance} k/m</span>
                      <span><i className="ri-group-line"></i> {maxGroupSize} người</span>
                    </div>

                    <h5>Giới thiệu địa điểm du lịch</h5>
                    <p>{desc}</p>
                  </div>

                  {/* ============= tour reviews section =============== */}
                    <div className="tour__reviews mt-4">
                      <h4>Đánh giá ({reviews?.length})</h4>

                      <Form onSubmit = {submitHandler}>
                        <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                          <span onClick={() => setTourRating(1)}>
                            1 <i className="ri-star-s-fill"></i>
                          </span>
                          <span onClick={() => setTourRating(2)}>
                            2 <i className="ri-star-s-fill"></i>
                          </span>
                          <span onClick={() => setTourRating(3)}>
                            3 <i className="ri-star-s-fill"></i>
                          </span>
                          <span onClick={() => setTourRating(4)}>
                            4 <i className="ri-star-s-fill"></i>
                          </span>
                          <span onClick={() => setTourRating(5)}> 
                            5 <i className="ri-star-s-fill"></i>
                          </span>
                        </div>

                        <div className="review__input">
                          <input type="text" ref={reviewMsgRef} placeholder="viết đánh giá của bạn" required /> 
                          <button 
                            className="btn primary__btn text-white"                         
                            type="submit"                         
                          >
                            Gửi đánh giá
                          </button>                     
                        </div>
                      </Form>

                      <ListGroup className="user__reviews">
                        {
                          reviews?.map(review => (
                            <div className="review__item">
                              <img src={avatar} alt="" />
                              <div className="w-100">
                                <div className="d-flex align-items-center justify-content-between">
                                  <div>
                                    <h5>{review.username}</h5>
                                    <p>
                                      {new Date(review.createdAt).toLocaleString()}                            
                                    </p>
                                  </div>
                                  <span className="d-flex align-items-center">
                                    {review.rating} <i className="ri-star-s-fill"></i>
                                  </span>
                                </div>
                                <h6>{review.reviewText}</h6>
                                <p>{review.comment}</p>
                              </div>
                            </div>
                          ))
                        }
                      </ListGroup>
                    </div>
                  {/* ============= tour reviews section end =============== */}

                </div>
              </Col>

              <Col lg='4'>
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          }
        </Container>
      </section>
      <Newsletter />
    </>
  )
}

export default ToursDetails