import React, { useState, useEffect, lazy, Suspense } from 'react';
import Nav from '../components/nav/Nav';
import PreLoader from '../components/sections/PreLoader';
import Testimonial from '../components/sections/Testimonial';
import ContactSect from '../components/sections/ContactSect';
import HelmetComp from '../components/HelmetComp';
import Footer from '../components/sections/Footer';
const WhyChoose = lazy(() => import('../components/sections/WhyChoose'));
const CompanyProfile = lazy(() => import('../components/sections/CompanyProfile'));
const ProductSlider = lazy(() => import('../components/sections/ProductSlider'));
const ProductSection = lazy(() => import('../components/sections/ProductSection'));
const HomeBanner = lazy(() => import('../components/sections/HomeBanner'));

const Home = () => {

  const [homeData, setHomeData] = useState([]);
  const [loadedData, setLoadedData] = useState(null);

  useEffect(() => {
    getHomeData();
  }, []);

  const getHomeData = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}home`);
    result = await result.json();
    setLoadedData(result);
    if (result.status) {
      setHomeData(result.home);
    }
  }

  return (
    <>
      {loadedData ? (
        <>
          <Nav />
          <Suspense fallback={<PreLoader />}>
            <HomeBanner />
          </Suspense>
          <Suspense fallback={<PreLoader />}>
            <CompanyProfile pageData={homeData} homeTitle={homeData.shortDescription} />
          </Suspense>
          <Suspense fallback={<PreLoader />}>
            <ProductSection />
          </Suspense>
          <WhyChoose />
          <ContactSect />
          <Footer />

        </>
      ) : (
        <PreLoader />
      )}


    </>
  )
}

export default Home
