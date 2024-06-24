import React ,{useState} from 'react';
import './WhyChoose.css'
import FeatureCard from '../FeatureCard';
import SectionTitle from '../SectionTitle';
import ModalVideo from 'react-modal-video';

const WhyChoose = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 1, theme: "dark" }}
        isOpen={isOpen}
        videoId="aFo54s53ucc?si=qGtHzSFAL8kdX9Ac"
        onClose={() => setOpen(false)}
      />
      <section className="sect-space why-sect">
        <div className="rr-counter-circle-bottom  "></div>
        <div className="rr-counter-circle-right "></div>
        <div className='container'>

          <div className='row'>
            <div className='col-lg-7'>
              <div className="row">

                <div className="col-lg-6 ">
                  <FeatureCard IcnSrc="images/icon/counter-icon_1-1.svg" featNumb="01" featTitle="Best Saftey" featDesc="Our Vehicles boast superior safety features, ensuring a secure ride for passengers and peace of mind for drivers." />
                </div>
                <div className="col-lg-6">
                  <FeatureCard IcnSrc="images/icon/counter-icon_1-2.svg" featNumb="02" featTitle="Heavy Break" featDesc="E-rickshaws are equipped with heavy-duty braking systems, ensuring reliable and safe stopping power for passengers." />
                </div>
                <div className="col-lg-6 ">
                  <FeatureCard IcnSrc="images/icon/counter-icon_1-3.svg" featNumb="03" featTitle="Bluetooth Speaker" featDesc="Vehicles have Bluetooth facility so passengers can enjoy journey with music or informative announcements." />
                </div>
                <div className="col-lg-6">
                  <FeatureCard addClass="active" IcnSrc="images/icon/counter-icon_1-4.svg" featNumb="04" featTitle="Wind Shield Glass" featDesc="It equipped with windshields provide protection from the elements, enhancing comfort and safety for passengers." />
                </div>
              </div>
            </div>
            <div className='col-lg-5 m-t30 '>
              <div className="">
                <SectionTitle smTitle=" Why Choose us" mainTitle="Why Choose Task Blessings?" />
              </div>

              <div className='why-img m-t40'>
                <img className='cert-img' src={"images/img/riksha.gif"} alt="" />
              </div>

            </div>

          </div>

        </div>
      </section>
      <div className="video-bg">
        <div className='abt-text-circle'>
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
        </div>
      </div>
    </>
  )
}

export default WhyChoose
