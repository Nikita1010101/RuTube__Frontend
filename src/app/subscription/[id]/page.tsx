import React from 'react'

import { Subscription } from '@/components/Layout/Screens/Subscriptions/Subscription/Subscription'

type PageProps = {
  params: {
    id: string
  }
}

export default function SubscriptionPage(context: PageProps) {
  return <Subscription id={context.params.id} />
}
