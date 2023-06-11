import { FC, PropsWithChildren } from 'react'
import { useRouter } from 'next/router'

import { TComponentAuthFields } from '@/types/page.interface'

import { useAuth } from '@/hooks/useAuth'

export const CheckRolesProvider: FC<
	PropsWithChildren<TComponentAuthFields>
> = ({ children, Component: { isOnlyUser } }) => {
	const { pathname, replace } = useRouter()
	const { profile, isLoading } = useAuth()

	const Children = () => <>{children}</>

	if (isLoading) return null

	if (profile) return <Children />

	if (isOnlyUser) pathname !== '/' && replace('/')

	return null
}
