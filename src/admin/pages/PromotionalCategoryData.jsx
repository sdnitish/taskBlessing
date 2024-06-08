import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import '../Admin.css';
import BreadCrumb from '../components/BreadCrumb';
import AddData from '../components/AddData';
import AddDataEditor from '../components/AddDataEditor';
import Jodit from '../components/Jodit';

function PromotionalCategoryData() {
    const navigate = useNavigate();
    const params = useParams();

    const [name, setName] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [description, setDescription] = useState('');
    const [defaultDescription, setDefaultDescription] = useState('');

    const setContent = (content) => {
        setDescription(content);
    }

    const [extraDescription, setExtraDescription] = useState('');
    const [extraDefaultDescription, setDefaultExtraDescription] = useState('');
    const setExtraContent = (content) => {
        setExtraDescription(content);
    }
    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [metaKeywords, setMetaKeywords] = useState('');

    const getPromotionalCategory = async (id) => {
        let result = await fetch(process.env.REACT_APP_BASE_URL + "adminPromotionalCategory/" + id)
        result = await result.json();

        if (result.status) {
            setName(result.promotionalCategory.name);
            setShortDescription(result.promotionalCategory.shortDescription);
            setDescription(result.promotionalCategory.description);
            setDefaultDescription(result.promotionalCategory.description);
            setExtraDescription(result.promotionalCategory.extraDescription);
            setDefaultExtraDescription(result.promotionalCategory.extraDescription);
            setMetaTitle(result.promotionalCategory.metaTitle);
            setMetaDescription(result.promotionalCategory.metaDescription);
            setMetaKeywords(result.promotionalCategory.metaKeywords);
        }
    }

    useEffect(() => {
        if (params._id) {
            getPromotionalCategory(params._id);
        }
    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();

        let form = e.target;
        let data = new FormData(form);
        data.append('description', description);
        data.append('extraDescription', extraDescription);
        if (params._id) {
            data.append("id", params._id);
        }

        let result = await fetch(
            process.env.REACT_APP_BASE_URL + "adminSavePromotionalCategory",
            {
                method: "POST",
                body: data
            }
        );
        result = await result.json();

        if (result.status) {
            navigate('/admin/promotionalCategory');
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
                        <BreadCrumb pageName="Add Product" link="/admin/promotionalCategory" btnName="Manage Category" />
                        <form onSubmit={submitHandler} className='add_data'>
                            <div className='row'>
                                <div className='col-12'>
                                    <AddData changeFunction={setName} value={name} Label="Product Name" inputType="text" Placeholder="Name" name="name" />
                                </div>
                                <div className='col-12 textarea-box'>
                                    <label htmlFor="">Short Description :</label>
                                    <textarea
                                        onChange={(e) => setShortDescription(e.target.value)}
                                        name="shortDescription"
                                        cols="30" rows="10"
                                        placeholder='Short Description'
                                        defaultValue={shortDescription}
                                    >
                                    </textarea>
                                </div>
                                <div className='col-12'>
                                    <AddDataEditor Label="Description" Editor={<Jodit value={defaultDescription} name="description" description={setContent} />} />
                                </div>
                                <div className='col-12'>
                                    <AddDataEditor Label="Extra Description" Editor={<Jodit value={extraDefaultDescription} name="extraDescription" description={setExtraContent} />} />
                                </div>
                                <div className='col-12'>
                                    <AddData changeFunction={setMetaTitle} value={metaTitle} Label="Meta Title" Placeholder="Meta Title" name="metaTitle" inputType="text" />
                                </div>
                                <div className='col-12 textarea-box mt-3 mb-2'>
                                    <label htmlFor="">Meta Description :</label>
                                    <textarea onChange={(e) => setMetaDescription(e.target.value)} value={metaDescription} name="metaDescription" cols="30" rows="10" placeholder='Meta Description'></textarea>
                                </div>
                                <div className='col-12 textarea-box mt-3 mb-2'>
                                    <label htmlFor="">Meta Keyword :</label>
                                    <textarea onChange={(e) => setMetaKeywords(e.target.value)} value={metaKeywords} name="metaKeywords" cols="30" rows="10" placeholder='Meta Keyword'></textarea>
                                </div>
                                <div className='row justify-content-end'>
                                    <button type='submit' className='btn btn-primary mt-2 float-right w-fit col-auto mx-2'>Save Data</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PromotionalCategoryData