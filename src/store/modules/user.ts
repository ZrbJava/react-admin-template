import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {
	getStorageUserInfo,
	removeStorageUserInfo,
	setStorageUserInfo,
} from '../../utils/storage'

export type LoginUserInfo = {
	username: string
	role: 'Admin' | 'Editor' | 'Viewer'
}

type UserState = {
	userInfo: LoginUserInfo | null
	isLogin: boolean
}

const cachedUserInfo = getStorageUserInfo() as LoginUserInfo | null

const initialState: UserState = {
	userInfo: cachedUserInfo,
	isLogin: Boolean(cachedUserInfo),
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setLogin(state, action: PayloadAction<LoginUserInfo>) {
			state.userInfo = action.payload
			state.isLogin = true
			setStorageUserInfo(action.payload)
		},
		logout(state) {
			state.userInfo = null
			state.isLogin = false
			removeStorageUserInfo()
		},
	},
})

export const { setLogin, logout } = userSlice.actions
export default userSlice.reducer
