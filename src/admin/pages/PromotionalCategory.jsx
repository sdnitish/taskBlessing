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

function PromotionalCategory() {

    const [promotionalCategories, setPromotionalCategory] = useState([]);

    const render = () => {
        getPromotionalCategory();
    }

    useEffect(() => {
        getPromotionalCategory();
    }, []);

    const getPromotionalCategory = async () => {
        let result = await fetch(process.env.REACT_APP_BASE_URL + "adminPromotionalCategories");
        result = await result.json();
        setPromotionalCategory(result);
    }

    const th = [
        { name: '#' },
        { name: 'Name' },
        { name: 'Status' },
        { name: 'Action' }
    ];

    let td = [];
    if (promotionalCategories.status) {
        promotionalCategories.result.map((value, index) =>
            td.push(
                [
                    index + 1,
                    value.name,
                    <SwitchBtn checked={value.isActive} url={process.env.REACT_APP_BASE_URL + "adminChangeActivePromotionalCategory/" + value._id} />,
                    <div className='d-flex gap-2 justify-content-center'>
                        <Link to={"/admin/promotionalCategory/data/" + value._id} className='btn btn-primary'>Edit</Link>
                        <DeleteBtn deleteAndRender={render} url={process.env.REACT_APP_BASE_URL + "adminDeletePromotionalCategory/" + value._id} />
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
                        <BreadCrumb pageName="Promotional Categories" link="/admin/promotionalCategory/data" btnName="Add Category" />
                        <TableCommon tblData={<DynamicTable thData={th} tdData={td} />} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PromotionalCategory