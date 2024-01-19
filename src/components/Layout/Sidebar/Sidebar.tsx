'use client'

import { FC, useEffect, useState } from 'react'
import cn from 'classnames'

import styles from './Sidebar.module.scss'
import { TfiMenuAlt } from 'react-icons/tfi'
import { privateRoutes, publicRoutes } from './Sidebar.data'
import { MenuItem } from './Menu-item/Menu-item'
import { SubscriptionItem } from './Subscription-item/Subscription-item'
import { subscriptionApi } from '@/store/subscription/subscription.api'
import { useTypedSelector } from '@/hooks/use-typed-selector'
import { ISidebarRoutes } from './Sidebar.interface'

export const Sidebar: FC = () => {
  const [isSidebar, setIsSidebar] = useState<boolean>(false)
  const { profile } = useTypedSelector((state) => state.auth)
  const [sidebarRoutes, setSidebarRoutes] = useState<ISidebarRoutes[]>()
  const { data: users } = subscriptionApi.useSubscriptionGetAllQuery(null, {
    skip: !profile
  })

  useEffect(() => {
    const sidebarRoutes = profile ? privateRoutes : publicRoutes
    setSidebarRoutes(sidebarRoutes)
  }, [profile])

  return (
    <div className={cn(styles.sidebar, { [styles.active]: isSidebar })}>
      <div className={styles.openBtn}>
        <TfiMenuAlt onClick={() => setIsSidebar((prev) => !prev)} />
      </div>
      <h3>Меню</h3>
      <div className={styles.sidebarItems}>
        {sidebarRoutes?.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
      <hr />
      <h2>Мои подписки</h2>
      <div className={styles.subscriptions}>
        {users?.map((user) => (
          <SubscriptionItem key={user.id} {...user} />
        ))}
      </div>
      <h4>© RUTUBE 2.0 Никиты Тимофеева</h4>
    </div>
  )
}
