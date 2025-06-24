import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autolaySpeed:2000,
        slidesToShow:3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    }
  return (
    <Slider  {...settings}   >
        <div className="testimonial py-4 px-3">
            <p>
                Chuyến đi Quảng Trị khiến tôi thay đổi suy nghĩ về du lịch miền Trung. 
                Con người ở đây chân chất, mến khách và rất nhiệt tình. 
                Những câu chuyện lịch sử được kể bởi người dân địa phương đã làm tôi xúc động và thêm yêu quê hương.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className = "w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Khách hàng 01</h6>
                    <p>Khách du lịch</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
                Trải nghiệm của tôi thật sự tuyệt vời! 
                Hướng dẫn viên không chỉ am hiểu về văn hóa, 
                lịch sử mà còn rất nhiệt tình, thân thiện. 
                Mọi người trong đoàn đều cảm thấy thoải mái và được quan tâm chu đáo. 
                Tôi chắc chắn sẽ quay lại trong những kỳ nghỉ sắp tới.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className = "w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Khách hàng 02</h6>
                    <p>Khách du lịch</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
                Tôi đặc biệt thích khả năng tùy chỉnh lịch trình theo nhu cầu cá nhân. 
                Nhờ đó, chuyến đi của tôi không bị gò bó mà vẫn đảm bảo 
                tham quan đầy đủ các địa điểm mong muốn. 
                Đây là một dịch vụ du lịch mà tôi tin tưởng và sẽ giới thiệu cho bạn bè, người thân.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className = "w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Khách hàng 03</h6>
                    <p>Khách du lịch</p>
                </div>
            </div>
        </div>

         <div className="testimonial py-4 px-3">
            <p>
                Đến Quảng Trị, tôi ấn tượng nhất với thiên nhiên hoang sơ nơi đây: 
                bãi biển Cửa Tùng yên bình, đảo Cồn Cỏ xanh mát và những cánh đồng lúa trải dài. 
                Một điểm đến lý tưởng để tạm rời xa phố thị ồn ào và tìm về sự thư giãn thực sự.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className = "w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Khách hàng 04</h6>
                    <p>Khách du lịch</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
                Tôi chưa từng nghĩ Quảng Trị lại mang đến nhiều cảm xúc đến vậy. 
                Ghé thăm Thành cổ Quảng Trị, tôi cảm nhận được sự linh thiêng 
                và hào hùng của lịch sử dân tộc. Đây không chỉ là chuyến du lịch, 
                mà còn là một hành trình tri ân và thấu hiểu.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className = "w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Khách hàng 05</h6>
                    <p>Khách du lịch</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonials