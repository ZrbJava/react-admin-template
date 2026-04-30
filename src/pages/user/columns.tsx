import { Button, Popconfirm, Space, Tag, message } from 'antd'
import type { TableColumnsType } from 'antd'
import type { UserItem } from '../../types/user'

type CreateUserColumnsOptions = {
	onEdit: (record: UserItem) => void
	onDelete: (record: UserItem) => void
}

export function createUserColumns(
	options: CreateUserColumnsOptions
): TableColumnsType<UserItem> {
	const { onEdit, onDelete } = options

	return [
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
					<Button type='link' onClick={() => onEdit(record)}>
						Edit
					</Button>

					<Popconfirm
						title='Delete User'
						description={`Are you sure to delete ${record.name}?`}
						okText='Confirm'
						cancelText='Cancel'
						onConfirm={() => {
							onDelete(record)
							message.success('User deleted successfully')
						}}
					>
						<Button type='link' danger>
							Delete
						</Button>
					</Popconfirm>
				</Space>
			),
		},
	]
}
