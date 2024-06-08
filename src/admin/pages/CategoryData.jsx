import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import '../Admin.css';
import BreadCrumb from '../components/BreadCrumb';
import AddData from '../components/AddData';
import AddDataEditor from '../components/AddDataEditor';
import Jodit from '../components/Jodit';

function CategoryData() {
    const navigate = useNavigate();
    const params = useParams();

    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [icon, setIcon] = useState('');
    const [price, setPrice] = useState('');
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

    const getCategory = async (id) => {
        let result = await fetch(process.env.REACT_APP_BASE_URL + "adminCategory/" + id)
        result = await result.json();

        if (result.status) {
            setName(result.category.name);
            setPrice(result.category.price);
            setShortDescription(result.category.shortDescription);
            setDescription(result.category.description);
            setDefaultDescription(result.category.description);
            setExtraDescription(result.category.extraDescription);
            setDefaultExtraDescription(result.category.extraDescription);
            setMetaTitle(result.category.metaTitle);
            setMetaDescription(result.category.metaDescription);
            setMetaKeywords(result.category.metaKeywords);
        }
    }

    useEffect(() => {
        if (params._id) {
            getCategory(params._id);
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
            process.env.REACT_APP_BASE_URL + "adminSaveCategory",
            {
                method: "POST",
                body: data
            }
        );
        result = await result.json();

        if (result.status) {
            navigate('/admin/category');
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
                        <BreadCrumb pageName="Add Category" link="/admin/category" btnName="Manage Categories" />
                        <form onSubmit={submitHandler} className='add_data'>
                            <div className='row'>
                                {/* <div className='col-12'>
                                    <div className='add_box'>
                                        <div className='Label-box'>
                                            <span className='Lavel'>Product Category :</span>
                                        </div>
                                        <div className='Input-box'>
                                            <select name='parentLocationId'>
                                                <option value="">Select product Category</option>
                                                <option value="">Select product Category</option>
                                                <option value="">Select product Category</option>
                                                <option value="">Select product Category</option>
                                            </select>
                                        </div>
                                    </div>
                                </div> */}
                                <div className='col-12'>
                                    <AddData changeFunction={setName} value={name} Label="Service Category" inputType="text" Placeholder="Category Name" name="name" />
                                </div>
                                <div className='col-12'>
                                    <AddData changeFunction={setImg} Label="Service Image" name="img" inputType="file" />
                                </div>
                                <div className='col-12'>
                                    <AddData changeFunction={setIcon} Label="Service Icon" name="icon" inputType="file" />
                                </div>
                                {/* <div className='col-12'>
                                    <AddData changeFunction={setPrice} value={price} Label="Service Price" inputType="text" Placeholder="Service Price" name="price" />
                                </div> */}
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
                                {/* <div className='col-12'>
                                    <AddData changeFunction={setMetaTitle} value={metaTitle} Label="Meta Title" Placeholder="Meta Title" name="metaTitle" inputType="text" />
                                </div>
                                <div className='col-12 textarea-box mt-3 mb-2'>
                                    <label htmlFor="">Meta Description :</label>
                                    <textarea onChange={(e) => setMetaDescription(e.target.value)} value={metaDescription} name="metaDescription" cols="30" rows="10" placeholder='Meta Description'></textarea>
                                </div>
                                <div className='col-12 textarea-box mt-3 mb-2'>
                                    <label htmlFor="">Meta Keyword :</label>
                                    <textarea onChange={(e) => setMetaKeywords(e.target.value)} value={metaKeywords} name="metaKeywords" cols="30" rows="10" placeholder='Meta Keyword'></textarea>
                                </div> */}
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

export default CategoryData