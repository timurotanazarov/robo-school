import React from 'react'

function stoimost() {
  return (
    <section id='stoimost' className="stoimost">
      <div className="container">
        <div className="stoimost-row">
          <h1>Выберите нужный пакет</h1>
          <div className="stoimost-cards">
            <div className="stoimost-card__wrap">
              <div className="stoimost-card">
                <h3>— PRO —</h3>
                <div>
                  <h2>20.000 ₽</h2>
                  <p>УМК по робототетхнике <br /> и программированию</p>
                </div>
                <button>Оставить заявку</button>
              </div>
            </div>
            <div className="stoimost-card__wrap">
              <div className="stoimost-card">
                <h3>— ROBO —</h3>
                <div>
                  <h2>15.000 ₽</h2>
                  <p>УМК по робототетхнике</p>
                </div>
                <button>Оставить заявку</button>
              </div>
            </div>
            <div className="stoimost-card__wrap">
              <div className="stoimost-card">
                <h3>— PROG —</h3>
                <div>
                  <h2>10.000 ₽</h2>
                  <p>УМК по программированию</p>
                </div>
                <button>Оставить заявку</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default stoimost