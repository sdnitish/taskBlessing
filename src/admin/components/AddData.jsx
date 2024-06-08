import React from 'react';
import './AddData.css';

const AddData = (props) => {

    const handleUpdate = (value) => {
        props.changeFunction(value);
    }

    return (
        <div className='add_box'>
            <div className='Label-box'>
                <span className='Lavel'>{props.Label} :</span>
            </div>
            <div className='Input-box'>
                <input
                    name={props.name}
                    value={props.value}
                    onChange={
                        props.inputType === 'file'
                            ?
                            (e) => handleUpdate(e.target.files[0])
                            :
                            (e) => handleUpdate(e.target.value)
                    }
                    type={props.inputType}
                    placeholder={props.Placeholder}
                />
            </div>
        </div>
    )
}

export default AddData
