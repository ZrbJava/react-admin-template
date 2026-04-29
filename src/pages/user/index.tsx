/*
 * @Description:
 * @Author: zhaorubo
 * @Email: zrbjava@gmail.com
 * @Date: 2026-04-29 10:21:56
 * @LastEditTime: 2026-04-29 15:33:27
 * @LastEditors: zhaorubo
 */

import { Button, Space, Table, Tag } from 'antd'
import type { TableColumnsType } from 'antd'

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
]

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
				<Button type='link'>Edit</Button>
				<Button type='link' danger>
					Delete
				</Button>
			</Space>
		),
	},
]

function UserPage() {
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
				<Button type='primary'>New User</Button>
			</div>

			<Table<UserItem>
				rowKey='id'
				columns={columns}
				dataSource={mockUsers}
				pagination={false}
			/>
		</div>
	)
}

export default UserPage
