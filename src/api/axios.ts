import axios from 'axios'

export const API_URL = 'http://127.0.0.1:4200'

export const axiosClassic = axios.create({
	baseURL: API_URL
})
