import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import '../Admin.css';
import Box from '../components/Box';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import InventoryIcon from '@mui/icons-material/Inventory';
import GradingIcon from '@mui/icons-material/Grading';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReviewsIcon from '@mui/icons-material/Reviews';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

function Dashboard() {

    const [dashboard, setDashboard] = useState([]);

    useEffect(() => {
        getDashboard();
    }, []);

    const getDashboard = async () => {
        let result = await fetch(process.env.REACT_APP_BASE_URL + "adminDashboard");
        result = await result.json();
        setDashboard(result);
    }

    const boxData = [
        {
            'title': 'Site Info',
            'heading': 'Information',
            'icon': <SettingsApplicationsIcon className='fs-1' />,
            'link': '/admin/site-info'
        },
        {
            'title': 'Banners',
            'heading': dashboard.bannerCount,
            'icon': <ViewCarouselIcon className='fs-1' />,
            'link': '/admin/banner'
        },
        {
            'title': 'Pages',
            'heading': dashboard.pageCount,
            'icon': <AutoStoriesIcon className='fs-1' />,
            'link': '/admin/pages'
        },
        {
            'title': 'Categories',
            'heading': dashboard.categoryCount,
            'icon': <FactCheckIcon className='fs-1' />,
            'link': '/admin/category'
        },
        {
            'title': 'Services',
            'heading': dashboard.productCount,
            'icon': <InventoryIcon className='fs-1' />,
            'link': '/admin/product'
        },
        {
            'title': 'Testimonials',
            'heading': dashboard.testimonialCount,
            'icon': <ReviewsIcon className='fs-1' />,
            'link': '/admin/testimonial'
        },
        {
            'title': 'Promotional Categories',
            'heading': dashboard.promotionalCategoryCount,
            'icon': <GradingIcon className='fs-1' />,
            'link': '/admin/promotionalCategory'
        },
        {
            'title': 'Keyword',
            'heading': "In City",
            'icon': <ApartmentIcon className='fs-1' />,
            'link': '/admin/keywordInCity'
        },
        {
            'title': 'Our Presence',
            'heading': "In City",
            'icon': <AddLocationAltIcon className='fs-1' />,
            'link': '/admin/ourPresenceInCity'
        },
        {
            'title': 'Location',
            'heading': dashboard.locationCount,
            'icon': <LocationOnIcon className='fs-1' />,
            'link': '/admin/location'
        },
        {
            'title': 'Parent Location',
            'heading': dashboard.parentLocationCount,
            'icon': <LocationOnIcon className='fs-1' />,
            'link': '/admin/parentLocation'
        },
        {
            'title': 'Leads',
            'heading': dashboard.leadCount,
            'icon': <LeaderboardIcon className='fs-1' />,
            'link': '/admin/lead'
        },
        // {
        //     'title': 'Jobs',
        //     'heading': dashboard.jobsCount,
        //     'icon': <WorkHistoryIcon className='fs-1' />,
        //     'link': '/admin/jobs'
        // }
    ];

    return (
        <section className='admin_container'>
            <Nav />
            <div className='sidebar_with_content'>
                <div className='sidebar_box'>
                    <Sidebar />
                </div>
                <div className='content_box'>
                    <div className='row'>
                        {
                            boxData.map((value, index) =>
                                <Box
                                    key={index}
                                    title={value.title}
                                    heading={value.heading}
                                    icon={value.icon}
                                    link={value.link}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard