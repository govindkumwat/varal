import React from 'react'

export const Footer = () => {


var currentTime = new Date()


var month = currentTime.getMonth() + 1


var day = currentTime.getDate()


var year = currentTime.getFullYear()


  return (
    <>
    
    <div className="footer-vector"></div>

    <div className="footerText">
        Varaluae {year} © All right reserved
    </div>
    </>
  )
}
