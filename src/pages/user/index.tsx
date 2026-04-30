import { Button, Input, Select, Space, Table } from 'antd'
import { useMemo, useState } from 'react'
import { createUserColumns } from './columns'
import UserFormModal from './components/user-form-modal'
import { initialUsers } from './mock'
import type { UserFormValues, UserItem, UserStatus } from '../../types/user'

function UserPage() {
	const [users, setUsers] = useState<UserItem[]>(initialUsers)
	const [keyword, setKeyword] = useState('')
	const [status, setStatus] = useState<'all' | UserStatus>('all')
	const [open, setOpen] = useState(false)
	const [currentUser, setCurrentUser] = useState<UserItem | null>(null)

	const filteredUsers = useMemo(() => {
		return users.filter(user => {
			const matchKeyword = user.name
				.toLowerCase()
				.includes(keyword.trim().toLowerCase())
			const matchStatus = status === 'all' ? true : user.status === status

			return matchKeyword && matchStatus
		})
	}, [keyword, status, users])

	const handleCreate = () => {
		setCurrentUser(null)
		setOpen(true)
	}

	const handleEdit = (record: UserItem) => {
		setCurrentUser(record)
		setOpen(true)
	}

	const handleDelete = (record: UserItem) => {
		setUsers(prev => prev.filter(user => user.id !== record.id))
	}

	const handleCancel = () => {
		setOpen(false)
		setCurrentUser(null)
	}

	const handleSubmit = (values: UserFormValues) => {
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
	}

	const columns = useMemo(
		() =>
			createUserColumns({
				onEdit: handleEdit,
				onDelete: handleDelete,
			}),
		[]
	)

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

				<Button type='primary' onClick={handleCreate}>
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
					pageSize: 5,
					showSizeChanger: false,
				}}
			/>

			<UserFormModal
				open={open}
				currentUser={currentUser}
				onCancel={handleCancel}
				onSubmit={handleSubmit}
			/>
		</div>
	)
}

export default UserPage
