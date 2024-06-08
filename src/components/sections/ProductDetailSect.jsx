import { React } from 'react';
import SectionTitle from '../SectionTitle';
import { Parser } from 'html-to-react'

const ProductDetailSect = (props) => {

    return (
        <section className='sect-space'>
            <div className='container'>
                <div className="">
                    <div className="abt-floated">
                       <img className='w-100' src={process.env.REACT_APP_BASE_URL + "images/products/" + props.product.img} alt={props.product.name} title={props.product.name} />
                    </div>
                    <SectionTitle smTitle="Service Details" hTwoTitle={props.hTwoTitle} mainTitle={props.product.shortDescription} />
                    {Parser().parse(props.product.description)}
                    {Parser().parse(props.product.extraDescription)}
                </div>
            </div>

        </section>
    )
}

export default ProductDetailSect
