import React from 'react'

import { Subscription } from '@/components/Layout/Screens/Subscriptions/Subscription/Subscription'
import { TPageParams } from '@/types/page.types'

export default function SubscriptionPage(context: TPageParams) {
  return <Subscription userId={+context.params.slug} />
}
