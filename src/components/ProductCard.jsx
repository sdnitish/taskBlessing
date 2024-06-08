import React, { useEffect } from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PdfBtn from './PdfBtn';

const ProductCard = (props) => {

  const boxVariant = {
    visible: { opacity: 1, scale: 1, translateY: 0, transition: { duration: 0.4 } },
    hidden: { opacity: 0.25, scale: 0.65, translateY: -110 },
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
      className='service-card'>
      <div className='service-img'>
        <img className='w-100' loading='lazy' src={process.env.REACT_APP_BASE_URL + "images/products/" + props.servImg} alt={props.productName} title={props.productName} />
      </div>
      {/* <p className="pd-Titl">Skies Tech Products Pvt. Ltd.</p> */}
      <div className='service-name-box'>
        <div className='service-content'>
          <Link className='service-name' to={props.servLink}>{props.productName}</Link>
          <span className='service-name-title' >{props.servDesc}</span>
          <PdfBtn  Href={props.Pdf} btnName="Know More" />
        </div>
      </div>

    </motion.div>
  )
}

export default ProductCard
