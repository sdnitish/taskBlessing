import React from 'react'

function EachData(props) {
    return (
        <>
            <thead>
                <tr>
                    {
                        props.thData.map((value, index) =>
                            <th key={index}>{value.name}</th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.tdData.length > 0
                        ?
                        props.tdData.map((value, index) =>
                            <tr key={index}>
                                {
                                    value.map((item, key) =>
                                        <td key={key}>{item}</td>
                                    )
                                }
                            </tr>
                        )
                        :
                        <tr>
                            <td colSpan={props.thData.length} className='fs-5'>No data found</td>
                        </tr>
                }
            </tbody>
        </>
    )
}

export default EachData