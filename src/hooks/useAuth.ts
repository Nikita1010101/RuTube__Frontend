import { useApi } from './useApi'

export const useAuth = () => {
	if (typeof window === 'undefined') return {}

	const { id } = JSON.parse(localStorage.getItem('AuthId') || '')
	const { user: profile, isLoading } = useApi.GetUserById(String(id))
	const { users } = useApi.GetAllUsers()
	const { addUser } = useApi.AddUser()

	const login = (email: string, password: string): void => {
		const foundUser = users?.find(
			user => user.email === email && user.password === password
		)
		localStorage.setItem(
			'AuthId',
			JSON.stringify({ id: foundUser?.id || '1000000000' })
		)
		location.reload()
	}

	const register = (name: string, email: string, password: string): void => {
		const foundUser = users?.find(
			user => user.email === email && user.password === password
		)
		!foundUser
			? addUser({
					id: String(users?.length),
					email: email,
					password: password,
					name: name,
					photo: '',
					subscriptions: [],
					subscribers: [],
					aboutChannel: ''
			  })
			: 0
			localStorage.setItem(
				'AuthId',
				JSON.stringify({ id: String(users?.length) || '1000000000' })
			)
		location.reload()
	}

	const logout = (): void => {
		const check = confirm('Вы хотите выйти из аккаунта?')
		if (check) {
			localStorage.setItem('AuthId', JSON.stringify({ id: '1000000000' }))
			location.reload()
		}
	}

	return { profile, isLoading, login, register, logout }
}
