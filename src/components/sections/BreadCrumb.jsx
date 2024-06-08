import React from 'react';
import './BreadCrumb.css';
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
  return (
    <section className='bread-crumb'>
      <div className='container'>
      <h1>{props.name ? props.name : null}</h1>
        <div className='page-title-box'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><span><i className="fa-solid fa-angles-right"></i></span></li>
                <li><span>{props.name ? props.name : null}</span></li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default BreadCrumb
