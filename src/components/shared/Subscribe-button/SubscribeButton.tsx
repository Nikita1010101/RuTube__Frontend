'use client'

import { FC } from 'react'
import { UserPlus } from 'lucide-react'
import cn from 'classnames'

import { useThrottling } from '@/hooks/use-throttling'
import { useTypedSelector } from '@/hooks/use-typed-selector'
import { subscriptionApi } from '@/store/subscription/subscription.api'

import styles from './SubscribeButton.module.scss'
import { ISubscribeButton } from './SubscribeButton.interface'

export const SubscribeButton: FC<ISubscribeButton> = ({ userId }) => {
  const { profile } = useTypedSelector((state) => state.auth)

  const [updateSubscription, { isLoading }] =
    subscriptionApi.useSubscriptionChangeMutation()

  const { data: isSubscriptionData } =
    subscriptionApi.useSubscriptionCheckQuery(Number(userId), {
      skip: !profile || !userId,
    })

  const uploadSubscription = () => {
    if (profile) {
      const throttle = useThrottling(
        () => updateSubscription(Number(userId)),
        300
      )
      throttle()
    } else {
      alert('Сначала авторизируйтесь!')
    }
  }

  const isSubscription = isSubscriptionData?.isSubscription

  return (
    <div
      onClick={uploadSubscription}
      className={cn(styles.btnSubscribe, {
        [styles.subscribed]: isSubscription,
        [styles.loading]: isLoading,
      })}
      title={isSubscription ? 'Отписаться' : 'Подписаться'}
    >
      <UserPlus size={16} fill="#fff" />
      <span>
        {isLoading
          ? 'Загрузка'
          : isSubscription
          ? 'Вы подписаны'
          : 'Подписаться'}
      </span>
    </div>
  )
}
