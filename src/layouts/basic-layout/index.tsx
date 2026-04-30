import { Layout, Menu, Space, Typography, Avatar, Dropdown } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/modules/user'
import type { RootState, AppDispatch } from '../../store'

const { Header, Sider, Content } = Layout
const { Text } = Typography

const menuItems: MenuProps['items'] = [
	{
		key: '/',
		label: 'Dashboard',
	},
	{
		key: '/user',
		label: 'User List',
	},
	{
		key: '/role',
		label: 'Role List',
	},
]

function BasicLayout() {
	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const userInfo = useSelector((state: RootState) => state.user.userInfo)

	const handleLogout = () => {
		dispatch(logout())
		navigate('/login')
	}

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider width={220}>
				<div
					style={{
						height: 56,
						color: '#fff',
						display: 'flex',
						alignItems: 'center',
						padding: '0 16px',
						fontSize: 18,
						fontWeight: 600,
					}}
				>
					React Admin
				</div>

				<Menu
					theme='dark'
					mode='inline'
					selectedKeys={[location.pathname]}
					items={menuItems}
					onClick={({ key }) => navigate(key)}
				/>
			</Sider>

			<Layout>
				<Header
					style={{
						background: '#fff',
						padding: '0 16px',
						borderBottom: '1px solid #f0f0f0',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Text strong>Admin Console</Text>

					<Space size={12}>
						<Dropdown
							menu={{
								items: [
									{
										key: 'logout',
										label: 'Logout',
										onClick: handleLogout,
										icon: <LogoutOutlined />,
									},
									{
										key: 'logout2',
										label: 'Logout2',
										onClick: handleLogout,
										icon: <LogoutOutlined />,
									},
									{
										key: 'logout3',
										label: 'Logout3',
										onClick: handleLogout,
										icon: <LogoutOutlined />,
									},
								],
							}}
						>
							<Avatar size={40}>{userInfo?.username?.charAt(0)}</Avatar>
						</Dropdown>
					</Space>
				</Header>

				<Content style={{ padding: 16, background: '#f5f5f5' }}>
					<div
						style={{
							minHeight: 'calc(100vh - 88px)',
							padding: 16,
							background: '#fff',
							borderRadius: 8,
						}}
					>
						<Outlet />
					</div>
				</Content>
			</Layout>
		</Layout>
	)
}

export default BasicLayout
