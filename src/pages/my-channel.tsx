import React from 'react'
import { MyChannel } from '@/components/Layout/Screens/My-channel/MyChannel'
import { TNextPageAuth } from '@/types/page.interface'

const MyChannelPage: TNextPageAuth = () => {
	return <MyChannel />
}

MyChannelPage.isOnlyUser = true

export default MyChannelPage
