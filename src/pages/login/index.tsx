import { Button, Card, Form, Input, Select, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../store/modules/user'
import type { AppDispatch } from '../../store'

type LoginFormValues = {
	username: string
	role: 'Admin' | 'Editor' | 'Viewer'
}

const { Title } = Typography

function LoginPage() {
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()

	const handleFinish = (values: LoginFormValues) => {
		dispatch(
			setLogin({
				username: values.username,
				role: values.role,
			})
		)

		navigate('/')
	}

	return (
		<div
			style={{
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				background: '#f5f5f5',
				padding: 16,
			}}
		>
			<Card style={{ width: 420 }}>
				<Title level={3} style={{ textAlign: 'center', marginBottom: 24 }}>
					React Admin Login
				</Title>

				<Form<LoginFormValues>
					layout='vertical'
					initialValues={{ role: 'Admin', username: 'admin' }}
					onFinish={handleFinish}
				>
					<Form.Item
						label='Username'
						name='username'
						rules={[{ required: true, message: 'Please enter username' }]}
					>
						<Input placeholder='Enter username' />
					</Form.Item>

					<Form.Item
						label='Role'
						name='role'
						rules={[{ required: true, message: 'Please select role' }]}
					>
						<Select
							options={[
								{ label: 'Admin', value: 'Admin' },
								{ label: 'Editor', value: 'Editor' },
								{ label: 'Viewer', value: 'Viewer' },
							]}
						/>
					</Form.Item>

					<Form.Item style={{ marginBottom: 0 }}>
						<Button type='primary' htmlType='submit' block>
							Login
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	)
}

export default LoginPage
