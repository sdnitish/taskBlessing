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

function Category() {

    const [categories, setCategories] = useState([]);

    const render = () => {
        getCategories();
    }

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        let categories_res = await fetch(`${process.env.REACT_APP_BASE_URL}adminCategories`)
        categories_res = await categories_res.json();
        if (categories_res.status) {
          setCategories(categories_res.categories);
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
        categories.map((value, index) =>
            td.push(
                [
                    index + 1,
                    <img className='img-one' src={process.env.REACT_APP_BASE_URL + "images/icons/" + value.icon} />,
                    value.name,
                    <SwitchBtn checked={value.isActive} url={process.env.REACT_APP_BASE_URL + "adminChangeActiveCategory/" + value._id} />,
                    <div className='d-flex gap-2 justify-content-center'>
                        <Link to={"/admin/category/data/" + value._id} className='btn btn-primary'>Edit</Link>
                        <DeleteBtn deleteAndRender={render} url={process.env.REACT_APP_BASE_URL + "adminDeleteCategory/" + value._id} />
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
                        <BreadCrumb pageName="Category" link="/admin/category/data" btnName="Add Category" />
                        <TableCommon tblData={<DynamicTable thData={th} tdData={td} />} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category