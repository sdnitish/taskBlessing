import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/sections/BreadCrumb'
import OurPresenceInCitySec from '../components/sections/OurPresenceInCitySec';
import HelmetComp from '../components/HelmetComp';
import Nav from '../components/nav/Nav';
import Footer from '../components/sections/Footer';
import ContactSect from '../components/sections/ContactSect';

function OurPresenceInCity(props) {

    const [ourPresenceInCity, setOurPresenceInCity] = useState([]);

    useEffect(() => {
        getOurPresenceInCity();
    }, []);

    const getOurPresenceInCity = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}ourPresenceInCity/${props.slug}`);
        result = await result.json();
        if (result.status) {
            setOurPresenceInCity(result.ourPresenceInCity);
        }
    }

    return (
        <>
            <HelmetComp metaData={ourPresenceInCity} />
            <Nav data={{ slug: props.slug }} />
            <BreadCrumb name={ourPresenceInCity.shortDescription} />
            <OurPresenceInCitySec data={ourPresenceInCity} hTwoTitle={ourPresenceInCity.shortDescription}/>
            <ContactSect />
            <Footer />
        </>
    )
}

export default OurPresenceInCity