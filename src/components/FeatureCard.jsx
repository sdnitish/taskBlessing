import React, { useEffect } from 'react';
import './FeatureCard.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureCard = (props) => {

  const boxVariant = {
    visible: { opacity: 1, scale: 1, translateX: 0, transition: { duration: 0.4 } },
    hidden: { opacity: 0.25, scale: 0.65, translateX: 180 },
  }

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className=' m-b30'>
      <div className={props.addClass + ' ' + 'feat-card'}>
        <div className='feat-card-content'>
          <div className='icn-and-num'>
            <div className='Icn'>
                <img src={props.IcnSrc} alt="Icons" />
              </div>
            <div className='Numb'>{props.featNumb}</div>
          </div>
          <p className='title'>{props.featTitle}</p>
          <p>{props.featDesc}</p>
          {/* <a className='arrow-feat' href=""><i className="fa-solid fa-arrow-right-long"></i></a> */}
        </div>
      </div>
    </motion.div>
  )
}

export default FeatureCard
