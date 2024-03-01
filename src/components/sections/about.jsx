import React from 'react'

function about() {
  return (
    <div className="about">
        <div className="container">
            <div className="about-row">
                <h4 className="about-title"><span>Robo School — </span>учреждение для формирования кадрового педагогического резерва в сфере робототехники и программирования</h4>
                <div className="about-cards">
                    <div className="about-card">
                        <h3 className="about-card__title">10</h3>
                        <p className="about-card__subtitle">УМК по различным направлениям по робототехнике</p>
                    </div>
                    <div className="about-card">
                        <h3 className="about-card__title">20</h3>
                        <p className="about-card__subtitle">Школ, в которых запущена робототехника</p>
                    </div>
                    <div className="about-card">
                        <h3 className="about-card__title">100</h3>
                        <p className="about-card__subtitle">Педагогов прошедших курсы повышения квалификации</p>
                    </div>
                    <div className="about-card">
                        <h3 className="about-card__title">10 000</h3>
                        <p className="about-card__subtitle">Обученных детей на базе собственных центров</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about