import React, { useEffect, useState } from 'react';
import './CompanyProfile.css';
// import { LoremIpsum } from 'react-lorem-ipsum';
import { Parser } from 'html-to-react'
import SectionTitle from '../SectionTitle';
import BtnLink from '../BtnLink';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ModalVideo from 'react-modal-video';


const CompanyProfile = (props) => {

  const [isOpen, setOpen] = useState(false);
  const [siteInfo, setSiteInfo] = useState([]);

  const boxVariant = {
    visible: { opacity: 1, scale: 1, translateX: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0.25, scale: 0.85, translateX: -180 },
  }

  const control = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    getSiteInfo();
    if (inView) {
      control.start("visible");
    }
    else {
      control.start("hidden");
    }
  }, [control, inView]);

  const getSiteInfo = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}siteInfo`);
    result = await result.json();
    if (result.status) {
      setSiteInfo(result.siteInfo);
    }
  }

  return (
    <>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 1, theme: "dark" }}
        isOpen={isOpen}
        videoId="bEdlr_V4_U0?si=_SNmADcvsJeWjpmf"
        onClose={() => setOpen(false)}
      />
      <section className="about-section pb-0">

        <div className="about-left-shape">
          <img className='w-100' src="images/shapes/about_shape.png" alt="" />
        </div>


        <div className='container'>
          <div className=''>

            <motion.div
              ref={ref}
              variants={boxVariant}
              initial="hidden"
              animate={control}
              className='abt-floated'>
              {/* <div className='abt-text-circle'>
                <div className="video-main">
                  <div className="promo-video">
                    <div className="waves-block">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                    </div>
                  </div>
                  <span onClick={() => setOpen(true)} className="video-btn" ><i className="fa fa-play"></i></span>
                </div>
              </div> */}

              <div className='row h-100 align-items-end'>
                <div className='w-100 position-realative'>
                  <img className='w-100' loading='lazy' src={process.env.REACT_APP_BASE_URL + "images/pages/" + props.pageData.img} alt={props.pageData.shortDescription} title={props.pageData.shortDescription} />
                  {/* <div className='exp-box'>
                    <img src="images/img/rikshaw-abt.avif" alt={props.pageData.shortDescription} title={props.pageData.shortDescription} />
                  </div> */}
                </div>
              </div>

            </motion.div>
            <div>
              <SectionTitle smTitle="About Company" homeTitle={props.homeTitle} mainTitle={props.pageData.shortDescription} />
            </div>
            <p>{Parser().parse(props.pageData.description)}</p>
            <p>{Parser().parse(props.pageData.extraDescription)}</p>
            <div className='row align-items-center mt-4'>
              <BtnLink Href="/company-profile" btnName="Read More" />
            </div>
          </div>
        </div>
        <div className="riksha-mving">
          <img className='road w-100' src="images/img/road.jpg" alt="" />
          <marquee className="rikshaw" behavior="" scrollamount="40" direction="left">
            <img src="images/img/riksha.png" alt="" />
          </marquee>
          <marquee className="bike" behavior="" scrollamount="30" direction="right">
            <img src="images/img/bike-girl.png" alt="" />
          </marquee>
          <marquee className="bike2" behavior="" scrollamount="20" direction="left">
            <img src="images/img/bike2.png" alt="" />
          </marquee>
        </div>
      </section>
    </>
  )
}

export default CompanyProfile
