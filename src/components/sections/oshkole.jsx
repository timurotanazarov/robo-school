import React from 'react'
import ImgMain from '../../../public/imgs/oshkoleimg.png'

function oshkole() {
  return (
    <section id='oshkole' className="oshkole">
      <div className="container">
        <div className="oshkole-row">
          <div className="oshkole-content">
            <h2>ROBO SCHOOL</h2>
            <p>Курсы повышения квалификации по робототехнике для педагогов начальной школы</p>
            <button>Записаться на курс</button>
          </div>
          <div className="oshkole-img">
            <img src={ImgMain} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default oshkole