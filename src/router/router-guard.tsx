/**
 * @Description:
 * @Author: zhaorubo
 * @Email: zrbjava@gmail.com
 * @Date: 2026-04-30 15:40:18
 * @LastEditTime: 2026-04-30 15:40:18
 * @LastEditors: zhaorubo
 */

import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import type { RootState } from '../store'
export function ProtectedRoute() {
	const isLogin = useSelector((state: RootState) => state.user.isLogin)
	const location = useLocation()
	console.log(isLogin, 'isLogin')
	console.log(location, 'location')
	if (!isLogin) {
		return <Navigate to='/login' state={{ from: location }} replace />
	}
	return <Outlet />
}

export function PublicRoute() {
	const isLogin = useSelector((state: RootState) => state.user.isLogin)
	console.log(isLogin, 'isLogin')
	if (isLogin) {
		return <Navigate to='/' replace />
	}
	return <Outlet />
}
