import axios from 'axios'

export const axiosClassic = axios.create({
	baseURL: process.env.API_URL
})
