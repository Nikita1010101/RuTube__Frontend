import { FC, useState } from 'react'
import cn from 'classnames'
import styles from './Sidebar.module.scss'

import { TfiMenuAlt } from 'react-icons/tfi'

import { SidebarItem } from './Sidebar-item/SidebarItem'
import { Subscription } from './Subscription/Subscription'

import { useAuth } from '@/hooks/useAuth'

import { publicRoutes, privateRoutes } from './Sidebar.data'
import { userApi } from '@/store/api/user.api'

export const Sidebar: FC = () => {
  const [isSidebar, setIsSidebar] = useState<boolean>(false)
  const { profile } = useAuth()
  const { data: usersSubscriptions } = userApi.useGetAllSubscriptionsQuery(
    Number(profile?.id)
  )

  return (
    <div className={cn(styles.sidebar, { [styles.active]: isSidebar })}>
      <div className={styles.openBtn}>
        <TfiMenuAlt onClick={() => setIsSidebar((prev) => !prev)} />
      </div>
      <h3>Меню</h3>
      <div className={styles.sidebarItems}>
        {(profile ? privateRoutes : publicRoutes).map((item) => (
          <SidebarItem key={item.id} {...item} />
        ))}
      </div>
      <hr />
      <h2>{profile && 'Мои подписки'}</h2>
      <div className={styles.subscriptions}>
        {usersSubscriptions?.map((user) => (
          <Subscription key={user.id} {...user} />
        ))}
      </div>
      <h4>© RUTUBE 2.0 Никиты Тимофеева</h4>
    </div>
  )
}
