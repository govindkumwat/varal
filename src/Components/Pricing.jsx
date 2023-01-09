import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export const Pricing = () => {


    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const companyIncludes = [{
      title: 'Attestation Charges'
    }, {
      title: 'Registered Agent'
    }, {
      title: 'Registered Office'
    },
    {
      title: 'Varal Administrative'
    }, {
      title: 'Preparing Statutory File'
    }, {
      title: 'Liasing with Registration Authorities'
    }, {
      title: 'Due Diligence Appraisal'
    }, {
      title: 'Keeping The Register'
    }, {
      title: 'Seal Charges'
    }, {
      title: 'Certificate of Good Standing'
    }
    ]

    return (
      <>
        <div className='price_container slider'>

          <div className='vector-price'></div>
          <div className="price_container_vector"></div>
          <div className="pricing-title">
            Most <span> popular affordable pricing </span> per jurisdictions are brought to you to kick off your adventure.
          </div>
          <div className='vector-price2'>
          </div>

          <div className="priceCard mobileslider">

            <Slider {...settings}>
            <div className='card-1 first mobile slider1'>
              <div className="price-companyName">
                AJMAN OFFSHORE
              </div>
              <div className="price-highlitedprice">
                <span>$2,997</span>

                One Time Payment

              </div>
              <div className='com_includes'>
                Ajman Offshore New Company formation includes
              </div>
              <div className='inclueslist'>
                <ul>
                  {companyIncludes.map((data, index) => {
                    return (
                      <li key={index} className='featurelist'> <img src="/images/Group35.png" alt="" />   {data?.title} </li>
                    )
                  })}
                </ul>
              </div>
              <button >Continue</button>
            </div>
            {/* card two */}

            <div className='card-1 middle'>
              <div className="price-companyName">
                RAK ICC
              </div>
              <div className="price-highlitedprice middlespan" >
                <span className='middlespan'>$2,997</span>

                <div className='middlespan' >One Time Payment</div>

              </div>
              <div className='com_includes'>
                Ajman Offshore New Company formation includes
              </div>
              <div className='inclueslist'>
                <ul>
                  {companyIncludes.map((data, index) => {
                    return (
                      <li key={index} className='featurelist'> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="m7.75 12 2.83 2.83 5.67-5.66" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>  {data?.title} </li>
                    )
                  })}
                </ul>

              </div>
              <button className='middle_button' >Continue</button>
            </div>

            {/* card 3 */}
            <div className='card-1 slider3' >
              <div className="price-companyName">
                SHARJAH MEDIA CITY
              </div>
              <div className="price-highlitedprice">
                <span >$4,124</span>

                One Time Payment

              </div>
              <div className='com_includes'>
                Ajman Offshore New Company formation includes
              </div>
              <div className='inclueslist'>
                <ul>
                  {companyIncludes.map((data, index) => {
                    return (
                      <li key={index} className='featurelist'> <img src="/images/Group35.png" alt="" />   {data?.title} </li>
                    )
                  })}
                </ul>
              </div>
              <button >Continue</button>
            </div>
            </Slider>
            </div>

            <div className="priceCard desktop">
            {/* card one */}
            <div className='card-1 first'>
              <div className="price-companyName">
                AJMAN OFFSHORE
              </div>
              <div className="price-highlitedprice">
                <span>$2,997</span>

                One Time Payment

              </div>
              <div className='com_includes'>
                Ajman Offshore New Company formation includes
              </div>
              <div className='inclueslist'>
                <ul>
                  {companyIncludes.map((data, index) => {
                    return (
                      <li key={index} className='featurelist'> <img src="/images/Group35.png" alt="" />   {data?.title} </li>
                    )
                  })}
                </ul>
              </div>
              <button >Continue</button>
            </div>
            {/* card two */}

            <div className='card-1 middle'>
              <div className="price-companyName">
                RAK ICC
              </div>
              <div className="price-highlitedprice middlespan" >
                <span className='middlespan'>$2,997</span>

                <div className='middlespan' >One Time Payment</div>

              </div>
              <div className='com_includes'>
                Ajman Offshore New Company formation includes
              </div>
              <div className='inclueslist'>
                <ul>
                  {companyIncludes.map((data, index) => {
                    return (
                      <li key={index} className='featurelist'> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="m7.75 12 2.83 2.83 5.67-5.66" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>  {data?.title} </li>
                    )
                  })}
                </ul>

              </div>
              <button className='middle_button' >Continue</button>
            </div>

            {/* card 3 */}
            <div className='card-1'>
              <div className="price-companyName">
                SHARJAH MEDIA CITY
              </div>
              <div className="price-highlitedprice">
                <span >$4,124</span>

                One Time Payment

              </div>
              <div className='com_includes'>
                Ajman Offshore New Company formation includes
              </div>
              <div className='inclueslist'>
                <ul>
                  {companyIncludes.map((data, index) => {
                    return (
                      <li key={index} className='featurelist'> <img src="/images/Group35.png" alt="" />   {data?.title} </li>
                    )
                  })}
                </ul>
              </div>
              <button >Continue</button>
            </div>
           
          </div>
         
        </div>
        
      </>
    )
  }
