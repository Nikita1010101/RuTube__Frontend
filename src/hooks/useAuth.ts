import { TUseAuth } from '@/types/hook.interface'

import { userApi } from '@/store/api/user.api'
import { useLocalStorage } from './useLocalStorage'

import { UserService } from '@/services/user.service'

export const useAuth = (): TUseAuth => {
	const { storageValue, setValue } = useLocalStorage('AuthId', 0)

	const { data: profile, isLoading } = userApi.useGetUserByIdQuery(
		Number(storageValue)
	)
	const [createUser] = userApi.useCreateUserMutation()

	const login = async (email: string, password: string): Promise<void> => {
		const { data: user } = await UserService.getProfile(email, password)

		if (user) {
			setValue(Number(user.id))
			location.reload()
		} else {
			alert('Такого аккаунта не найдено!')
		}
	}

	const register = async (
		name: string,
		email: string,
		password: string
	): Promise<void> => {
		const { data: user } = await UserService.getProfile(email, password)

		if (user) {
			if (confirm('Такой пользователь уже существует. Войти в аккаунт?')) {
				setValue(Number(user.id))
				location.reload()
			}
		} else {
			const payload = await createUser({
				email,
				password,
				name
			}).unwrap()

			setValue(Number(payload?.id))
			location.reload()
		}
	}

	const logout = (): void => {
		const check = confirm('Вы хотите выйти из аккаунта?')
		if (check) {
			setValue(0)
		}
		location.reload()
	}

	return { profile, isLoading, login, register, logout }
}
