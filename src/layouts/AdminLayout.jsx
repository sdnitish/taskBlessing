import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../admin/pages/Dashboard';
import SiteInfo from '../admin/pages/SiteInfo';
import Banner from '../admin/pages/Banner';
import BannerData from '../admin/pages/BannerData';
import Pages from '../admin/pages/Pages';
import PageData from '../admin/pages/PageData';

import Login from '../pages/Login';
import Product from '../admin/pages/Product';
import ProductData from '../admin/pages/ProductData';
import Category from '../admin/pages/Category';
import CategoryData from '../admin/pages/CategoryData';
import Testimonials from '../admin/pages/Testimonials';
import TestimonialData from '../admin/pages/TestimonialData';
import PromotionalCategory from '../admin/pages/PromotionalCategory';
import PromotionalCategoryData from '../admin/pages/PromotionalCategoryData';
import KeywordInCity from '../admin/pages/KeywordInCity';
import OurPresenceInCity from '../admin/pages/OurPresenceInCity';

import PrivateComponent from '../components/PrivateComponent';
import Location from '../admin/pages/Location';
import LocationData from '../admin/pages/LocationData';
import ParentLocation from '../admin/pages/ParentLocation';
import ParentLocationData from '../admin/pages/ParentLocationData';
import Lead from '../admin/pages/Lead';
import Jobs from '../admin/pages/Jobs';
import JobsData from '../admin/pages/JobsData';

function SiteLayout() {
    return (
        <Routes>
            <Route element={<PrivateComponent />} >
                <Route path='/admin/dashboard' element={<Dashboard />} />
                <Route path='/admin/site-info' element={<SiteInfo />} />

                <Route path='/admin/banner' element={<Banner />} />
                <Route path='/admin/banner/data' element={<BannerData />} />
                <Route path='/admin/banner/data/:_id' element={<BannerData />} />

                <Route path='/admin/pages' element={<Pages />} />
                {/* <Route path='/admin/banner/data' element={<BannerData />} /> */}
                <Route path='/admin/page/data/:_id' element={<PageData />} />

                <Route path='/admin/product' element={<Product />} />
                <Route path='/admin/product/data' element={<ProductData />} />
                <Route path='/admin/product/data/:_id' element={<ProductData />} />

                <Route path='/admin/category' element={<Category />} />
                <Route path='/admin/category/data' element={<CategoryData />} />
                <Route path='/admin/category/data/:_id' element={<CategoryData />} />

                <Route path='/admin/testimonial' element={<Testimonials />} />
                <Route path='/admin/testimonial/data' element={<TestimonialData />} />
                <Route path='/admin/testimonial/data/:_id' element={<TestimonialData />} />

                <Route path='/admin/promotionalCategory' element={<PromotionalCategory />} />
                <Route path='/admin/promotionalCategory/data' element={<PromotionalCategoryData />} />
                <Route path='/admin/promotionalCategory/data/:_id' element={<PromotionalCategoryData />} />

                <Route path='/admin/keywordInCity' element={<KeywordInCity />} />
                <Route path='/admin/ourPresenceInCity' element={<OurPresenceInCity />} />

                <Route path='/admin/location' element={<Location />} />
                <Route path='/admin/location/data' element={<LocationData />} />
                <Route path='/admin/location/data/:_id' element={<LocationData />} />

                <Route path='/admin/parentLocation' element={<ParentLocation />} />
                <Route path='/admin/parentLocation/data' element={<ParentLocationData />} />
                <Route path='/admin/parentLocation/data/:_id' element={<ParentLocationData />} />

                <Route path='/admin/lead' element={<Lead />} />

                <Route path='/admin/jobs' element={<Jobs />} />
                <Route path='/admin/jobs/data' element={<JobsData />} />
                <Route path='/admin/jobs/data/:_id' element={<JobsData />} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/admin' element={<Login />} />
        </Routes>
    )
}

export default SiteLayout