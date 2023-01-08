import React from 'react'

export const Pricing = () => {

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
    <div className='price_container'>
        <div className='vector-price'></div>
      <div className="pricing-title">
        Most <span> popular affordable pricing </span> per jurisdictions are brought to you to kick off your adventure.
      </div>
      <div className='vector-price2'>
      </div>

      <div className="priceCard">
        <div className='card-1 '>
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
              return(
             <li key={index}  className='featurelist'> <img src="/images/Group35.png" alt="" />   {data?.title} </li>
            )})}
            </ul>
          </div>
          <button >Continue</button>
        </div>
        <div className='card-1 middle'>
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
        </div>
        <div className='card-1'>
          <div className="price-companyName">
          AJMAN OFFSHORE
          </div>
          <div className="price-highlitedprice">
         <span className='middlespan'>$2,997</span> 
          
          One Time Payment
          
          </div>
          <div className='com_includes'>
          Ajman Offshore New Company formation includes
          </div>
          <div className='inclueslist'>
            <ul>
            {companyIncludes.map((data, index) => {
              return(
             <li key={index} className='featurelist'> <img src="/images/Group35.png" alt="" />   {data?.title} </li>
            )})}
            </ul>
          </div>
          <button >Continue</button>
        </div>
      </div>
    </div>
    </>
  )
}
