import React, { useEffect, useState } from 'react'
import Logo from '../../../public/imgs/Logo.png'
import PhoneIcon from '../../assets/icons/Phoneicon'
import MenuIcon from '../../assets/icons/MenuIcon'
import CloseIcon from '../../assets/icons/CloseIcon';

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
            <a href="#oshkole">О школе</a>
            <a href="#treneri">Тренеры</a>
            <a href="#stoimost">Стоимость</a>
            <a href="#contacts">Контакты</a>
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
        <h2 onClick={toggleDrawer}>Закрыть</h2>
        <a onClick={toggleDrawer} href="#oshkole" >О школе</a>
        <a onClick={toggleDrawer} href="#treneri">Тренеры</a>
        <a onClick={toggleDrawer} href="#stoimost">Стоимость</a>
        <a onClick={toggleDrawer} href="#contacts">Контакты</a>
      </div>
    </div>
  )
}

export default header;