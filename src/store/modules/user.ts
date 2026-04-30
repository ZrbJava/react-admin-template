/**
 * @Description:
 * @Author: zhaorubo
 * @Email: zrbjava@gmail.com
 * @Date: 2026-04-30 14:57:30
 * @LastEditTime: 2026-04-30 14:57:39
 * @LastEditors: zhaorubo
 */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type LoginUserInfo = {
	username: string
	role: 'Admin' | 'Editor' | 'Viewer'
}

type UserState = {
	userInfo: LoginUserInfo | null
	isLogin: boolean
}

const initialState: UserState = {
	userInfo: null,
	isLogin: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setLogin(state, action: PayloadAction<LoginUserInfo>) {
			state.userInfo = action.payload
			state.isLogin = true
		},
		logout(state) {
			state.userInfo = null
			state.isLogin = false
		},
	},
})

export const { setLogin, logout } = userSlice.actions
export default userSlice.reducer
