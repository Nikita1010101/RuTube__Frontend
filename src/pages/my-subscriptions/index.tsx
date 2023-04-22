import React from 'react'

import MySubscriptions from '@/components/Layout/Screens/My-subscriptions/MySubscriptions'
import { NextPageAuth } from '@/types/page.interface'

const MySubscriptionsPage: NextPageAuth = () => {
	return <MySubscriptions />
}

MySubscriptionsPage.isOnlyUser = true

export default MySubscriptionsPage
