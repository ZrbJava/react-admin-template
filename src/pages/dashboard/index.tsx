import { Card, Col, Row, Space, Statistic, Typography, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'

const { Title, Text, Paragraph } = Typography

function DashboardPage() {
	const navigate = useNavigate()
	const userInfo = useSelector((state: RootState) => state.user.userInfo)

	return (
		<Space direction='vertical' size={16} style={{ width: '100%' }}>
			<Card>
				<Title level={3} style={{ marginTop: 0, marginBottom: 8 }}>
					Welcome back, {userInfo?.username ?? 'Guest'}
				</Title>

				<Paragraph style={{ marginBottom: 8 }}>
					This is your first React admin practice dashboard.
				</Paragraph>

				<Text type='secondary'>
					Current role: {userInfo?.role ?? 'Unknown'}
				</Text>
			</Card>

			<Row gutter={[16, 16]}>
				<Col xs={24} sm={12} lg={6}>
					<Card>
						<Statistic title='Users' value={128} />
					</Card>
				</Col>

				<Col xs={24} sm={12} lg={6}>
					<Card>
						<Statistic title='Orders' value={56} />
					</Card>
				</Col>

				<Col xs={24} sm={12} lg={6}>
					<Card>
						<Statistic title='Revenue' value={23560} prefix='$' />
					</Card>
				</Col>

				<Col xs={24} sm={12} lg={6}>
					<Card>
						<Statistic title='Conversion' value={78.2} suffix='%' />
					</Card>
				</Col>
			</Row>

			<Card title='Quick Actions'>
				<Space wrap>
					<Button type='primary' onClick={() => navigate('/user')}>
						Go to User List
					</Button>

					<Button onClick={() => navigate('/')}>Refresh Dashboard View</Button>
				</Space>
			</Card>
		</Space>
	)
}

export default DashboardPage
