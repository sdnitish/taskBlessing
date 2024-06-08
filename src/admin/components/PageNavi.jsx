import React, { useState } from 'react';
import './PageNavi.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import PageNaviChild from './PageNaviChild';

const PageNavi = (props) => {

    const [isActive, setIsActive] = useState(props.addClass ? true : false);

    const openChild = () => {
        setIsActive(!isActive);
    }

    return (
        <div className='w-100'>
            <Link to={props.link}>
                <div className={props.addClass + ' shadow-sm page_nvi'} onClick={props.hasChild ? openChild : null} >
                    <div className='name_Icon'>
                        <span>{props.pageIcon}</span>
                        <span>{props.pageName}</span>
                    </div>
                    {
                        props.hasChild
                            ?
                            <span><ChevronRightIcon /></span>
                            :
                            null
                    }
                </div>
            </Link>
            {
                props.hasChild
                    ?
                    <PageNaviChild addClass={isActive ? "active" : ""} childs={props.childrens} />
                    :
                    null
            }
        </div>
    )
}

export default PageNavi
