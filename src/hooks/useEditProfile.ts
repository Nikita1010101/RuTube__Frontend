import { IUseEDItProfile } from '@/types/hook.interface'

import { userApi } from '@/store/api/user.api'
import { useAuth } from './useAuth'

export const useEditProfile = (): IUseEDItProfile => {
	const { profile } = useAuth()
	const [editProfile, { isLoading }] = userApi.useEditProfileMutation()

	const updateProfile = (id: number, name: string, description: string): void => {
		if (profile) {
			editProfile({ id, name, description })
		}
	}

	return { updateProfile, isLoading }
}
