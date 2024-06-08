import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import '../Admin.css';
import BreadCrumb from '../components/BreadCrumb';
import AddData from '../components/AddData';
import AddDataEditor from '../components/AddDataEditor';
import Jodit from '../components/Jodit';

function JobsData() {
    const navigate = useNavigate();
    const params = useParams();

    const [postName, setPostName] = useState('');
    // const [img, setImg] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [jobType, setJobType] = useState('');
    const [openings, setOpenings] = useState('');
    const [experience, setExperience] = useState('');
    const [notes, setNotes] = useState('');
    const [education, setEducation] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [defaultJobDescription, setDefaultJobDescription] = useState('');

    const setContent = (content) => {
        setJobDescription(content);
    }

    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [metaKeywords, setMetaKeywords] = useState('');

    const getJobs = async (id) => {
        let result = await fetch(process.env.REACT_APP_BASE_URL + "adminJobs/" + id)
        result = await result.json();

        if (result.status) {
            setPostName(result.job.postName);
            setCompanyName(result.job.companyName);
            setJobLocation(result.job.jobLocation);
            setSalary(result.job.salary);
            setJobType(result.job.jobType);
            setOpenings(result.job.openings);
            setExperience(result.job.experience);
            setNotes(result.job.notes);
            setEducation(result.job.education);
            setJobDescription(result.job.jobDescription);
            setDefaultJobDescription(result.job.defaultJobDescription);
        }
    }

    useEffect(() => {
        if (params._id) {
            getJobs(params._id);
        }
    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();

        let form = e.target;
        let data = new FormData(form);
        data.append('jobDescription', jobDescription);

        if (params._id) {
            data.append("id", params._id);
        }

        let result = await fetch(
            process.env.REACT_APP_BASE_URL + "adminSaveJobs",
            {
                method: "POST",
                body: data
            }
        );
        result = await result.json();

        if (result.status) {
            navigate('/admin/jobs');
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
                        <BreadCrumb pageName="Update Jobs" link="/admin/jobs" btnName="Manage Jobs" />
                        <form onSubmit={submitHandler} className='add_data'>
                            <div className='row'>
                                <div className='col-12'>
                                    <AddData changeFunction={setPostName} value={postName} Label="Job Position" inputType="text" Placeholder="Position for" name="postName" />
                                </div>
                                <div className='col-12'>
                                    <AddData changeFunction={setCompanyName} value={companyName} Label="Company Name" inputType="text" Placeholder="Company Name" name="companyName" />
                                </div>
                                <div className='col-12'>
                                    <AddData changeFunction={setJobLocation} value={jobLocation} Label="Job Location" inputType="text" Placeholder="Location" name="jobLocation" />
                                </div>
                                <div className='col-12'>
                                    <AddData changeFunction={setSalary} value={salary} Label="Salary" inputType="text" Placeholder="Salary" name="salary" />
                                </div>
                                <div className='col-12'>
                                    <AddData changeFunction={setJobType} value={jobType} Label="Job Type" inputType="text" Placeholder="Permanent / Part Time / Full Time" name="jobType" />
                                </div>
                                <div className='col-12'>
                                    <AddData changeFunction={setOpenings} value={openings} Label="Total Openings" inputType="text" Placeholder="Numbers" name="openings" />
                                </div>
                                <div className='col-12'>
                                    <AddData changeFunction={setExperience} value={experience} Label="Experience" inputType="text" Placeholder="Experience" name="experience" />
                                </div>
                                <div className='col-12'>
                                    <AddData changeFunction={setEducation} value={education} Label="Education" inputType="text" Placeholder="Education" name="education" />
                                </div>

                                <div className='col-12 textarea-box mt-3'>
                                    <label htmlFor="">Notes :</label>
                                    <textarea
                                        onChange={(e) => setNotes(e.target.value)}
                                        name="notes"
                                        cols="30" rows="10"
                                        placeholder='Any Notes'
                                        defaultValue={notes}
                                    >
                                    </textarea>
                                </div>
                                <div className='col-12'>
                                    <AddDataEditor Label="Job Description" Editor={<Jodit value={jobDescription} name="description" description={setContent} />} />
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

export default JobsData