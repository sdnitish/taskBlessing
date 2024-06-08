import React, { useState, useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom';
import { Parser } from 'html-to-react'
// import { useLocation } from 'react-router-dom';
import './Nav.css';
import MenuList from './MenuList';
import TtySharpIcon from '@mui/icons-material/TtySharp';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Socials from './Socials';
import BtnLink from '../BtnLink';
import PreLoader from '../sections/PreLoader';

const Nav = (props) => {

    const [categories, setCategories] = useState([]);
    const [isOpen, setIsopen] = useState(false);
    const [siteInfo, setSiteInfo] = useState([]);
    const [loadedData, setLoadedData] = useState(null);
    const [searchData, setSearchData] = useState([]);
    const [searchActive, setSearchActive] = useState(false);
    const [searchBoxActive, setSearchBoxActive] = useState(false);


    useEffect(() => {
        getCategories();
        getSiteInfo();

    }, []);


    const getSiteInfo = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}siteInfo`);
        result = await result.json();
        setLoadedData(result);
        if (result.status) {
            setSiteInfo(result.siteInfo);
        }
    }

    const getCategories = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}/categories`);
        result = await result.json();
        if (result.status) {
            setCategories(result.data);
        }
    };

    const searchResult = async (e) => {
        setSearchBoxActive(true);
        if(e.length>0){
            let result = await fetch(`${process.env.REACT_APP_BASE_URL}/search/${e}`);
            result = await result.json();
            if (result.status) {
                setSearchData(result.data);
            }
        }
        else{
            setSearchData([]);
            setSearchBoxActive(false);
        }
    };

    // const {pathname} = useLocation();
    const toggleSidenav = () => {
        setIsopen(!isOpen);
    }

    const toggleSearchBar = () => {
        setSearchActive(!searchActive);
    }

    return (
        <>
            {
                loadedData ? (
                    <>
                        <header className="Header">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header-topbar-content">
                                            {/* socials */}
                                            <div className="cstm-socials">
                                                <Socials data={siteInfo} />
                                            </div>

                                            <div className='Language-bx'>
                                                <span onClick={toggleSearchBar} className='Search-bx-flex' >
                                                    <input type="search" placeholder='Search' />
                                                    <SearchRoundedIcon />
                                                </span>
                                            </div>
                                            
                                            <div className="cstm-contact-infos">
                                                <ul>
                                                    <li><TtySharpIcon /><a href={"tel:" + siteInfo.primaryPhone}>{siteInfo.primaryPhone}</a></li>
                                                    <li><MailOutlineSharpIcon /><a href={"mailto:" + siteInfo.primaryMail}>{siteInfo.primaryMail}</a>
                                                    </li>
                                                    <li><HistorySharpIcon /><span className='text-white'>Mon-Sat 9:00 Am - 05:Pm</span>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <nav className='Navbar'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='mainmenu-wrapper'>
                                            <div className='logo-box'>
                                                <Link to={'/'}><img src={process.env.REACT_APP_BASE_URL + 'images/' + siteInfo.logo} alt={siteInfo.compName} title={siteInfo.compName} /></Link>
                                            </div>
                                            {/* <div className='col-1'></div> */}
                                            <div className='Mainmenu'>
                                                {/* menu list appear here */}
                                                <MenuList data={props.data} categories={categories} closeMenu={setIsopen} />
                                            </div>
                                            <span onClick={toggleSidenav} className='menuBtn'><i className="fa-solid fa-bars-staggered"></i></span>
                                            <BtnLink Href="/contact" addClass='' btnName="Get Quotation" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </nav>
                        {/* menu for mobile*/}
                        <div className={isOpen ? 'phone-nav-overlay active' : 'phone-nav-overlay'}>
                            <span onClick={toggleSidenav} className='close-nav'><i className="fa-solid fa-xmark"></i></span>
                            <div className='phone-nav'>
                                <div className='logo-box'>
                                    <Link to={'/'}><img onClick={toggleSidenav} src={process.env.REACT_APP_BASE_URL + 'images/' + siteInfo.logo} alt={siteInfo.compName} title={siteInfo.compName} /></Link>
                                </div>
                                {/* menu list appear here for mobile*/}
                                <MenuList categories={categories} closeMenu={setIsopen} />
                            </div>
                            <div>
                                {/* socials */}
                                <div className="cstm-socials"><Socials /></div>
                            </div>
                        </div>

                          {/* Search bar */}
                          <div className={searchActive ? "Search-bar active" : "Search-bar "}>
                            <div onClick={toggleSearchBar} className="search-ovrly-btn"></div>
                            <span onClick={toggleSearchBar} className="search-close"><i className="fa-solid fa-xmark"></i></span>
                            <div className="container">
                                <div className='Search-bx-flex' >
                                    <input type="search" onChange={(e) => searchResult(e.target.value)} placeholder='Search' />
                                    <SearchRoundedIcon />
                                </div>
                                <div className={searchBoxActive ?"searched-pd-box d-block" : "searched-pd-box d-none"}>
                                    <div className="row">
                                        {
                                            searchData.resultPd
                                                ?
                                                searchData.resultPd.map((value) =>
                                                    <div key={value._id} className="col-lg-3 col-md-4 col-sm-6">
                                                        <Link to={'/' + value.slug} className="searched-pd">
                                                            <img src={process.env.REACT_APP_BASE_URL + "images/products/"+value.img} alt={value.name} />
                                                            <div className="scrch-pd-detail">
                                                                <Link to={'/' + value.slug} className='pd-nme' >{value.name}</Link>
                                                                <p className="pd-srch-desc">
                                                                   {Parser().parse(value.description)}
                                                                </p>
                                                                <Link to={'/' + value.slug} className='pd-scrch-btn' >View Details</Link>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                )
                                                :
                                                null

                                        }
                                        {/* {
                                            searchData.resultCat
                                                ?
                                                searchData.resultPd.map((value) =>
                                                    <div key={value._id} className="col-lg-3 col-md-4 col-sm-6">
                                                        <Link to={'/' + value.slug} className="searched-pd">
                                                            <img src={process.env.REACT_APP_BASE_URL + "images/caotegories/"+value.img} alt={value.name} />
                                                            <div className="scrch-pd-detail">
                                                                <Link to={'/' + value.slug} className='pd-nme' >{value.name}</Link>
                                                                <p className="pd-srch-desc">
                                                                   {Parser().parse(value.description)}
                                                                </p>
                                                                <Link to={'/' + value.slug} className='pd-scrch-btn' >View Details</Link>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                )
                                                :
                                                null

                                        } */}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) :(
                    <PreLoader />
                )
        }

        </>
    );

}


export default Nav
