import React, { useState, useEffect } from 'react';
import './Testimonial.css';
import SectionTitle from '../SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonial = () => {

    const [testimonials, setTestimonials] = useState([]);

    const boxVariantTesti = {
        visible: { opacity: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 1, },
    }

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {

        getTestimonials();

        if (inView) {
            control.start("visible");
        }
        else {
            control.start("hidden");
        }
    }, [control, inView]);

    const getTestimonials = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}testimonials`);
        result = await result.json();
        if (result.status) {
            setTestimonials(result.testimonials);
        }

    }

    return (
        <section className='sect-space testi-bg '>
            <div className='container'>
                <div className='row'>
                    <div className='text-center position-relative'>
                        <SectionTitle smTitle='Testimonial' mainTitle='Here Are Some Of Our Most Valuable Comments.' />
                        {/* <span className='title-big'>Testimonials</span> */}
                    </div>
                </div>
                <div className='m-t30 '>

                    <Swiper
                        loop={true}
                        speed={1000}
                        autoplay={{
                            delay: 6500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 4,
                            },
                            500: {
                                slidesPerView: 1,
                                spaceBetween: 4,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 4,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 25,
                            },
                            1224: {
                                slidesPerView: 2,
                                spaceBetween: 25,
                            },
                            1824: {
                                slidesPerView: 2,
                                spaceBetween: 25,
                            },
                        }}
                        modules={[Autoplay, Navigation]}
                        className="home-slider">
                        {
                            testimonials
                                ?
                                testimonials.map((value, index) =>

                                    <SwiperSlide key={index}>
                                        <motion.div
                                            ref={ref}
                                            variants={boxVariantTesti}
                                            initial="hidden"
                                            animate={control}
                                            className='testi-box'>
                                            <div className='Testimonial-box'>
                                                <div className='reviews-box'>
                                                    <p className="stars">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                    </p>
                                                    <p className='testi-words'>{value.description}</p>
                                                    <div className='testi-name-box d-flex'>
                                                        <img className='testi-img' src={process.env.REACT_APP_BASE_URL + 'images/testimonials/' + value.img} alt={value.name} title={value.name} />
                                                        <div className="">
                                                            <p className='testi-name'>{value.name}</p>
                                                            <span className='testi-position'>{value.textField1}</span>
                                                            <i className="fa-solid fa-quote-right"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </SwiperSlide>
                                )
                                :
                                null
                        }


                    </Swiper>

                </div>
            </div>
        </section>
    )
}

export default Testimonial
