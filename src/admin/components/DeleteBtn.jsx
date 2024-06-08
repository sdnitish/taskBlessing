import React from 'react'

function DeleteBtn(props) {

    const deleteItem = async () => {
        let result = await fetch(
            props.url,
            {
                method: 'delete',
            }
        );

        result = await result.json();

        if (result.status) {
            props.deleteAndRender(true);
        }
    }

    return (
        <button className='btn btn-danger' onClick={deleteItem}>Delete</button>
    )
}

export default DeleteBtn