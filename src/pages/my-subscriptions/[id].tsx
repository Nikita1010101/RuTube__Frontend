import { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next/types'
import { ParsedUrlQuery } from 'querystring'

import { Channel } from '@/components/Layout/Screens/My-subscriptions/Channel/Channel'
import { IChannel } from '@/components/Layout/Screens/My-subscriptions/Channel/Channel.interface'

import { UserService } from '@/services/user.service'

const MySubscriptionsPage: NextPage<IChannel> = ({ user }) => {
	return <Channel user={user} />
}

export default MySubscriptionsPage

interface IParams extends ParsedUrlQuery {
	id: string
}

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
	try {
		const { data: users } = await UserService.getAll()

		return {
			paths: users.map(user => ({
				params: {
					id: String(user.id)
				}
			})),
			fallback: 'blocking'
		}
	} catch (error) {
		throw error
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: user } = await UserService.getById(Number(params?.id))

		return {
			props: { user },
			revalidate: 120
		}
	} catch (error) {
		throw error
	}
}
