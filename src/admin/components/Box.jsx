import React from 'react'
import { Link } from 'react-router-dom'
import WebIcon from '@mui/icons-material/Web';

function Box({ title, heading, icon, link }) {
    return (
        <div className='col-lg-4 col-xxl-3 col-md-6'>
            <Link to={link} >
                <div className='shadow p-3 mb-4 bg-white rounded align-items-center'>
                    <div className='row align-items-center justify-content-between'>
                        <div className='col-8'>
                            <small>{title}</small>
                            <h4 className='lh-1 mt-2'>{heading}</h4>
                        </div>
                        <div className='col-4 d-flex justify-content-center fs-5 align-items-center'>
                            {icon}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Box