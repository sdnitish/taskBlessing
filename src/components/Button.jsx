import React from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Button = (props) => {
  return (
    <button className='thm-btn ' type={props.btnType}>{props.btnName} 
      <ArrowOutwardIcon />
    </button>
  )
}

export default Button
