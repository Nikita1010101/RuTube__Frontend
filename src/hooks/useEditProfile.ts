import { useApi } from './useApi'
import { useAuth } from './useAuth'

export const useEditProfile = () => {
	const { profile } = useAuth()
	const { updateUser, isLoading } = useApi.updateUser()

	const editProfile = (fullName: string, description: string) => {
		let updatedProfile = Object.assign({}, profile)

		updatedProfile.name = fullName
		updatedProfile.aboutChannel = description

		updateUser(updatedProfile)
	}

	return { editProfile, isLoading }
}
