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

function Location() {

    const [locations, setLocations] = useState([]);

    const render = () => {
        getLocations();
    }

    useEffect(() => {
        getLocations();
    }, []);

    const getLocations = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}adminLocations`);
        result = await result.json();
        if (result.status) {
            setLocations(result.locations);
        }
    }

    const th = [
        { name: '#' },
        { name: 'Name' },
        { name: 'Status' },
        { name: 'Action' }
    ];

    let td = [];
    locations.map((value, index) =>
        td.push(
            [
                index + 1,
                value.name,
                <SwitchBtn checked={value.isActive} url={process.env.REACT_APP_BASE_URL + "adminChangeActiveLocation/" + value._id} />,
                <div className='d-flex gap-2 justify-content-center'>
                    <Link to={"/admin/location/data/" + value._id} className='btn btn-primary'>Edit</Link>
                    <DeleteBtn deleteAndRender={render} url={process.env.REACT_APP_BASE_URL + "adminDeleteLocation/" + value._id} />
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
                        <BreadCrumb pageName="Locations" link="/admin/location/data" btnName="Add Location" />
                        <TableCommon tblData={<DynamicTable thData={th} tdData={td} />} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location