import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import BreadCrumb from '../components/BreadCrumb';
import AddData from '../components/AddData';
import AddDataEditor from '../components/AddDataEditor';
import Jodit from '../components/Jodit';

function SiteInfo() {
    const [compName, setCompName] = useState('');
    const [primaryMail, setPrimaryMail] = useState('');
    const [secondaryMail, setSecondaryMail] = useState('');
    const [thirdMail, setThirdMail] = useState('');
    const [fourthMail, setFourthMail] = useState('');
    const [primaryPhone, setPrimaryPhone] = useState('');
    const [secondaryPhone, setSecondaryPhone] = useState('');
    const [thirdPhone, setThirdPhone] = useState('');
    const [fourthPhone, setFourthPhone] = useState('');
    const [logo, setLogo] = useState('');
    const [favicon, setFavicon] = useState('');
    const [primaryAddress, setPrimaryAddress] = useState('');
    const [secondaryAddress, setSecondaryAddress] = useState('');
    const [thirdAddress, setThirdAddress] = useState('');
    const [fourthAddress, setFourthAddress] = useState('');
    const [facebook, setFacebook] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');
    const [linkedIn, setLinkedIn] = useState('');
    const [pinterest, setPinterest] = useState('');
    const [youtube, setYoutube] = useState('');
    const [googleAnalytic, setGoogleAnalytic] = useState('');
    const [footerText, setFooterText] = useState('');
    const [defaultFooterText, setDefaultFooterText] = useState('');

    const setContent = (content) => {
        setFooterText(content);
    }

    useEffect(() => {
        getSiteInfo();
    }, []);

    const getSiteInfo = async () => {
        let result = await fetch(process.env.REACT_APP_BASE_URL + "adminSiteInfo");
        result = await result.json();
        if (result.status) {
            setCompName(result.siteInfo.compName);
            setPrimaryMail(result.siteInfo.primaryMail);
            setSecondaryMail(result.siteInfo.secondaryMail);
            setThirdMail(result.siteInfo.thirdMail);
            setFourthMail(result.siteInfo.fourthMail);
            setPrimaryPhone(result.siteInfo.primaryPhone);
            setSecondaryPhone(result.siteInfo.secondaryPhone);
            setThirdPhone(result.siteInfo.thirdPhone);
            setFourthPhone(result.siteInfo.secondaryfourthPhone);
            setLogo(result.siteInfo.logo);
            setFavicon(result.siteInfo.favicon);
            setPrimaryAddress(result.siteInfo.primaryAddress);
            setSecondaryAddress(result.siteInfo.secondaryAddress);
            setThirdAddress(result.siteInfo.thirdAddress);
            setFourthAddress(result.siteInfo.fourthAddress);
            setFacebook(result.siteInfo.facebook);
            setWhatsapp(result.siteInfo.whatsapp);
            setTwitter(result.siteInfo.twitter);
            setInstagram(result.siteInfo.instagram);
            setLinkedIn(result.siteInfo.linkedIn);
            setPinterest(result.siteInfo.pinterest);
            setYoutube(result.siteInfo.youtube);
            setGoogleAnalytic(result.siteInfo.googleAnalytic);
            setFooterText(result.siteInfo.footerText);
            setDefaultFooterText(result.siteInfo.footerText);
        }
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        toast.success('Updated Successfully.');

        const data = new FormData();
        data.append("compName", compName);
        data.append("primaryMail", primaryMail);
        data.append("secondaryMail", secondaryMail);
        data.append("thirdMail", thirdMail);
        data.append("fourthMail", fourthMail);
        data.append("primaryPhone", primaryPhone);
        data.append("secondaryPhone", secondaryPhone);
        data.append("thirdPhone", thirdPhone);
        data.append("fourthPhone", fourthPhone);
        data.append("logo", logo);
        data.append("favicon", favicon);
        data.append("primaryAddress", primaryAddress);
        data.append("secondaryAddress", secondaryAddress);
        data.append("thirdAddress", thirdAddress);
        data.append("fourthAddress", fourthAddress);
        data.append("facebook", facebook);
        data.append("whatsapp", whatsapp);
        data.append("twitter", twitter);
        data.append("instagram", instagram);
        data.append("linkedIn", linkedIn);
        data.append("pinterest", pinterest);
        data.append("youtube", youtube);
        data.append("googleAnalytic", googleAnalytic);
        data.append("footerText", footerText);

        const url = process.env.REACT_APP_BASE_URL + "adminUpdateSiteInfo";

        fetch(
            url,
            {
                method: "POST",
                body: data,
            }
        );
    }

    return (
        <section className='admin_container'>
            <Toaster position="top-right" />
            <Nav />
            <div className='sidebar_with_content'>
                <div className='sidebar_box'>
                    <Sidebar />
                </div>
                <div className='content_box'>
                    <div className='shadow w-100 bg-white rounded p-4'>
                        <BreadCrumb pageName="Site Information" />
                        <form onSubmit={submitHandler} className='add_data'>
                            <div className='row'>
                                <div className='col-12'><h5 className='px-2 text-primary'>Site Information</h5></div>
                                <div className='col-md-6'>
                                    <AddData
                                        value={compName}
                                        changeFunction={setCompName}
                                        Label="Company Name"
                                        inputType="text"
                                        Placeholder="Name"
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <AddData
                                        value={primaryMail}
                                        changeFunction={setPrimaryMail}
                                        Label="Primary Email"
                                        inputType="text"
                                        Placeholder="Email"
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <AddData
                                        value={secondaryMail}
                                        changeFunction={setSecondaryMail}
                                        Label="Secondary Email"
                                        inputType="text"
                                        Placeholder="Email"
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <AddData
                                        value={thirdMail}
                                        changeFunction={setThirdMail}
                                        Label="Third Mail"
                                        inputType="text"
                                        Placeholder="Email"
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <AddData
                                        value={fourthMail}
                                        changeFunction={setFourthMail}
                                        Label="Fourth Mail"
                                        inputType="text"
                                        Placeholder="Email"
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <AddData
                                        value={primaryPhone}
                                        changeFunction={setPrimaryPhone}
                                        Label="Primary Phone"
                                        inputType="text"
                                        Placeholder="Phone"
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <AddData
                                        value={secondaryPhone}
                                        changeFunction={setSecondaryPhone}
                                        Label="Secondary Phone"
                                        inputType="text"
                                        Placeholder="Phone"
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <AddData
                                        value={thirdPhone}
                                        changeFunction={setThirdPhone}
                                        Label="Third Phone"
                                        inputType="text"
                                        Placeholder="Phone"
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <AddData
                                        value={fourthPhone}
                                        changeFunction={setFourthPhone}
                                        Label="Fourth Phone"
                                        inputType="text"
                                        Placeholder="Phone"
                                    />
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <AddData
                                            changeFunction={setLogo}
                                            Label="Company Logo"
                                            inputType="file"
                                        />
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="row align-items-center h-100">
                                            <img className='img-logos-admn' src={process.env.REACT_APP_BASE_URL + 'images/' + logo} alt={compName} title={compName} />
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-md-6'>
                                        <AddData
                                            changeFunction={setFavicon}
                                            Label="Favicon"
                                            inputType="file"
                                        />
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="row align-items-center h-100">
                                            <img className='img-logos-admn' src={process.env.REACT_APP_BASE_URL + 'images/' + favicon} alt={compName} title={compName} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='row mt-4'>
                                <div className='col-12'><h5 className='px-2 text-primary'>Company Address</h5></div>
                                <div className='col-12 textarea-box mt-4'>
                                    <label htmlFor="">Primary Address :</label>
                                    <textarea
                                        name=""
                                        onChange={(e) => setPrimaryAddress(e.target.value)}
                                        cols="30"
                                        rows="10"
                                        placeholder='Address'
                                        defaultValue={primaryAddress}
                                    >
                                    </textarea>
                                </div>
                                <div className='col-12 textarea-box mt-4'>
                                    <label htmlFor="">Secondary Address :</label>
                                    <textarea
                                        name=""
                                        onChange={(e) => setSecondaryAddress(e.target.value)}
                                        cols="30"
                                        rows="10"
                                        placeholder='Secondary Address'
                                        defaultValue={secondaryAddress}
                                    >
                                    </textarea>
                                </div>
                                <div className='col-md-6'>
                                    <AddData
                                        value={thirdAddress}
                                        changeFunction={setThirdAddress}
                                        Label="Address Three"
                                        inputType="text"
                                        Placeholder="Address"
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <AddData
                                        value={fourthAddress}
                                        changeFunction={setFourthAddress}
                                        Label="Address Four"
                                        inputType="text"
                                        Placeholder="Address"
                                    />
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-12'><h5 className='px-2 text-primary'>Social Media</h5></div>
                                <div className='col-md-6'>
                                    <AddData
                                        value={facebook}
                                        changeFunction={setFacebook}
                                        Label="Facebook"
                                        inputType="text"
                                        Placeholder="Link"
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <AddData
                                        value={whatsapp}
                                        changeFunction={setWhatsapp}
                                        Label="Whatsapp"
                                        inputType="text"
                                        Placeholder="Link"
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <AddData
                                        value={twitter}
                                        changeFunction={setTwitter}
                                        Label="Twitter"
                                        inputType="text"
                                        Placeholder="Link"
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <AddData
                                        value={instagram}
                                        changeFunction={setInstagram}
                                        Label="Instagram"
                                        inputType="text"
                                        Placeholder="Link"
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <AddData
                                        value={linkedIn}
                                        changeFunction={setLinkedIn}
                                        Label="LinkedIn"
                                        inputType="text"
                                        Placeholder="Link"
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <AddData
                                        value={pinterest}
                                        changeFunction={setPinterest}
                                        Label="Pinterest"
                                        inputType="text"
                                        Placeholder="Link"
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <AddData
                                        value={youtube}
                                        changeFunction={setYoutube}
                                        Label="Youtube"
                                        inputType="text"
                                        Placeholder="Link"
                                    />
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-12'><h5 className='px-2 text-primary'>Google Analytics</h5></div>
                                <div className='col-12 textarea-box'>
                                    <label htmlFor="">Google Analytic :</label>
                                    <textarea
                                        name=""
                                        onChange={(e) => setGoogleAnalytic(e.target.value)}
                                        cols="30"
                                        rows="10"
                                        placeholder='Code'
                                        defaultValue={googleAnalytic}
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-12'>
                                    <h5 className='px-2 text-primary'>Footer Content</h5>
                                </div>
                                <div className='col-12'>
                                    <AddDataEditor
                                        Label="Footer Text"
                                        // Editor={<Tinymce value={defaultFooterText} description={setContent} />}
                                        Editor={<Jodit value={defaultFooterText} description={setContent} />}
                                    />
                                    <div className='row justify-content-end'>
                                        <button
                                            type='submit'
                                            className='btn btn-primary mt-2 float-right w-fit col-auto mx-2'
                                        >
                                            Save Data
                                        </button>
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

export default SiteInfo