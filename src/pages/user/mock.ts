import type { UserItem } from '../../types/user'

export const initialUsers: UserItem[] = [
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
