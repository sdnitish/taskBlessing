import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import '../Admin.css';
import BreadCrumb from '../components/BreadCrumb';
import AddData from '../components/AddData';
// import AddDataEditor from '../components/AddDataEditor';
// import Jodit from '../components/Jodit';

const TestimonialData = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [name, setName] = useState('');
    const [textField1, setTextField1] = useState('');
    const [textField2, setTextField2] = useState('');
    const [file, setFile] = useState('');
    const [description, setDescription] = useState('');

    const [defaultDescription, setDefaultDescription] = useState('');

    // const setContent = (content) => {
    //     setDescription(content);
    // }

    const getTestimonial = async (id) => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}adminTestimonial/` + id)
        result = await result.json();

        if (result.status) {
            setName(result.testimonial.name);
            setTextField1(result.testimonial.textField1);
            setTextField2(result.testimonial.textField2);
            setDescription(result.testimonial.description);
            setDefaultDescription(result.testimonial.description);
        }
    }

    useEffect(() => {
        if (params._id) {
            getTestimonial(params._id);
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

        const url = `${process.env.REACT_APP_BASE_URL}adminSaveTestimonial`;

        let result = await fetch(
            url,
            {
                method: "POST",
                body: data,
            }
        );

        result = await result.json();
        if (result.status) {
            navigate('/admin/testimonial');
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
                        <BreadCrumb pageName="Add / Update Testimonials" link="/admin/testimonial" btnName="Manage Testimonials" />
                        <form onSubmit={submitHandler} className='add_data'>
                            <div className='row'>
                                <div className='col-12'>
                                    <AddData Label="Testi Image" changeFunction={setFile} inputType="file" />
                                </div>
                                <div className='col-12'>
                                    <AddData changeFunction={setName} Label="Testi Name" inputType="text" Placeholder="Name" value={name} />
                                </div>
                                <div className='col-12'>
                                    <AddData changeFunction={setTextField1} Label="Testi Position" inputType="text" Placeholder="Text" value={textField1} />
                                </div>
                                <div className='col-12'>
                                    <AddData changeFunction={setTextField2} Label="Other Titles" inputType="text" Placeholder="Text" value={textField2} />
                                </div>
                                <div className='col-12'>
                                    <div className='row mt-4'>
                                        <div className='col-12 textarea-box'>
                                            <label htmlFor="">Testimonials messages :</label>
                                            <textarea
                                                name=""
                                                onChange={(e) => setDescription(e.target.value)}
                                                cols="30"
                                                rows="10"
                                                placeholder='Review Message'
                                                defaultValue={description}
                                            >
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    {/* <AddDataEditor Label="Testimonials messages" Editor={<Jodit value={defaultDescription} description={setContent} />} /> */}
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

export default TestimonialData
