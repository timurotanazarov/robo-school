import React from 'react'

function contacts() {
  return (
    <section id='contacts' className="contacts">
      <div className="container">
        <div className="contacts-row">
          <div className="contacts-content">
            <h3>Запишитесь на курс со скидкой 10%</h3>
            <p>Акция действительна до 21 марта 2024 года</p>
          </div>
          <form className="contacts-forms">
            <label>
              <input type="text" placeholder='Имя' />
            </label>
            <label id='tel'>
              <input type="Number" name="name" placeholder='Телефон'/>
            </label>
            <label>
              <input type="email" placeholder='E-mail' />
            </label>
            <button type='submit'>Оформить заявку</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default contacts