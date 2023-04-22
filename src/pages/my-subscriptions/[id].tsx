import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

import Channel from '@/components/Layout/Screens/My-subscriptions/Channel/Channel'
import { IChannel } from '@/components/Layout/Screens/My-subscriptions/Channel/Channel.interface'

import { VideoService } from '@/services/video.service'
import { UserService } from '@/services/user.service'

const MySubscriptionsPage: NextPage<IChannel> = ({ userId, videos }) => {
	return <Channel userId={userId} videos={videos} />
}

export default MySubscriptionsPage

export interface Params extends ParsedUrlQuery {
	id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const { data: users } = await UserService.getAll()

	return {
		paths: users.map(user => ({
			params: {
				id: user.id.toString()
			}
		})),
		fallback: 'blocking'
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data: videos } = await VideoService.getAll()

	return {
		props: { userId: params?.id, videos: videos },
		revalidate: 60
	}
}
