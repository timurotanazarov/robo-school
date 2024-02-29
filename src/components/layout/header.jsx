import React, { useEffect, useState } from 'react'
import Logo from '../../../public/imgs/Logo.png'
import PhoneIcon from '../../assets/icons/Phoneicon'
import MenuIcon from '../../assets/icons/MenuIcon'

function header() {
  const [modal, setModal] = useState(false);
  function toggleDrawer(){
      setModal(!modal)
  }
  
  useEffect(function(){
      toggleDrawer
  },[modal])

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
          <a href="tel:+998919990525" className="header-tel">+998&nbsp;(91)&nbsp;999-05-25</a>
          <div className="header-response__buttons">
            <a href="tel:+998919990525">
              <PhoneIcon />
            </a>
            <button onClick={toggleDrawer}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
      <div className={modal? 'header-drawer open' : 'header-drawer'}>
        <a href="">О школе</a>
        <a href="">Тренеры</a>
        <a href="">Стоимость</a>
        <a href="">Контакты</a>
      </div>
    </div>
  )
}

export default header;