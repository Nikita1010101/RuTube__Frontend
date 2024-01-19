'use client'

import { FC, useState } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'

import styles from './Register-form.module.scss'
import {
  VALIDATE_EMAIL,
  VALIDATE_NAME,
  VALIDATE_PASSWORD,
} from '@/constants/reg-ext.constant'
import { useActions } from '@/hooks/use-actions'
import { IRegisterForm } from './Register-form.interface'

export const RegisterForm: FC<IRegisterForm> = ({ setIsForm }) => {
  const [isRegistration, setIsRegistration] = useState<boolean>(false)
  const {
    register: inputRegister,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { login, registration } = useActions()

  const onSubmit: SubmitHandler<FieldValues> = ({ email, name, password }) => {
    isRegistration
      ? registration({ email, name, password })
      : login({ email, password })

    setIsForm(false)
  }
  return (
    <div
      onClick={(event) => event.stopPropagation()}
      className={styles.registerForm}
    >
      <h2>{isRegistration ? 'Регистрация' : 'Вход'}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isRegistration && (
          <input
            type="text"
            placeholder="Полное имя"
            className={errors.name && styles.active}
            {...inputRegister('name', {
              required: true,
              // pattern: VALIDATE_NAME,
            })}
          />
        )}
        <input
          type="email"
          placeholder="Эл. почта"
          className={(errors.email || errors.password) && styles.active}
          {...inputRegister('email', {
            required: true,
            // pattern: VALIDATE_EMAIL,
          })}
        />
        <input
          type="password"
          placeholder="Пароль"
          className={(errors.email || errors.password) && styles.active}
          {...inputRegister('password', {
            required: true,
            // pattern: VALIDATE_PASSWORD,
          })}
        />
        <button type="submit">
          {isRegistration ? 'Зарегестрироваться' : 'Войти'}
        </button>
        <span onClick={() => setIsRegistration((prev) => !prev)}>
          {!isRegistration ? 'Зарегестрироваться' : 'Войти'}
        </span>
      </form>
    </div>
  )
}
