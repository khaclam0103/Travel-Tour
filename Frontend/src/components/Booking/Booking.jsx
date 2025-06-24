import React, {useState, useContext} from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';

const Booking = ({ tour, avgRating }) => {
    const { price, reviews, title } = tour;
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        tourName: title,
        fullName: "",
        phone: "",
        bookAt: "",
        guestSize: 1
    });

    const handleChange = e => {
        setBooking(prev=>({...prev, [e.target.id]: e.target.value }))
    };


    const serviceFee = 10000;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

    const handleClick = async e => {
        e.preventDefault();
        console.log(booking);

        try {
            if(!user || user === undefined || user === null) {
                return alert('Vui lòng đăng nhập để đặt tour');
            }
            const res = await fetch(`${BASE_URL}/booking/`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(booking)
            })
            const result = await res.json();
            if(!res.ok) {
                return alert(result.message);
            }
            navigate('/thank-you');
        } catch (err) {
            alert(err.message);
        }

        navigate('/thank-you');
    };

    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>{price} vnđ <span>/ mỗi người</span></h3> 
                <span className="tour__rating d-flex align-items-center">
                    <i className="ri-star-s-fill" ></i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length || 0})
                </span>
            </div>

            {/* Booking Form */}
            <div className="booking__form">
                <h5>Thông tin đặt tour</h5>
                <Form className="booking__info-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input 
                            type="text" 
                            placeholder="Họ và tên" 
                            id="fullName" 
                            required 
                            onChange={handleChange} 
                        />
                    </FormGroup>
                    <FormGroup>
                        <input 
                            type="number" 
                            placeholder="Số điện thoại" 
                            id="phone" 
                            required 
                            onChange={handleChange} 
                        />
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center gap-3">
                        <input 
                            type="date" 
                            placeholder="" 
                            id="bookAt" 
                            required 
                            onChange={handleChange} 
                        />
                        <input 
                            type="number" 
                            placeholder="Số lượng khách" 
                            id="guestSize" 
                            required 
                            onChange={handleChange} 
                        />
                    </FormGroup>
                </Form>
            </div>
            {/* Booking end */}

            {/* Booking bottom */}
            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className="border-0 px-0 gap-1"> 
                        <h5>{price} vnđ <i className="ri-close-line"></i> 1 người</h5>
                        <span>{price} vnđ</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0"> 
                        <h5>Phí dịch vụ</h5>
                        <span> {serviceFee} vnđ</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0 total"> 
                        <h5>Tổng cộng</h5>
                        <span> {totalAmount} vnđ</span>
                    </ListGroupItem>
                </ListGroup>

                <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
                    Đặt ngay 
                </Button>
            </div>
        </div>
    )
}

export default Booking
