import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HomeBanner.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
// import required modules
import { Autoplay, EffectFade, Navigation, FreeMode } from 'swiper/modules';
import PreLoader from './PreLoader';
import CountUp from 'react-countup';

const HomeBanner = () => {

    const [banners, setBanner] = useState([]);
    const [loadedData, setLoadedData] = useState(null);
    const [siteInfo, setSiteInfo] = useState([]);

    useEffect(() => {
        getBanners();
        getSiteInfo();
    }, []);

    const getBanners = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}banners`);
        result = await result.json();
        setLoadedData(result);
        if (result.status) {
            setBanner(result.banners);
        }
    }
    const getSiteInfo = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}siteInfo`);
        result = await result.json();
        if (result.status) {
            setSiteInfo(result.siteInfo);
        }
    }
    return (
        <>
            {loadedData ? (
                <>
                    <Swiper
                        autoplay={{
                            delay: 6500,
                            disableOnInteraction: false,
                            // stopOnLastSlide: false,
                        }}
                        loop={true}
                        effect={'fade'}
                        speed={1000}
                        navigation={{
                            prevEl: '.prev-slide',
                            nextEl: '.next-slide',
                        }}
                        modules={[FreeMode, EffectFade, Autoplay, Navigation]}
                        className="home-slider hero-slide-h">
                        {/* <div className="colored-scls ban-scl">
                       <Socials data={siteInfo} />
                    </div> */}
                        {
                            banners
                                ?
                                banners.map((value, index) =>
                                    <SwiperSlide key={index}>
                                        <img className='w-100' src={process.env.REACT_APP_BASE_URL + 'images/banners/' + value.img} alt={value.name} title={value.name} />
                                    </SwiperSlide>
                                )
                                :
                                null
                        }
                        <div className="prev-slide slide-btn"><span><ArrowBackIcon /></span></div>
                        <div className="next-slide slide-btn"><span><ArrowForwardIcon /></span></div>

                        <div className="container">
                            <div className="counter-wrap1 bg-white">
                                <div className="row gx-0 ">
                                    <div className="col-lg-6">
                                        <div className="counter-card-wrap">
                                            <div className="row gy-30 justify-content-between">
                                                <div className="col-sm-6 col-lg-auto">
                                                    <div className="counter-card">
                                                        <div className="media-body">
                                                            <h2 className="counter-card_number">
                                                                <div><span className="counter-number"><CountUp end={15} enableScrollSpy scrollSpyOnce="true" />+</span></div>
                                                            </h2>
                                                            <p className="counter-card_text">Years Of Experience</p>
                                                        </div><div className="counter-card_icon">
                                                            <img width={50} src="images/icon/experience.png" alt="Fixturbo" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-lg-auto">
                                                    <div className="counter-card">
                                                        <div className="media-body">
                                                            <h2 className="counter-card_number">
                                                                <div><span className="counter-number"><CountUp end={650} enableScrollSpy scrollSpyOnce="true" />+</span></div>
                                                            </h2>
                                                            <p className="counter-card_text">Total Customers</p>
                                                        </div><div className="counter-card_icon">
                                                            <img width={50} src="images/icon/client.png" alt="Fixturbo" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-lg-auto">
                                                    <div className="counter-card">
                                                        <div className="media-body">
                                                            <h2 className="counter-card_number">
                                                                <div><span className="counter-number"><CountUp end={600} enableScrollSpy scrollSpyOnce="true" />+</span></div>
                                                            </h2>
                                                            <p className="counter-card_text">Satisfied Customers</p>
                                                        </div><div className="counter-card_icon">
                                                            <img width={50} src="images/icon/totalcost.png" alt="Fixturbo" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-lg-auto">
                                                    <div className="counter-card">
                                                        <div className="media-body">
                                                            <h2 className="counter-card_number">
                                                                <div><span className="counter-number"><CountUp end={890} enableScrollSpy scrollSpyOnce="true" />+</span></div>
                                                            </h2>
                                                            <p className="counter-card_text">Market We Serve</p>
                                                        </div><div className="counter-card_icon">
                                                            <img width={50} src="images/icon/market.png" alt="Fixturbo" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="counter-checklist-wrap" >
                                            <div className="checklist style-white mb-50">
                                                <ul>
                                                    <li><i className="fas fa-check">
                                                    </i>Providing Best Quality</li>
                                                    <li><i className="fas fa-check"></i>Always Timely Delivery</li>
                                                    <li><i className="fas fa-check"></i>Minimum Rate In Market</li>
                                                </ul>
                                            </div>
                                            <div className="call-media-wrap">
                                                <div className="icon"><img src="./images/icon/phone-1.svg" alt="Fixturbo" /></div>
                                                <div className="media-body">
                                                    <h6 className="title text-white">Call Us Now:</h6>
                                                    <h4 className="link"><a className="text-white" href={"tel:"+siteInfo.primaryPhone}>{siteInfo.primaryPhone}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Swiper>
                </>
            ) : (
                <PreLoader />
            )}

        </>
    )
}

export default HomeBanner
