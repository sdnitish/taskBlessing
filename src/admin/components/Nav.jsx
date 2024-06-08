import React from 'react'
import './Nav.css';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function Nav() {
    return (
        <div className='nav_bar'>
            <div className='nav_sidebar'><span>Admin</span></div>
            <div className='nav_head'>
                <span className='menu_btn'>
                    <MenuOpenIcon />
                </span>
            </div>
        </div>
    )
}

export default Nav