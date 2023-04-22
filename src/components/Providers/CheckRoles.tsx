import { useAuth } from '@/hooks/useAuth'
import { TypeComponentAuthFields } from '@/types/page.interface'
import { useRouter } from 'next/router'
import React, { FC, PropsWithChildren } from 'react'

const CheckRoles: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component: { isOnlyUser }
}) => {
	const { pathname, replace } = useRouter()
	const { profile, isLoading } = useAuth()

	const Children = () => <>{children}</>

	if (isLoading) return null

	if (profile) return <Children />

	if (isOnlyUser) pathname !== '/' && replace('/')

	return null
}

export default CheckRoles
