'use client'

import { FC, useState } from 'react'
import { CircleUser } from 'lucide-react'
import cn from 'classnames'

import { useTypedSelector } from '@/hooks/use-typed-selector'

import styles from './Profile-avatar.module.scss'
import { RegisterForm } from './Register-form/Register-form'
import { ProfileOptions } from './Profile-options/Profile-options'

export const ProfileAvatar: FC = () => {
  const [isForm, setIsForm] = useState<boolean>(false)
  const { profile } = useTypedSelector((state) => state.auth)

  return (
    <>
      <div
        className={styles.profile}
        title={profile ? 'Мой канал' : 'Авторизация'}
      >
        <CircleUser
          size={45}
          onClick={() => setIsForm(true)}
          className={styles.avatar}
        />
      </div>
      <div
        onClick={() => setIsForm(false)}
        className={cn(styles.formWrapper, { [styles.active]: isForm })}
      >
        {profile ? <ProfileOptions /> : <RegisterForm setIsForm={setIsForm} />}
      </div>
    </>
  )
}
