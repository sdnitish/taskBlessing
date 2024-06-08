import React from 'react'
import Nav from '../components/nav/Nav';
import BreadCrumb from '../components/sections/BreadCrumb'
import ContactSect from '../components/sections/ContactSect'
import Footer from '../components/sections/Footer';

const Contact = () => {
    
    return (
        <>
            <Nav />
            <BreadCrumb name="Contact Us" />
            <ContactSect />
            <Footer />
        </>
    )
}

export default Contact
