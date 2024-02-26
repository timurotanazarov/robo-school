import React from 'react'
import Logo from '../../../public/imgs/Logo.png'

function header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-row">
          <div className="header-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="header-links">
            <a href="">О школе</a>
            <a href="">Тренеры</a>
            <a href="">Стоимость</a>
            <a href="">Контакты</a>
          </div>
          <a href="tel:+7 800 000 11 22" className="header-tel">+7 800 000 11 22</a>
        </div>
      </div>
    </div>
  )
}

export default header