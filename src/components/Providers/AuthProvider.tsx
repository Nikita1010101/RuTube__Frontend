import { FC, PropsWithChildren, ComponentProps } from 'react'
import dynamic from 'next/dynamic'

import { CheckRolesProvider } from './CheckRolesProvider'
import { TComponentAuthFields } from '@/types/page.interface'

const DinamicCheckRoleProvider = dynamic<
	ComponentProps<typeof CheckRolesProvider>
>(() => import('./CheckRolesProvider').then(res => res.CheckRolesProvider), {
	ssr: false
})

export const AuthProvider: FC<PropsWithChildren<TComponentAuthFields>> = ({
	children,
	Component: { isOnlyUser }
}) => {
	return !isOnlyUser ? (
		<>{children}</>
	) : (
		<DinamicCheckRoleProvider Component={{ isOnlyUser }}>
			{children}
		</DinamicCheckRoleProvider>
	)
}
