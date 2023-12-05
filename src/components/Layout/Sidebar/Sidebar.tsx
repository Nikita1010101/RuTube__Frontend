'use client'

import { FC, useState } from 'react'
import cn from 'classnames'

import styles from './Sidebar.module.scss'
import { TfiMenuAlt } from 'react-icons/tfi'
import { privateRoutes } from './Sidebar.data'
import { MenuItem } from './Menu-item/MenuItem'
import { userApi } from '@/store/user/user.api'
import { SubscriptionItem } from './Subscription-item/Subscription-item'

export const Sidebar: FC = () => {
  const [isSidebar, setIsSidebar] = useState<boolean>(false)
  const { data: subscriptions } = userApi.useGetAllSubscriptionsQuery(1)

  return (
    <div className={cn(styles.sidebar, { [styles.active]: isSidebar })}>
      <div className={styles.openBtn}>
        <TfiMenuAlt onClick={() => setIsSidebar(prev => !prev)} />
      </div>
      <h3>Меню</h3>
      <div className={styles.sidebarItems}>
        {privateRoutes.map(item => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
      <hr />
      <h2>Мои подписки</h2>
      <div className={styles.subscriptions}>
        {subscriptions?.map(user => (
          <SubscriptionItem key={user.id} {...user} />
        ))}
      </div>
      <h4>© RUTUBE 2.0 Никиты Тимофеева</h4>
    </div>
  )
}
