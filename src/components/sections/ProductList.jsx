import React, { useEffect, useState } from 'react'
import MarketBtn from '../MarketBtn';
import SectionTitle from '../SectionTitle';
import BreadCrumb from './BreadCrumb';
import Nav from '../nav/Nav';
import Footer from './Footer';

function ProductList(props) {

    const [products, setProduct] = useState([]);
    const [promotionalCategory, setPromotionalCategory] = useState([]);

    useEffect(() => {
        getProducts();
        getPromotionalCategory();
    }, []);

    const getPromotionalCategory = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}promotionalCategory/${props.slug}`);
        result = await result.json();
        if (result.status) {
            setPromotionalCategory(result.promotionalCategory);
        }
    }

    const getProducts = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}products`)
        result = await result.json();
        if (result.status) {
            setProduct(result.products);
        }
    }

    return (
        <>
            <Nav />
            <BreadCrumb name={promotionalCategory.name} />
            <section className='sect-space p-t30'>
                <div className='container'>
                    <div className='text-center'>
                        <SectionTitle smTitle='Products' mainTitle="Explore Products" />
                    </div>
                    <div className='row m-t30'>
                        {
                            products
                                ?
                                products.map((value, index) =>
                                    <div key={index} className='col-lg-3 col-md-4 col-sm-6 m-b20'>
                                        <MarketBtn Href={'/' + props.slug + '/' + value.slug} locationName={value.name} />
                                    </div>
                                )
                                :
                                null
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ProductList