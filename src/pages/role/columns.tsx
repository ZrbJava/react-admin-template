import type { TableColumnsType } from 'antd'
import { Tag } from 'antd'
import type { RoleItem } from '../../types/role'

export const roleColumns: TableColumnsType<RoleItem> = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Role Name',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Code',
		dataIndex: 'code',
		key: 'code',
	},
	{
		title: 'Scope',
		dataIndex: 'scope',
		key: 'scope',
		render: scope =>
			scope === 'system' ? (
				<Tag color='purple'>System</Tag>
			) : (
				<Tag color='blue'>Business</Tag>
			),
	},
	{
		title: 'Members',
		dataIndex: 'memberCount',
		key: 'memberCount',
	},
	{
		title: 'Status',
		dataIndex: 'status',
		key: 'status',
		render: status =>
			status === 'enabled' ? (
				<Tag color='green'>Enabled</Tag>
			) : (
				<Tag color='red'>Disabled</Tag>
			),
	},
]
