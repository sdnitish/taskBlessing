import React from 'react';
import { Link } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const PdfBtn = (props) => {
  return (
    <Link target='_blank' className={props.addClass  + ' ' + 'thm-btn'} to={props.Href}>{props.btnName} 
    <ArrowOutwardIcon />
    </Link>
  )
}

export default PdfBtn
