import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useNavigate} from "react-router-dom";
import {useHeart} from "../../contexts/HeartProvider";


// const SimpleSlider = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     };
//
//
//     return (
//         <div>
//             <h2>Простой слайдер на React</h2>
//             <Slider {...settings}>
//                 {imagesArr.map((image, index) => (
//                     <div className={'simple-slider'} key={index}>
//                         <img src={image.url} alt={`Slide ${index + 1}`}/>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// }
const SimpleSlider = () => {
    const navigate = useNavigate();
    const { updateHeartCounter } = useHeart();
    const imagesArr = [
        {
            id: 1,
            url: 'images/slider/1.jpg',
            text: '12345'
        }, {
            id: 2,
            url: 'images/slider/2.jpg',
            text: '12345'
        }, {
            id: 3,
            url: 'images/slider/3.jpg',
            text: '12345'
        }, {
            id: 4,
            url: 'images/slider/4.jpg',
            text: '12345'
        }, {
            id: 5,
            url: 'images/slider/5.jpg',
            text: '12345'
        }, {
            id: 6,
            url: 'images/slider/6.jpg',
            text: '12345'
        }, {
            id: 7,
            url: 'images/slider/7.jpg',
            text: '12345'
        }, {
            id: 8,
            url: 'images/slider/8.jpg',
            text: '12345'
        }, {
            id: 9,
            url: 'images/slider/9.jpg',
            text: '12345'
        }, {
            id: 10,
            url: 'images/slider/10.jpg',
            text: '12345'
        }, {
            id: 11,
            url: 'images/slider/11.jpg',
            text: '12345'
        }, {
            id: 12,
            url: 'images/slider/12.jpg',
            text: '12345'
        },
    ]
    return (
        <>
            <h2>Давай вспомним лучшие моменты</h2>
            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {imagesArr.map((image, index) => (
                    <SwiperSlide>
                        <img width={400} src={image.url} alt={`Slide ${index + 1}`}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button onClick={() => {
                navigate('/puzzle')
                updateHeartCounter(+1)
            } }> Дальше</button>
        </>
    );

};

export default SimpleSlider;
