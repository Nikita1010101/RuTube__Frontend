import { ICreateUser, IGetProfile, IUser } from '@/types/user.interface'
import { axiosClassic } from 'api/axios'
import { AxiosResponse } from 'axios'

export const UserService = {
	async getAll(): Promise<AxiosResponse<IUser[]>> {
		return axiosClassic.get<any, AxiosResponse<IUser[]>>('/user')
	},

	async getById(id: number): Promise<AxiosResponse<IUser>> {
		return axiosClassic.get<number, AxiosResponse<IUser>>(`/user/${id}`)
	},

	async getProfile(
		email: string,
		password: string
	): Promise<AxiosResponse<IUser>> {
		return axiosClassic.post<IGetProfile, AxiosResponse<IUser>>(
			`/user/profile`,
			{ email, password }
		)
	},

	async createUser(
		name: string,
		email: string,
		password: string
	): Promise<AxiosResponse> {
		return axiosClassic.post<ICreateUser, AxiosResponse<IUser>>(
			`/user/register`,
			{
				email,
				password,
				name
			}
		)
	}
}
