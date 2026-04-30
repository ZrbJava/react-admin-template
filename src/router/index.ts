/*
 * @Description:
 * @Author: zhaorubo
 * @Email: zrbjava@gmail.com
 * @Date: 2026-04-29 10:45:49
 * @LastEditTime: 2026-04-29 10:45:51
 * @LastEditors: zhaorubo
 */

import { createBrowserRouter } from 'react-router-dom'
import DashboardPage from '../pages/dashboard'
import RolePage from '../pages/role'
import { roleListLoader } from '../pages/role/loader'
import UserPage from '../pages/user'
import { userListLoader } from '../pages/user/loader'
import NotFoundPage from '../pages/not-found'
import LoginPage from '../pages/login'
import BasicLayout from '../layouts/basic-layout'
import { ProtectedRoute, PublicRoute } from './router-guard'

export const router = createBrowserRouter([
	{
		path: '/',
		Component: ProtectedRoute,
		children: [
			{
				path: '/',
				Component: BasicLayout,
				children: [
					{
						index: true,
						Component: DashboardPage,
					},
					{
						path: '/user',
						Component: UserPage,
						loader: userListLoader,
					},
					{
						path: '/role',
						Component: RolePage,
						loader: roleListLoader,
					},
				],
			},
		],
	},
	{
		path: '/login',
		Component: PublicRoute,
		children: [
			{
				index: true,
				Component: LoginPage,
			},
		],
	},
	{
		path: '*',
		Component: NotFoundPage,
	},
])
