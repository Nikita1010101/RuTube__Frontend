import { useApi } from './useApi'

export const useAuth = () => {
	if (typeof window === 'undefined') return {}

	const { id } = JSON.parse(localStorage.getItem('AuthId') || '101')
	const { user: profile, isLoading } = useApi.getUserById(String(id))
	const { users } = useApi.getAllUsers()
	const { addUser } = useApi.addUser()

	const setLocaleStorage = (id?: string): void => {
		localStorage.setItem('AuthId', JSON.stringify({ id: id || '101' }))
		location.reload()
	}

	const login = (email: string, password: string): void => {
		const foundUser = users?.find(
			user => user.email === email && user.password === password
		)
		setLocaleStorage(foundUser?.id)
	}

	const register = (name: string, email: string, password: string): void => {
		const foundUser = users?.find(
			user => user.email === email && user.password === password
		)

		if (foundUser)
			confirm('Такой пользователь уже существует. Войти в аккаунт?')
				? setLocaleStorage(foundUser?.id)
				: setLocaleStorage()
		else
			addUser({
				id: String(users?.length),
				email: email,
				password: password,
				name: name,
				photo: '',
				subscriptions: [],
				subscribers: [],
				aboutChannel: ''
			})
	}

	const logout = (): void => {
		const check = confirm('Вы хотите выйти из аккаунта?')
		if (check) {
			setLocaleStorage()
		}
	}

	return { profile, isLoading, login, register, logout }
}
