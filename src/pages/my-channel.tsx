import React from 'react'
import MyChannel from '@/components/Layout/Screens/My-channel/MyChannel'
import { NextPageAuth } from '@/types/page.interface'

const MyChannelPage: NextPageAuth = () => {
	return <MyChannel />
}

MyChannelPage.isOnlyUser = true

export default MyChannelPage
