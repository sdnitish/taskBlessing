import React, { useState, useEffect } from 'react';
import ContactSect from '../components/sections/ContactSect';
import BreadCrumb from '../components/sections/BreadCrumb';
import SubdomainSec from '../components/sections/SubdomainSec';
import HelmetComp from '../components/HelmetComp';
import Nav from '../components/nav/Nav';
import { useParams } from 'react-router-dom';
import Footer from '../components/sections/Footer';

function Subdomain(props) {

    const param = useParams();

    const [subdomain, setSubdomain] = useState([]);

    useEffect(() => {
        getSubdomain();
    }, [param]);

    const getSubdomain = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}subdomain/${props.categorySlug}/${props.productSlug}`);
        result = await result.json();
        if (result.status) {
            setSubdomain(result.subdomain);
        }
    }

    return (
        <>
            <HelmetComp metaData={subdomain} />
            <Nav data={subdomain} />
            <BreadCrumb name={subdomain.shortDescription} />
            <SubdomainSec data={subdomain} hTwoTitle={subdomain.shortDescription} />
            <ContactSect />
            <Footer />
        </>
    )
}

export default Subdomain