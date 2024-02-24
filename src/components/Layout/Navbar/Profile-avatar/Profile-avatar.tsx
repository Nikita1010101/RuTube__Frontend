'use client'

import { FC, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { FaUserAlt } from 'react-icons/fa'
import cn from 'classnames'

import styles from './Profile-avatar.module.scss'
import { RegisterForm } from './Register-form/Register-form'

export const ProfileAvatar: FC = () => {
  const [isForm, setIsForm] = useState<boolean>(false)
  // const { profile } = useAuth()
  const { replace } = usePathname()

  const checkUser = (): void => {
    // if (profile) replace('/my-channel')
    // else setIsForm(true)
  }

  return (
    <>
      <div className={styles.profile}>
        <FaUserAlt
          onClick={() => setIsForm(true)}
          className={styles.avatar}
          // title={profile ? 'Мой канал' : 'Авторизация'}
        />
      </div>
      <div
        onClick={() => setIsForm(false)}
        className={cn(styles.formWrapper, { [styles.active]: isForm })}
      >
        <RegisterForm setIsForm={setIsForm}/>
      </div>
    </>
  )
}
