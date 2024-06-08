import React, { useState, useEffect } from 'react';
import Nav from '../components/nav/Nav';
import BreadCrumb from '../components/sections/BreadCrumb'
import SitemapSect from '../components/sections/SitemapSect'
import ContactSect from '../components/sections/ContactSect'
import HelmetComp from '../components/HelmetComp';
import Footer from '../components/sections/Footer';

const Sitemap = () => {

  const [sitemaps, setSitemaps] = useState([]);

  useEffect(() => {
    getPages();
  },[]);

  const getPages = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}sitemaps`)
    result = await result.json();
    if (result.status) {
      setSitemaps(result.sitemaps);
    }
  }

  return (
    <>
      <HelmetComp metaData={sitemaps} />
      <Nav />
      <BreadCrumb name="Sitemap" />
      <SitemapSect sitemapData={sitemaps} />
      <ContactSect />
      <Footer />
    </>
  )
}

export default Sitemap
