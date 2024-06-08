import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import '../Admin.css';
import BreadCrumb from '../components/BreadCrumb';
import AddData from '../components/AddData';
import AddDataEditor from '../components/AddDataEditor';
import Jodit from '../components/Jodit';

const BannerData = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [name, setName] = useState('');
    const [textField1, setTextField1] = useState('');
    const [textField2, setTextField2] = useState('');
    const [file, setFile] = useState('');
    const [description, setDescription] = useState('');

    const [defaultDescription, setDefaultDescription] = useState('');

    const setContent = (content) => {
        setDescription(content);
    }

    const getBanner = async (id) => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}adminBanner/` + id)
        result = await result.json();

        if (result.status) {
            setName(result.banner.name);
            setTextField1(result.banner.textField1);
            setTextField2(result.banner.textField2);
            setDescription(result.banner.description);
            setDefaultDescription(result.banner.description);
        }
    }

    useEffect(() => {
        if (params._id) {
            getBanner(params._id);
        }
    }, []);

    const submitHandler = async (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append("name", name);
        data.append("textField1", textField1);
        data.append("textField2", textField2);
        data.append("file", file);
        data.append("description", description);
        if (params._id) {
            data.append("id", params._id);
        }

        const url = `${process.env.REACT_APP_BASE_URL}adminSaveBanner`;

        let result = await fetch(
            url,
            {
                method: "POST",
                body: data,
            }
        );

        result = await result.json();
        if (result.status) {
            navigate('/admin/banner');
        }
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
                        <BreadCrumb pageName="Add / Update Banner" link="/admin/banner" btnName="Manage Banners" />
                        <form onSubmit={submitHandler} className='add_data'>
                            <div className='row'>
                                <div className='col-12'>
                                    <AddData changeFunction={setName} Label="Banner Name" inputType="text" Placeholder="Name" value={name} />
                                </div>
                                <div className='col-12'>
                                    <AddData changeFunction={setTextField1} Label="Text Fields One" inputType="text" Placeholder="Text" value={textField1} />
                                </div>
                                <div className='col-12'>
                                    <AddData changeFunction={setTextField2} Label="Text Fields Two" inputType="text" Placeholder="Text" value={textField2} />
                                </div>
                                <div className='col-12'>
                                    <AddData Label="Banner Image" changeFunction={setFile} inputType="file" />
                                </div>
                                <div className='col-12'>
                                    <AddDataEditor Label="Banner Description" Editor={<Jodit value={defaultDescription} description={setContent} />} />
                                    <div className='row justify-content-end'>
                                        <button className='btn btn-primary mt-2 float-right w-fit col-auto mx-2'>Save Data</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerData
