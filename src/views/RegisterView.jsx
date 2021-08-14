import React from 'react'

const RegisterView = () => {
  return (
     <div>
      <h1>Страница регистрации</h1>

      <form  autoComplete="off">
        <label >
          Имя
          <input type="text" name="name"   />
        </label>

        <label >
          Почта
          <input
            type="email"
            name="email"
           
          />
        </label>

        <label >
          Пароль
          <input
            type="password"
            name="password"
          />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  )
}

export default RegisterView
