import React from 'react'

export const MainContainer = () => {
  return (
    <>
      <div className='main_vector'></div>
    <div className='main_container'>
    
        <div className="left">
            <div className='claim_quotes'>Claim a Free Quote</div>
            <div className='main_title'><span>Get started</span> on fulfiling <br />  your Dubai or UAE dream.</div>
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

    
    </>
  )
}
