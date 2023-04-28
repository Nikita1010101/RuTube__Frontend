import { ITitlesByPaths } from './Catalog.interface'

export const titlesByPaths: ITitlesByPaths[] = [
	{
		path: '/',
		title: 'Рекомендации'
	},
	{
		path: '/trending',
		title: 'Самые популярные'
	},
	{
		path: '/my-channel',
		title: 'Понравившиеся'
	},
	{
		path: '/my-subscriptions',
		title: 'Мои подписки'
	},
	{
		path: '/my-subscriptions/[id]',
		title: 'Все видео'
	}
]
