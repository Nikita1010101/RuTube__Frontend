'use client'

import React, { FC, PropsWithChildren, ReactNode } from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import styles from './Layout.module.scss'
import { Navbar } from './Navbar/Navbar'
import { Sidebar } from './Sidebar/Sidebar'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

export const Layout: FC<PropsWithChildren<{ children: ReactNode }>> = ({ children }) => {
  return (
    <>
      <ProgressBar
        height='3px'
        color='#29d'
        delay={200}
        options={{ showSpinner: false, easing: 'ease', speed: 500 }}
        shallowRouting
      />
      <Provider store={store}>
        <Navbar />
        <main className={styles.home}>
          <Sidebar />
          {children}
        </main>
      </Provider>
    </>
  )
}
