/*
 * @Description:
 * @Author: zhaorubo
 * @Email: zrbjava@gmail.com
 * @Date: 2026-04-29 10:21:56
 * @LastEditTime: 2026-04-29 18:08:13
 * @LastEditors: zhaorubo
 */

import { Button, Space, Table, Tag, Input, Select, Modal, Form } from 'antd'
import type { TableColumnsType } from 'antd'
import { useState } from 'react'

type UserItem = {
	id: number
	name: string
	email: string
	role: string
	status: 'enabled' | 'disabled'
}

const mockUsers: UserItem[] = [
	{
		id: 1,
		name: 'Alice',
		email: 'alice@example.com',
		role: 'Admin',
		status: 'enabled',
	},
	{
		id: 2,
		name: 'Bob',
		email: 'bob@example.com',
		role: 'Editor',
		status: 'disabled',
	},
	{
		id: 3,
		name: 'Cindy',
		email: 'cindy@example.com',
		role: 'Viewer',
		status: 'enabled',
	},
	{
		id: 4,
		name: 'David',
		email: 'david@example.com',
		role: 'Admin',
		status: 'enabled',
	},
	{
		id: 5,
		name: 'Emma',
		email: 'emma@example.com',
		role: 'Editor',
		status: 'disabled',
	},
	{
		id: 6,
		name: 'Frank',
		email: 'frank@example.com',
		role: 'Viewer',
		status: 'enabled',
	},
	{
		id: 7,
		name: 'Grace',
		email: 'grace@example.com',
		role: 'Editor',
		status: 'enabled',
	},
	{
		id: 8,
		name: 'Henry',
		email: 'henry@example.com',
		role: 'Viewer',
		status: 'disabled',
	},
]

function UserPage() {
	const [keyword, setKeyword] = useState('')
	const [status, setStatus] = useState<'all' | 'enabled' | 'disabled'>('all')
	const [open, setOpen] = useState(false)
	const [form] = Form.useForm()
	const [users, setUsers] = useState<UserItem[]>(mockUsers)
	const [currentUser, setCurrentUser] = useState<UserItem | null>(null)
	const columns: TableColumnsType<UserItem> = [
		{
			title: 'ID',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: 'Role',
			dataIndex: 'role',
			key: 'role',
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			render: (status: UserItem['status']) =>
				status === 'enabled' ? (
					<Tag color='green'>Enabled</Tag>
				) : (
					<Tag color='red'>Disabled</Tag>
				),
		},
		{
			title: 'Action',
			key: 'action',
			render: (_, record) => (
				<Space>
					<Button
						type='link'
						onClick={() => {
							setCurrentUser(record)
							form.setFieldsValue({
								name: record.name,
								email: record.email,
								role: record.role,
								status: record.status,
							})
							setOpen(true)
						}}
					>
						Edit
					</Button>

					<Button type='link' danger>
						Delete
					</Button>
				</Space>
			),
		},
	]
	const filteredUsers = users.filter(user => {
		const matchKeyword = user.name.toLowerCase().includes(keyword.toLowerCase())
		const matchStatus = status === 'all' ? true : user.status === status

		return matchKeyword && matchStatus
	})

	return (
		<div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginBottom: 16,
				}}
			>
				<h2 style={{ margin: 0 }}>User List</h2>
				<Button
					type='primary'
					onClick={() => {
						setCurrentUser(null)
						form.resetFields()
						setOpen(true)
					}}
				>
					New User
				</Button>
			</div>
			<Space style={{ marginBottom: 16 }} size={12}>
				<Input
					placeholder='Search by user name'
					value={keyword}
					onChange={event => setKeyword(event.target.value)}
					style={{ width: 220 }}
					allowClear
				/>

				<Select
					value={status}
					onChange={value => setStatus(value)}
					style={{ width: 180 }}
					options={[
						{ label: 'All Status', value: 'all' },
						{ label: 'Enabled', value: 'enabled' },
						{ label: 'Disabled', value: 'disabled' },
					]}
				/>

				<Button
					onClick={() => {
						setKeyword('')
						setStatus('all')
					}}
				>
					Reset
				</Button>
			</Space>

			<Table<UserItem>
				rowKey='id'
				columns={columns}
				dataSource={filteredUsers}
				pagination={{
					pageSize: 10,
					showSizeChanger: false,
				}}
			/>
			<Modal
				title={currentUser ? `Edit User ` : 'New User'}
				open={open}
				onCancel={() => {
					setOpen(false)
					form.resetFields()
				}}
				onOk={() => {
					form.submit()
				}}
			>
				<Form
					form={form}
					layout='vertical'
					onFinish={(values: Omit<UserItem, 'id'>) => {
						if (currentUser) {
							setUsers(prev =>
								prev.map(user =>
									user.id === currentUser.id
										? {
												...user,
												...values,
											}
										: user
								)
							)
						} else {
							const newUser: UserItem = {
								id: Date.now(),
								...values,
							}

							setUsers(prev => [newUser, ...prev])
						}

						setOpen(false)
						setCurrentUser(null)
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
						rules={[{ required: true, message: 'Please enter email' }]}
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
		</div>
	)
}

export default UserPage
