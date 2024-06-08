import React from 'react';
import './PageNaviChild.css';
import PageNavi from './PageNavi';
import { Link } from 'react-router-dom';

const PageNaviChild = (props) => {
    return (
        <div className={props.addClass + ' page_navi_child'}>
            {
                props.childs.map((value, index) =>
                    <PageNavi key={index} pageName={value.name} link={value.link} addClass={value.addChildClass} />
                )
            }
        </div>
    )
}

export default PageNaviChild
