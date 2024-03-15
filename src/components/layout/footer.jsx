import React from 'react'
import Logo from '../../../public/imgs/Logo.png'

function footer() {
  return (
    <div className="footer">
        <div className="footer-row">
          <div className="footer-logo">
            <img src={Logo} />
          </div>
          <div className="footer-tel">
            <a href="tel:+998919990525">+998 (91) 999-05-25</a>
            <h3>© ROBO.SCHOOL</h3>
            <h4>Developed and designed by D1lshadovich</h4>
          </div>
        </div>
      </div>
  )
}

export default footer;