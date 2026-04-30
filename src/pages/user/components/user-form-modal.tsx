import { Form, Input, Modal, Select } from 'antd'
import { useEffect } from 'react'
import type { UserFormValues, UserItem } from '../../../types/user'

type UserFormModalProps = {
	open: boolean
	currentUser: UserItem | null
	onCancel: () => void
	onSubmit: (values: UserFormValues) => void
}

function UserFormModal({
	open,
	currentUser,
	onCancel,
	onSubmit,
}: UserFormModalProps) {
	const [form] = Form.useForm<UserFormValues>()

	useEffect(() => {
		if (!open) {
			return
		}

		if (currentUser) {
			form.setFieldsValue({
				name: currentUser.name,
				email: currentUser.email,
				role: currentUser.role,
				status: currentUser.status,
			})
			return
		}

		form.resetFields()
	}, [currentUser, form, open])

	return (
		<Modal
			title={currentUser ? 'Edit User' : 'New User'}
			open={open}
			onCancel={() => {
				onCancel()
				form.resetFields()
			}}
			onOk={() => {
				form.submit()
			}}
			destroyOnHidden
		>
			<Form<UserFormValues>
				form={form}
				layout='vertical'
				onFinish={values => {
					onSubmit(values)
					form.resetFields()
				}}
			>
				<Form.Item
					label='Name'
					name='name'
					rules={[{ required: true, message: 'Please enter user name' }]}
				>
					<Input placeholder='Enter user name' />
				</Form.Item>

				<Form.Item
					label='Email'
					name='email'
					rules={[
						{ required: true, message: 'Please enter email' },
						{ type: 'email', message: 'Please enter a valid email' },
					]}
				>
					<Input placeholder='Enter email' />
				</Form.Item>

				<Form.Item
					label='Role'
					name='role'
					rules={[{ required: true, message: 'Please select role' }]}
				>
					<Select
						placeholder='Select role'
						options={[
							{ label: 'Admin', value: 'Admin' },
							{ label: 'Editor', value: 'Editor' },
							{ label: 'Viewer', value: 'Viewer' },
						]}
					/>
				</Form.Item>

				<Form.Item
					label='Status'
					name='status'
					rules={[{ required: true, message: 'Please select status' }]}
				>
					<Select
						placeholder='Select status'
						options={[
							{ label: 'Enabled', value: 'enabled' },
							{ label: 'Disabled', value: 'disabled' },
						]}
					/>
				</Form.Item>
			</Form>
		</Modal>
	)
}

export default UserFormModal
