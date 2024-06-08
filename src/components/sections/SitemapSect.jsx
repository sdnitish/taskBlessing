import React, { useState, useEffect } from 'react';
import SectionTitle from '../SectionTitle';
import MarketBtn from '../MarketBtn';

const SitemapSect = (props) => {

  return (
    <>
      <section className='sect-space p-t30'>
        <div className='container'>
          {/* <div className='text-center'><SectionTitle smTitle='Marketplace' mainTitle="Cursus quis condimentum nunc ultricies " /></div> */}
          {/* <div className='row m-t30'>
                <div className='col-lg-4 col-md-6 m-b20'><MarketBtn Href='' locationName='Market Heading' /></div>
                <div className='col-lg-4 col-md-6 m-b20'><MarketBtn Href='' locationName='Market Heading' /></div>
                <div className='col-lg-4 col-md-6 m-b20'><MarketBtn Href='' locationName='Market Heading' /></div>
            </div> */}
          <div className='row m-t30'>
            {
              props.sitemapData
                ?
                props.sitemapData.map((value, index) =>
                  <div key={index} className='col-lg-3 col-md-4 col-sm-6 m-b20'><MarketBtn Href={'/' + value.slug} locationName={value.name} />
                  </div>
                )
                :
                null
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default SitemapSect
