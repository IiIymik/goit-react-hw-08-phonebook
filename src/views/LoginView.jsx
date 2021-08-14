import React from 'react'

export default function LoginView() {
  return (
    <div>
      <h1>Страница логина</h1>

      <form  autoComplete="off">
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

        <button type="submit">Войти</button>
      </form>
    </div>
  )
}
