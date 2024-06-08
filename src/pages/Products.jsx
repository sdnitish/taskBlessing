import React from 'react'
import Nav from '../components/nav/Nav';
import BreadCrumb from '../components/sections/BreadCrumb'
import ContactSect from '../components/sections/ContactSect'
import ProductSection from '../components/sections/ProductSection';
// import HelmetComp from '../components/HelmetComp';
import Footer from '../components/sections/Footer';

const Products = () => {
  return (
    <>
      <Nav />
      <BreadCrumb name="All Services" />
      <ProductSection />
      <ContactSect />
      <Footer />
    </>
  )
}

export default Products
