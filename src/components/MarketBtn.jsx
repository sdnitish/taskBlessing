import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MarketBtn = (props) => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1,  transition: {duration: 0.325} },
    hidden: { opacity: 0.45, scale: 0.75 },
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
    >
      <Link className={props.addClass  + ' ' + 'thm-btn w-100 text-center market-btn'} to={props.Href}>{props.locationName} </Link>
    </motion.div >
  )
}

export default MarketBtn
