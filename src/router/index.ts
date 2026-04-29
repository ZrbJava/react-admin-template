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
import UserPage from '../pages/user'
import NotFoundPage from '../pages/not-found'
import LoginPage from '../pages/login'
import BasicLayout from '../layouts/basic-layout'
export const router = createBrowserRouter([
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
			},
		],
	},
	{
		path: '/login',
		Component: LoginPage,
	},
	{
		path: '*',
		Component: NotFoundPage,
	},
])
