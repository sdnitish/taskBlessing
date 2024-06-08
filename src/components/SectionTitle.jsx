import React from 'react'
import { Parser } from 'html-to-react'

const SectionTitle = (props) => {
    let html;
    if (props.homeTitle) {
        html = "<h1 className='sect-title'>"+props.homeTitle+"</h1>";
    } else if (props.hTwoTitle) {
        html = "<h2 className='sect-title'>"+props.hTwoTitle+"</h2>";
    } else {
        html = "<p className='sect-title'>"+props.mainTitle+"</p>";
    }
    return (
        <>
            <span className='sm-title'>{props.smTitle}</span>
            {Parser().parse(html)}
        </>
    )
}

export default SectionTitle
