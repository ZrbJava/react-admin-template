import type { CSSProperties } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
const { Header, Sider, Content } = Layout
const menuItems: MenuProps['items'] = [
	{
		key: '/',
		label: 'Dashboard',
	},
	{
		key: '/user',
		label: 'User List',
	},
]
const SiderStyle: CSSProperties = {
	color: '#fff',
	padding: 16,
	width: 220,
}
const LayoutStyle: CSSProperties = {
	height: '100vh',
}
const HeaderStyle: CSSProperties = {
	height: '60px',
	backgroundColor: '#fff',
	borderBottom: '1px solid #f0f0f0',
}
const ContentStyle: CSSProperties = {
	backgroundColor: '#f5f5f5',
	padding: 16,
}
export default function BasicLayout() {
	const navigate = useNavigate()
	const location = useLocation()

	return (
		<>
			<Layout style={LayoutStyle}>
				<Sider style={SiderStyle}>
					<div>
						<h1>React Admin</h1>
					</div>
					<Menu
						theme='dark'
						mode='inline'
						items={menuItems}
						selectedKeys={[location.pathname]}
						onClick={({ key }) => navigate(key)}
					/>
				</Sider>
				<Layout style={LayoutStyle}>
					<Header style={HeaderStyle}>Header</Header>
					<Content style={ContentStyle}>
						<div
							style={{
								height: 'calc(100vh - 100px)',
								padding: 16,
								background: '#fff',
								borderRadius: 8,
								overflow: 'auto',
							}}
						>
							<Outlet />
						</div>
					</Content>
				</Layout>
			</Layout>
		</>
	)
}
