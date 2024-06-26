import React from 'react'

const PreLoader = () => {
    return (
        <div className="preloader">
        <div className="preloader-inner">
            <div className="loader">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="subline"></div>
                <div className="subline"></div>
                <div className="subline"></div>
                <div className="subline"></div>
                <div className="subline"></div>
                <div className="loader-circle-1">
                    <div className="loader-circle-2"></div>
                </div>
                <div className="needle"></div>
                <div className="loading">Loading</div>
            </div>
        </div>
    </div>
    )
}

export default PreLoader
