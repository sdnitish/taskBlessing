import React from 'react';
import { Link } from 'react-router-dom';
import HasChildMenu from './HasChildMenu';
import ChildMenu from './ChildMenu';

const MenuList = (props) => {

    const categories = props.categories;

    const closeMenu = () => {
        props.closeMenu(false);
    };

    return (
        <ul>
            <li className='active'><Link onClick={closeMenu} to="/"><span>Home</span></Link></li>

            {
                categories
                    ?
                    categories.map((value, index) =>
                        <HasChildMenu
                            key={index}
                            to={value.slug}
                            closeMenu={closeMenu}
                            
                            servName={value.name}
                            servChild={
                                <ChildMenu
                                    data={props.data}
                                    closeMenu={closeMenu}
                                    servChild={value.products}
                                />
                            }
                        />
                    )
                    :
                    null
            }

            <li ><Link onClick={closeMenu} to="/company-profile"> <span>Company Profile</span> </Link></li>

            <li ><Link onClick={closeMenu} to="/sitemap"> <span>Sitemap</span> </Link></li>
            <li ><Link onClick={closeMenu} to="/contact"> <span>Contact</span> </Link></li>
        </ul>
    )
}

export default MenuList
