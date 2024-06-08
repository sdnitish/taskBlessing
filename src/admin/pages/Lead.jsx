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

function Lead() {

    const [leads, setLeads] = useState([]);

    useEffect(() => {
        getLeads();
    }, []);

    const getLeads = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}adminLeads`);
        result = await result.json();
        setLeads(result);
    }

    const th = [
        { name: '#' },
        { name: 'Name' },
        { name: 'Email' },
        { name: 'Phone' },
        { name: 'Product' },
        { name: 'Company Name' },
        { name: 'Message' },
        { name: 'Address' },
        { name: 'IP' },
        { name: 'Date' },
    ];

    let td = [];
    if (leads.status) {
        leads.leads.map((value, index) =>
            td.push(
                [
                    index + 1,
                    value.name,
                    value.email,
                    value.phone,
                    value.product,
                    value.companyName,
                    value.message,
                    value.address,
                    value.ip,
                    value.date,
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
                        <BreadCrumb pageName="Leads" />
                        <TableCommon tblData={<DynamicTable thData={th} tdData={td} />} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lead