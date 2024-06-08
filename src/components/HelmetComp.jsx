import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import { Parser } from 'html-to-react'

const HelmetComp = (props) => {

    const [siteInfo, setSiteInfo] = useState([]);

    const getSiteInfo = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}siteInfo`);
        result = await result.json();
        if (result.status) {
            setSiteInfo(result.siteInfo);
        }
    }

    useEffect(() => {
        getSiteInfo();
    }, []);

    return (
        <Helmet>
            {/* <meta name="twitter:card" content="summary" />

            <meta name="twitter:site" content="@instantwebtech" />

            <meta name="twitter:title" content={props.metaData.metaTitle} />

            <meta name="twitter:description" content={props.metaData.metaDescription} />

            <meta name="twitter:image" content="https://www.instantwebtech.com/images/banners/banner-1-1711952132465.webp" />

            <meta property="og:title" content={props.metaData.metaTitle} />

            <meta property="og:site_name" content="Instant Web Technology PVT. LTD." />

            <meta property="og:url" content={window.location.href} />

            <meta property="og:description" content={props.metaData.metaDescription} />

            <meta property="og:type" content="website" />

            <meta property="og:image" content="https://www.instantwebtech.com/images/banners/banner-1-1711952132465.webp" /> */}

            <link href={process.env.REACT_APP_BASE_URL + 'images/' + siteInfo.favicon} rel="shortcut icon" type="image/png" />
            {Parser().parse(siteInfo.googleAnalytic)}
            <title>{props.metaData.metaTitle}</title>
            <meta name="keywords" content={props.metaData.metaKeywords} />
            <meta name="description" content={props.metaData.metaDescription} />

            {/* <script type="application/ld+json">
                {`
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "${`${props.metaData.metaTitle}`}",
                    "url": "${`${window.location.href}`}",
                    "logo": "${`${process.env.REACT_APP_BASE_URL + 'images/' + siteInfo.logo}`}",
                    "image": "https://www.instantwebtech.com/images/banners/banner-1-1711952132465.webp",
                    "description": "${`${props.metaData.metaDescription}`}",
                    "telephone": "${`${siteInfo.primaryPhone}`}",
                    "pricerange":"${`${siteInfo.primaryPhone}`} - Call Now | Mail US: ${`${siteInfo.primaryMail}`}",
                    "geo": {
                        "@type": "GeoCoordinates",
                    "latitude": 28.6367633,
                    "longitude": 77.0935242
                        },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "bestRating": "5",
                    "ratingCount": "1200"
                        },
                    "address": {
                        "@type": "PostalAddress",
                    "addressLocality": "Delhi",
                    "addressRegion": "Delhi",
                    "streetAddress": " ${`${siteInfo.primaryAddress}`}",
                    "postalCode": "110018"
                        },
                    "openingHours": [
                    "Mon-Sat 09:30AM - 06.30PM"
                    ]`}
            </script>

            <script type="application/ld+json">
                {`
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "${`${props.metaData.metaTitle}`}",
            "image": "${`${process.env.REACT_APP_BASE_URL + 'images/' + siteInfo.logo}`}",
            "description": "${`${props.metaData.metaDescription}`}",
            "brand": {
                "@type": "Brand",
                "name": "${`${props.metaData.metaTitle}`}"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "",
                "ratingCount": "1200"
            }
            `}
            </script>

            <script type="application/ld+json">
                {
                    `
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "${`${props.metaData.metaTitle}`}",
            "alternateName": "${`${props.metaData.metaTitle}`}",
            "url": "${`${window.location.href}`}",
            "logo": "${`${process.env.REACT_APP_BASE_URL + 'images/' + siteInfo.logo}`}",
            "sameAs": "${`${window.location.href}`}"
            `
                }
            </script> */}

        </Helmet>
    )
}

export default HelmetComp
