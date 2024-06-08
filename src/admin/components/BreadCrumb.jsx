import React from 'react'
import { Link } from 'react-router-dom'

function BreadCrumb(props) {
    return (
        <div className='breadCrumb d-flex align-items-center justify-content-between'>
            <span className='fs-5'>{props.pageName}</span>
            {
                props.btnName || props.link
                    ?
                    <Link to={props.link} className='btn btn-primary'>{props.btnName}</Link>
                    :
                    null
            }
        </div>
    )
}

export default BreadCrumb