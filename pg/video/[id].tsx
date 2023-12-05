import { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next/types'
import { ParsedUrlQuery } from 'querystring'

import { Video } from '@/components/Layout/Screens/Video/Video'
import { IItemVideo } from '@/components/Layout/Screens/Video/Video.interface'

import { VideoService } from '@/services/video.service'

const VideoPage: NextPage<IItemVideo> = ({ video }) => {
	return <Video video={video} />
}

export default VideoPage

interface IParams extends ParsedUrlQuery {
	id: string
}

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
	try {
		const { data: videos } = await VideoService.getAll()

		return {
			paths: videos.map(video => ({
				params: {
					id: String(video.id)
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
		const { data: video } = await VideoService.getById(Number(params?.id))

		return {
			props: { video },
			revalidate: 120
		}
	} catch (error) {
		throw error
	}
}
