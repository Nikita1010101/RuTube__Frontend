import axios from 'axios'

export const $axios = axios.create({
	baseURL: `${process.env.APP_API}/api`
})