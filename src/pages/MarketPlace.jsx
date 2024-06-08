import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/sections/BreadCrumb'
import { Helmet } from "react-helmet";
import MarketPlaceSec from '../components/sections/MarketPlaceSec';
import Nav from '../components/nav/Nav';
import Footer from '../components/sections/Footer';

function MarketPlace() {

    const [marketPlace, setMarketPlace] = useState([]);

    useEffect(() => {
        getMarketPlace();
    }, []);

    const getMarketPlace = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}marketPlace`)
        result = await result.json();
        if (result.status) {
            setMarketPlace(result.data);
        }
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Market Place</title>
            </Helmet>
            <Nav />
            <BreadCrumb name="Market Place" />
            <MarketPlaceSec data={marketPlace} />
            <Footer />
        </>
    )
}

export default MarketPlace