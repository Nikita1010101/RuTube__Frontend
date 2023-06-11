import { FC, useState } from 'react'
import cn from 'classnames'
import styles from './Profile.module.scss'

import { FaUserAlt } from 'react-icons/fa'

import { RegisterForm } from './Register-form/RegisterForm'

import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'

export const Profile: FC = () => {
  const [isForm, setIsForm] = useState(false)
  const { profile } = useAuth()
  const { replace } = useRouter()

  const checkUser = (): void => {
    if (profile) replace('/my-channel')
    else setIsForm(true)
  }

  return (
    <>
      <div className={styles.profile}>
        <FaUserAlt
          onClick={checkUser}
          className={styles.avatar}
          title={profile ? 'Мой канал' : 'Авторизация'}
        />
      </div>
      <div
        onClick={() => setIsForm(false)}
        className={cn(styles.formWrapper, { [styles.active]: isForm })}
      >
        <RegisterForm />
      </div>
    </>
  )
}
