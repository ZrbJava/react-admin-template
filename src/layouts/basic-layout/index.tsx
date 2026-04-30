import { Breadcrumb, Layout, Menu, Space, Typography, Avatar, Dropdown } from 'antd'
import {
	DashboardOutlined,
	SettingOutlined,
	LogoutOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	ShoppingCartOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/modules/user'
import type { RootState, AppDispatch } from '../../store'

const { Header, Sider, Content } = Layout
const { Text } = Typography

const menuItems: MenuProps['items'] = [
	{
		key: '/',
		icon: <DashboardOutlined />,
		label: 'Dashboard',
	},
	{
		key: 'system',
		icon: <TeamOutlined />,
		label: 'System Management',
		children: [
			{
				key: '/user',
				label: 'User List',
			},
			{
				key: '/role',
				label: 'Role List',
			},
		],
	},
	{
		key: 'business',
		icon: <ShoppingCartOutlined />,
		label: 'Business Management',
		children: [
			{
				key: '/order',
				label: 'Order List',
				disabled: true,
			},
			{
				key: '/product',
				label: 'Product List',
				disabled: true,
			},
		],
	},
	{
		key: 'settings',
		icon: <SettingOutlined />,
		label: 'Settings',
		children: [
			{
				key: '/profile',
				label: 'Profile',
				disabled: true,
			},
			{
				key: '/audit-log',
				label: 'Audit Logs',
				disabled: true,
			},
		],
	},
]

const breadcrumbMap: Record<string, { parent?: string; current: string }> = {
	'/': { current: 'Dashboard' },
	'/user': { parent: 'System Management', current: 'User List' },
	'/role': { parent: 'System Management', current: 'Role List' },
}

const menuOpenKeyMap: Record<string, string[]> = {
	'/': [],
	'/user': ['system'],
	'/role': ['system'],
}

function BasicLayout() {
	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const userInfo = useSelector((state: RootState) => state.user.userInfo)
	const [collapsed, setCollapsed] = useState(false)
	const breadcrumbConfig = breadcrumbMap[location.pathname]
	const breadcrumbItems = breadcrumbConfig?.parent
		? [{ title: 'Dashboard' }, { title: breadcrumbConfig.parent }, { title: breadcrumbConfig.current }]
		: [{ title: breadcrumbConfig?.current ?? 'Dashboard' }]
	const openKeys = menuOpenKeyMap[location.pathname] ?? []

	const handleLogout = () => {
		dispatch(logout())
		navigate('/login')
	}

	const dropdownItems: MenuProps['items'] = [
		{
			key: 'logout',
			label: 'Logout',
			onClick: handleLogout,
			icon: <LogoutOutlined />,
		},
	]

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider width={220} collapsible collapsed={collapsed} trigger={null}>
				<div
					style={{
						height: 56,
						color: '#fff',
						display: 'flex',
						alignItems: 'center',
						justifyContent: collapsed ? 'center' : 'flex-start',
						padding: collapsed ? 0 : '0 16px',
						fontSize: collapsed ? 20 : 18,
						fontWeight: 600,
					}}
				>
					{collapsed ? 'RA' : 'React Admin'}
				</div>

				<Menu
					theme='dark'
					mode='inline'
					selectedKeys={[location.pathname]}
					defaultOpenKeys={openKeys}
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
					<Space size={16}>
						<div
							onClick={() => setCollapsed(prev => !prev)}
							style={{
								display: 'inline-flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: 36,
								height: 36,
								cursor: 'pointer',
								borderRadius: 8,
							}}
						>
							{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						</div>

						<Breadcrumb items={breadcrumbItems} />
					</Space>

					<Space size={12}>
						<Space size={8}>
							<Avatar size={40} icon={!userInfo?.username ? <UserOutlined /> : undefined}>
								{userInfo?.username?.charAt(0).toUpperCase()}
							</Avatar>

							<div style={{ lineHeight: 1.2 }}>
								<div>
									<Text strong>{userInfo?.username ?? 'Guest'}</Text>
								</div>
								<Text type='secondary'>{userInfo?.role ?? 'Unknown role'}</Text>
							</div>
						</Space>

						<Dropdown
							menu={{ items: dropdownItems }}
							placement='bottomRight'
							trigger={['click']}
						>
							<Avatar style={{ cursor: 'pointer', backgroundColor: '#1677ff' }}>
								{userInfo?.username?.charAt(0).toUpperCase() ?? 'U'}
							</Avatar>
						</Dropdown>
					</Space>
				</Header>

				<Content
					style={{
						padding: 16,
						background: '#f5f5f5',
						minHeight: 'calc(100vh - 64px)',
					}}
				>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	)
}

export default BasicLayout
