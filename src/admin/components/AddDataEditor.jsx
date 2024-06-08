import React, {useState} from 'react';
import './AddData.css';

const AddDataEditor = (props) => {

    return (
        <div className='add_box'>
            <div className='Label-box' ><span className='Lavel'>{props.Label} :</span></div>
            <div className='Input-box'>{props.Editor}</div>
        </div>
    )
}

export default AddDataEditor
