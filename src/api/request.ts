import axios from 'axios'

export const request = axios.create({
	baseURL: '/api',
	timeout: 10000,
})

request.interceptors.request.use(config => {
	return config
})

request.interceptors.response.use(
	response => response,
	error => {
		return Promise.reject(error)
	}
)
