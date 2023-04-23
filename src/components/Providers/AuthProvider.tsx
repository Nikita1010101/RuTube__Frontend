import { FC, PropsWithChildren } from 'react'
import dynamic from 'next/dynamic'
import { TypeComponentAuthFields } from '@/types/page.interface'

const DinamicCheckRole = dynamic(() => import('./CheckRoles'), {
	ssr: false
})

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component: { isOnlyUser }
}) => {
	return !isOnlyUser ? (
		<>{children}</>
	) : (
		<DinamicCheckRole Component={{ isOnlyUser }}>{children}</DinamicCheckRole>
	)
}

export default AuthProvider
