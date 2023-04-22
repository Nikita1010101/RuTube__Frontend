import { IUser } from "@/types/user.interface"
import { axiosClassic } from "api/axios"

export const UserService = {
  async getAll() {
    return axiosClassic.get<IUser[]>('/users')
  },

  async getById(id: string) {
    return axiosClassic.get<IUser>(`/users/${id}`)
  }
}