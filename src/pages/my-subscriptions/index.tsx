import React from 'react'

import { MySubscriptions } from '@/components/Layout/Screens/My-subscriptions/MySubscriptions'
import { TNextPageAuth } from '@/types/page.interface'

const MySubscriptionsPage: TNextPageAuth = () => {
	return <MySubscriptions />
}

MySubscriptionsPage.isOnlyUser = true

export default MySubscriptionsPage
