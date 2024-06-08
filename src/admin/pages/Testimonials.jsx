import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import BreadCrumb from '../components/BreadCrumb';
import '../Admin.css';
import './Banner.css';
import SwitchBtn from '../components/SwitchBtn';
import TableCommon from '../components/TableCommon';
import DynamicTable from '../components/DynamicTable';
import DeleteBtn from '../components/DeleteBtn';

function Testimonials() {

    const [testimonials, setTestimonials] = useState([]);

    const render = () => {
        getTestimonials();
    }

    useEffect(() => {
        getTestimonials();
    }, []);

    const getTestimonials = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}adminTestimonials`);
        result = await result.json();
        if (result.status) {
            setTestimonials(result.testimonials);
        }
    }

    const th = [
        { name: '#' },
        { name: 'Image' },
        { name: 'Name' },
        { name: 'Status' },
        { name: 'Action' }
    ];

    let td = [];

    testimonials.map((value, index) =>
        td.push(
            [
                index + 1,
                <img className='img-one' src={process.env.REACT_APP_BASE_URL + "images/testimonials/" + value.img} />,
                value.name,
                <SwitchBtn checked={value.isActive} url={process.env.REACT_APP_BASE_URL + "adminChangeActiveTestimonial/" + value._id} />,
                <div className='d-flex gap-2 justify-content-center'>
                    <Link to={"/admin/testimonial/data/" + value._id} className='btn btn-primary'>Edit</Link>
                    <DeleteBtn deleteAndRender={render} url={process.env.REACT_APP_BASE_URL + "adminDeleteTestimonial/" + value._id} />
                </div>
            ]
        )
    )


    return (
        <section className='admin_container'>
            <Nav />
            <div className='sidebar_with_content'>
                <div className='sidebar_box'>
                    <Sidebar />
                </div>
                <div className='content_box'>
                    <div className='content_container'>
                        <BreadCrumb pageName="Testimonials" link="/admin/testimonial/data" btnName="Add Testimonial" />
                        <TableCommon tblData={<DynamicTable thData={th} tdData={td} />} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials