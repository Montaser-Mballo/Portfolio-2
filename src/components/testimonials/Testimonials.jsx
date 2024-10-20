import "./testimonials.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules'; // Corrected import path for Pagination module
import Scroll from "./Scroll";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Testimonials = () => {

    const { hash } = useLocation();

    useEffect(() => {
        // Scroll to the section when the component mounts or when the hash changes
        if (hash) {
            const section = document.getElementById(hash.substring(1)); // Remove the '#' character
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <section id="testimonials" className="testimonial container section">
            <div><h2 className="section__title">Testimonials</h2>
                <span className="section__subtitle">What people say</span>
                <Swiper className="testimonial__container"
                    loop={true}
                    grabCursor={true}
                    spaceBetween={24}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 48,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 48,
                        },
                    }}
                    modules={[Pagination]}
                >
                    {Data.map(({ id, image, title, description }) => {
                        return (
                            <SwiperSlide className="testimonial__card" key={id}>
                                <img src={image} alt="client" className="testimonial__img" />
                                <h3 className="tetimonial__name">{title}</h3>
                                <p className="testimonial__description">{description}</p>
                            </SwiperSlide>
                        )
                    })}
                </Swiper></div>
            <Scroll />
        </section>
    );
}

export default Testimonials;
