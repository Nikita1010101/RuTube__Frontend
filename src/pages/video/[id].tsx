import Video from '@/components/Layout/Screens/Video/Video'
import { IItemVideo } from '@/components/Layout/Screens/Video/Video.interface'
import { VideoService } from '@/services/video.service'
import { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next/types'
import { ParsedUrlQuery } from 'querystring'

const VideoPage: NextPage<IItemVideo> = ({ video }) => {
	return <Video video={video} />
}

export default VideoPage

interface Params extends ParsedUrlQuery {
	id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const { data: videos } = await VideoService.getAll()

	return {
		paths: videos.map(video => ({
			params: {
				id: video.id.toString()
			}
		})),
		fallback: 'blocking'
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data: video } = await VideoService.getById(String(params?.id))

	return {
		props: { video }
	}
}
