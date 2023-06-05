import { FC, PropsWithChildren } from 'react'
import dynamic from 'next/dynamic'
import { TComponentAuthFields } from '@/types/page.interface'

const DinamicCheckRole = dynamic(() => import('./CheckRoles'), {
	ssr: false
})

export const AuthProvider: FC<PropsWithChildren<TComponentAuthFields>> = ({
	children,
	Component: { isOnlyUser }
}) => {
	return !isOnlyUser ? (
		<>{children}</>
	) : (
		<DinamicCheckRole Component={{ isOnlyUser }}>{children}</DinamicCheckRole>
	)
}
