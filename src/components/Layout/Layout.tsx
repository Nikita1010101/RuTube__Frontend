'use client'

import React, { FC, PropsWithChildren, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

import { store } from '@/store/store'

import styles from './Layout.module.scss'
import { Navbar } from './Navbar/Navbar'
import { Sidebar } from './Sidebar/Sidebar'

const queryClient = new QueryClient()

export const Layout: FC<PropsWithChildren<{ children: ReactNode }>> = ({
  children,
}) => {
  return (
    <>
      <ProgressBar
        height="3px"
        color="#29d"
        delay={200}
        options={{ showSpinner: false, easing: 'ease', speed: 500 }}
        shallowRouting={false}
      />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <main className={styles.home}>
            <Sidebar />
            {children}
          </main>
        </QueryClientProvider>
      </Provider>
    </>
  )
}
