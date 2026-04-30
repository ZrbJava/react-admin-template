/*
 * @Description:
 * @Author: zhaorubo
 * @Email: zrbjava@gmail.com
 * @Date: 2026-04-29 10:22:07
 * @LastEditTime: 2026-04-30 16:01:49
 * @LastEditors: zhaorubo
 */

import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/modules/user'
import type { AppDispatch } from '../../store'
export default function DashboardPage() {
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	return (
		<div>
			<Button
				type='primary'
				onClick={() => {
					navigate('/login')
				}}
			>
				返回登陆
			</Button>
			<Button
				type='primary'
				onClick={() => {
					dispatch(logout())
				}}
			>
				退出登陆
			</Button>
			<div>仪表盘页</div>
		</div>
	)
}
