import { FC } from 'react'
import styles from './Catalog.module.scss'

import CatalogItemLoader from '@/components/UI/Skeletons/CatalogItemLoader/CatalogItemLoader'
import CatalogItem from './Catalog-item/CatalogItem'
import { ICatalog } from './Catalog.interface'

import { useRouter } from 'next/router'
import { titlesByPaths } from './Catalog.data'

const Catalog: FC<ICatalog> = ({ videos }) => {
	const { pathname } = useRouter()

	const currentTitle = titlesByPaths.find(item => pathname === item.path)

	return (
		<div className={styles.catalog}>
			<h1>
				{videos?.length === 0 &&
				(pathname === '/my-channel' || '/my-subscriptions')
					? 'Список пуст'
					: currentTitle?.title}
			</h1>
			<div className={styles.content}>
				{videos
					? videos.map(item => <CatalogItem key={item.id} {...item} />)
					: [...new Array(8)].map((_, ind) => <CatalogItemLoader key={ind} />)}
			</div>
		</div>
	)
}

export default Catalog
