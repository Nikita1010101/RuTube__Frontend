import axios from 'axios'

export const API_URL = 'https://641ece07ad55ae01ccb02699.mockapi.io/api'

export const axiosClassic = axios.create({
	baseURL: API_URL
})
