import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/sections/BreadCrumb'
import HelmetComp from '../components/HelmetComp';
import Nav from '../components/nav/Nav';
import KeywordInCitySec from '../components/sections/KeywordInCitySec'
import { useParams } from 'react-router-dom';
import Footer from '../components/sections/Footer';
import ContactSect from '../components/sections/ContactSect';

function KeywordInCity(props) {

    const param = useParams();

    const [keywordInCity, setKeywordInCity] = useState([]);

    useEffect(() => {
        getKeywordInCity();
    }, [param]);

    const getKeywordInCity = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}keywordInCity/${props.locationSlug}/${props.productSlug}`);
        result = await result.json();
        if (result.status) {
            setKeywordInCity(result.keywordInCity);
        }
    }

    return (
        <>
            <HelmetComp metaData={keywordInCity} />
            <Nav data={{ slug: props.locationSlug }} />
            <BreadCrumb name={keywordInCity.shortDescription} />
            <KeywordInCitySec data={keywordInCity}  hTwoTitle={keywordInCity.shortDescription}/>
            <ContactSect/>
            <Footer />
        </>
    )
}

export default KeywordInCity