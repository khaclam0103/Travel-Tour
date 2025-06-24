import React from 'react'
import ServiceCard from "./ServiceCard";
import{ Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData = [
    {
        imgUrl: weatherImg,
        title: "Tính toán thời tiết",
        desc: "Giúp bạn lên kế hoạch du lịch dễ dàng hơn với dự báo thời tiết chính xác.",
    },
    {
        imgUrl: guideImg,
        title: "Hướng dẫn viên du lịch tốt nhất",
        desc: "Kết nối với các hướng dẫn viên uy tín để có trải nghiệm du lịch đáng nhớ.",
    },
    {
        imgUrl: customizationImg,
        title: "Tùy chỉnh",
        desc: "Cá nhân hóa chuyến đi theo sở thích và nhu cầu riêng của bạn.",
    },
]

const ServiceList = () => {
  return( 
    <>
        {serviceData.map((item, index) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
                <ServiceCard item={item} />
            </Col>
        ))}
    </>
  )
}

export default ServiceList