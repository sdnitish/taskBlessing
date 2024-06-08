import React, { useEffect, useState } from 'react';
import Nav from '../components/nav/Nav';
import CompanyProfile from '../components/sections/CompanyProfile';
import BreadCrumb from '../components/sections/BreadCrumb';
import ContactSect from '../components/sections/ContactSect';
import HelmetComp from '../components/HelmetComp';
import Footer from '../components/sections/Footer';

const About = () => {

  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    getAboutData();
  }, []);

  const getAboutData = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}about`);
    result = await result.json();
    if (result.status) {
      setAboutData(result.about);
    }
  }

  return (
    <>
      <HelmetComp metaData={aboutData} />
      <Nav />
      <BreadCrumb name={aboutData.name} />
      <CompanyProfile pageData={aboutData} />
      <ContactSect />
      <Footer />
    </>
  )
}

export default About
