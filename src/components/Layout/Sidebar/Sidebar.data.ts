import mainIcon from '@/assets/img/mainIcon.png'
import trandingIcon from '@/assets/img/trandingIcon.png'
import starIcon from '@/assets/img/starIcon.png'
import subscriptionsIcon from '@/assets/img/subscriptionsIcon.png'
import { ISidebarRoutes } from "./Sidebar.interface";


export const privateRoutes: ISidebarRoutes[] = [
  {
    id: '1',
    route: '/',
    title: 'Главная',
    picture: mainIcon,
    size: 18
  },
  {
    id: '2',
    route: '/trending',
    title: 'Тренды',
    picture: trandingIcon,
    size: 24
  },
  {
    id: '3',
    route: '/my-channel',
    title: 'Мой канал',
    picture: starIcon,
    size: 14
  },
  {
    id: '4',
    route: '/my-subscriptions',
    title: 'Мои подписки',
    picture: subscriptionsIcon,
    size: 14
  },
  
]

export const publicRoutes: ISidebarRoutes[] = [
  {
    id: '1',
    route: '/',
    title: 'Главная',
    picture: mainIcon,
    size: 18
  },
  {
    id: '2',
    route: '/trending',
    title: 'Тренды',
    picture: trandingIcon,
    size: 24
  }
]