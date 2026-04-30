/**
 * @Description:
 * @Author: zhaorubo
 * @Email: zrbjava@gmail.com
 * @Date: 2026-04-30 16:27:21
 * @LastEditTime: 2026-04-30 16:27:54
 * @LastEditors: zhaorubo
 */
export const USER_INFO_KEY = 'react-web-user-info'

export function getStorageUserInfo() {
	const rawValue = localStorage.getItem(USER_INFO_KEY)

	if (!rawValue) {
		return null
	}

	try {
		return JSON.parse(rawValue)
	} catch {
		localStorage.removeItem(USER_INFO_KEY)
		return null
	}
}

export function setStorageUserInfo(value: unknown) {
	localStorage.setItem(USER_INFO_KEY, JSON.stringify(value))
}

export function removeStorageUserInfo() {
	localStorage.removeItem(USER_INFO_KEY)
}
