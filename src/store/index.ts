/**
 * @Description:
 * @Author: zhaorubo
 * @Email: zrbjava@gmail.com
 * @Date: 2026-04-30 14:57:22
 * @LastEditTime: 2026-04-30 15:03:21
 * @LastEditors: zhaorubo
 */
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './modules/user'

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
