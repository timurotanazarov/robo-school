import React, { useEffect, useState } from 'react'
import CardImg1 from '../../../public/imgs/marina.jpg'
import CardImg2 from '../../../public/imgs/maksim.jpg'
import CardImg3 from '../../../public/imgs/kons.jpg'
import FacebookIcon from '../../assets/icons/FacebookIcon'
import InstagramIcon from '../../assets/icons/InstagramIcon'

function treneri() {
  return (
    <section id='treneri' className="treneri">
      <div className="container">
        <div className="treneri-row">
          <h2 className="treneri-title">Профессиональные тренеры</h2>
            <div className="treneri-cards">
              <div className="treneri-card">
                <img src={CardImg1} alt="" />
                <h3>Ирина Лайм</h3>
                <p>преподаватель по робототехнике</p>
                <div className="treneri-card__icons">
                  <a href=""><FacebookIcon /></a>
                  <a href=""><InstagramIcon /></a>
                </div>
              </div>
              <div className="treneri-card">
                <img src={CardImg2} alt="" />
                <h3>Константин Назаров</h3>
                <p>преподаватель по робототехнике</p>
                <div className="treneri-card__icons">
                  <a href=""><FacebookIcon /></a>
                  <a href=""><InstagramIcon /></a>
                </div>
              </div>
              <div className="treneri-card">
                <img src={CardImg3} alt="" />
                <h3>Максим Петров</h3>
                <p>преподаватель по программированию</p>
                <div className="treneri-card__icons">
                  <a href=""><FacebookIcon /></a>
                  <a href=""><InstagramIcon /></a>
                </div>              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default treneri