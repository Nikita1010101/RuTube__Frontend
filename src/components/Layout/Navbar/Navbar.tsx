'use client'

import React, { useEffect } from 'react'

import styles from './Navbar.module.scss'
import { Logo } from './Logo/Logo'
import { SearchInput } from './Search-input/Search-input'
import { ProfileAvatar } from './Profile-avatar/Profile-avatar'
import { useActions } from '@/hooks/use-actions'

export function Navbar() {
  const { refresh } = useActions()

  useEffect(() => {
    refresh()
  }, [])

  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchInput />
      <ProfileAvatar />
    </nav>
  )
}
