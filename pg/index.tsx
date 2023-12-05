// import { GetStaticProps, NextPage } from 'next'
// 
// import { Home } from '@/components/Layout/Screens/Home/Home'
// 
// import { IHome } from '@/components/Layout/Screens/Home/Home.interface'
// import { IVideo } from '@/types/video.interface'
// 
// import { VideoService } from '@/services/video.service'
// 
// const HomePage: NextPage<IHome> = ({ popularVideo, randomVideo }) => {
	// console.log(popularVideo, randomVideo)
// 
	// return <Home popularVideo={popularVideo} randomVideo={randomVideo} />
// }
// 
// export default HomePage

// export const getStaticProps: GetStaticProps = async () => {
// 	try {
// 		const { data: videos } = await VideoService.getAll()

// 		const popularVideo = videos.sort((a, b) => b.views - a.views)[0]
// 		const randomVideo = videos
// 			.filter(item => item !== popularVideo)
// 			.sort(() => (Math.random() < 0.5 ? 1 : -1))[0]


// 		return {
// 			props: {
// 				popularVideo: popularVideo || ({} as IVideo),
// 				randomVideo: randomVideo || ({} as IVideo)
// 			},
// 			revalidate: 60
// 		}
// 	} catch (e) {
// 		const { data: videos } = await VideoService.getAll()

// 		return {
// 			props: {
// 				videos: videos
// 			}
// 		}
// 	}
// }
