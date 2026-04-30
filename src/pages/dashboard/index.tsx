import { Button, Card, Col, Row, Space, Statistic, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PageContainer from '../../components/page-container'
import PageHeader from '../../components/page-header'
import type { RootState } from '../../store'

const { Text, Paragraph } = Typography

function DashboardPage() {
	const navigate = useNavigate()
	const userInfo = useSelector((state: RootState) => state.user.userInfo)

	return (
		<PageContainer>
			<PageHeader
				title='Dashboard'
				description='Overview of your React admin practice project.'
				extra={
					<Button type='primary' onClick={() => navigate('/user')}>
						Go to User List
					</Button>
				}
			/>

			<Card>
				<Paragraph style={{ marginBottom: 8 }}>
					Welcome back, <strong>{userInfo?.username ?? 'Guest'}</strong>.
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
		</PageContainer>
	)
}

export default DashboardPage
