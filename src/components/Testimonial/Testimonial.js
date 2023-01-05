import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonial.css";
// import required modules
import { Navigation } from "swiper";



const Testimonial = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <>
            <Container className="text-center" style={{ marginTop: '80px' }}>
                <h2 className="mb-5"><span className="coffe-color">/</span> Testimonial</h2>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review =>
                            <SwiperSlide>
                                <div className="">
                                    <img className="circleImg mt-2" src={review.image} alt="client" />
                                    <h5 className="mt-3">{review.name}</h5>
                                    <h6 className="review-des">{review.designation}</h6>
                                    <p className="clientDes">{review.des}</p>
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </Container>
        </>
    );
};

export default Testimonial;