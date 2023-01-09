import React from 'react'

export const MainContainer = () => {
  return (
    <>
      <div className='main_vector'></div>
    <div className='main_container'>
    
        <div className="left">
            <div className='claim_quotes'>Claim a Free Quote</div>
            <div className='main_title'><span>Get started</span> on fulfiling <br />  your Dubai or UAE dream.</div>
            <div className='illustration'>
           <img src="/images/ILLUSTRATION.png" alt="" />
        </div>
            <div className='com_location'>UAE and Offshore company</div>
            <div className='main_description'>We provide you with information about UAE and offshore company registration and help you setup your company with a bank accounts and visas.</div>
            <div className="company_action_btn" >
            <button className='create_company'>Start a Company</button>
            <button className='renew_company'>Renew a Company</button>
    </div>
        </div>
        <div className='right'>
           <img src="/images/ILLUSTRATION.png" alt="" />
        </div>
    </div>


    <div className="watch_video">
      <div>Watch the video about UAE or Offshore Company Registration</div>
      <img src="/images/Group_117.png" alt="" />
    </div>

    <div className="mission"> 
     <div className='mission_title'><span>Dedicated</span> <br /> to our misson we are</div>
     <div className='mission_description'>
      Our service include company formation & renewals, Trust & fiduciary, Tax Residency setup ith family, Bank accounts, Remote Management, Stock tranding platforms, Ownership solutions.
     </div>
    </div>

   
    
    </>
  )
}
