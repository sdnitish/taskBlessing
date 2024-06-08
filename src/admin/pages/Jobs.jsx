import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import BreadCrumb from '../components/BreadCrumb';
import '../Admin.css';
import SwitchBtn from '../components/SwitchBtn';
import TableCommon from '../components/TableCommon';
import DynamicTable from '../components/DynamicTable';
import DeleteBtn from '../components/DeleteBtn';

function Jobs() {

    const [jobs, setJobs] = useState([]);

    const render = () => {
        getJobs();
    }

    useEffect(() => {
        getJobs();
    }, []);

    const getJobs = async () => {
        let result = await fetch(process.env.REACT_APP_BASE_URL + "adminJobs");
        result = await result.json();
        setJobs(result);
    }

    const th = [
        { name: '#' },
        { name: 'Name' },
        { name: 'Openings' },
        { name: 'Status' },
        { name: 'Action' }
    ];

    let td = [];
    if (jobs.status) {
        jobs.result.map((value, index) =>
            td.push(
                [
                    index + 1,
                    value.postName,
                    value.openings,
                    <SwitchBtn checked={value.isActive} url={process.env.REACT_APP_BASE_URL + "adminChangeActiveJobs/" + value._id} />,
                    <div className='d-flex gap-2 justify-content-center'>
                        <Link to={"/admin/jobs/data/" + value._id} className='btn btn-primary'>Edit</Link>
                        <DeleteBtn deleteAndRender={render} url={process.env.REACT_APP_BASE_URL + "deleteJobs/" + value._id} />
                    </div>
                ]
            )
        )
    }

    return (
        <section className='admin_container'>
            <Nav />
            <div className='sidebar_with_content'>
                <div className='sidebar_box'>
                    <Sidebar />
                </div>
                <div className='content_box'>
                    <div className='content_container'>
                        <BreadCrumb pageName="Jobs" link="/admin/jobs/data" btnName="Add Jobs"/>
                        <TableCommon tblData={<DynamicTable thData={th} tdData={td} />} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Jobs