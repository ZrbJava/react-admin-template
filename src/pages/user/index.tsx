import { Button, Card, Empty, Space, Table, Tag, Typography, message } from 'antd'
import { useCallback, useMemo, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { createUserColumns } from './columns'
import UserFormModal from './components/user-form-modal'
import UserFilter from './components/user-filter'
import PageContainer from '../../components/page-container'
import PageHeader from '../../components/page-header'
import {
	createUser,
	deleteUser,
	getUserList,
	updateUser,
} from '../../api/modules/user'
import type { UserFormValues, UserItem, UserStatus } from '../../types/user'

const { Text } = Typography

function UserPage() {
	const initialUsers = useLoaderData() as UserItem[]
	const [users, setUsers] = useState<UserItem[]>(() => initialUsers)
	const [loading, setLoading] = useState(false)
	const [keyword, setKeyword] = useState('')
	const [status, setStatus] = useState<'all' | UserStatus>('all')
	const [open, setOpen] = useState(false)
	const [currentUser, setCurrentUser] = useState<UserItem | null>(null)

	const loadUsers = useCallback(async () => {
		try {
			setLoading(true)
			const response = await getUserList()
			setUsers(response.data)
		} catch {
			message.error('Failed to load users')
		} finally {
			setLoading(false)
		}
	}, [])

	const filteredUsers = useMemo(() => {
		return users.filter(user => {
			const matchKeyword = user.name
				.toLowerCase()
				.includes(keyword.trim().toLowerCase())
			const matchStatus = status === 'all' ? true : user.status === status

			return matchKeyword && matchStatus
		})
	}, [keyword, status, users])

	const handleCreate = useCallback(() => {
		setCurrentUser(null)
		setOpen(true)
	}, [])

	const handleEdit = useCallback((record: UserItem) => {
		setCurrentUser(record)
		setOpen(true)
	}, [])

	const handleDelete = useCallback(
		async (record: UserItem) => {
			try {
				setLoading(true)
				const response = await deleteUser(record.id)
				await loadUsers()
				message.success(response.message)
			} catch {
				message.error('Failed to delete user')
			} finally {
				setLoading(false)
			}
		},
		[loadUsers]
	)

	const handleCancel = useCallback(() => {
		setOpen(false)
		setCurrentUser(null)
	}, [])

	const handleSubmit = useCallback(
		async (values: UserFormValues) => {
			try {
				setLoading(true)

				if (currentUser) {
					const response = await updateUser(currentUser.id, values)
					message.success(response.message)
				} else {
					const response = await createUser(values)
					message.success(response.message)
				}

				setOpen(false)
				setCurrentUser(null)
				await loadUsers()
			} catch {
				message.error(
					currentUser ? 'Failed to update user' : 'Failed to create user'
				)
			} finally {
				setLoading(false)
			}
		},
		[currentUser, loadUsers]
	)

	const columns = useMemo(
		() =>
			createUserColumns({
				onEdit: handleEdit,
				onDelete: handleDelete,
			}),
		[handleDelete, handleEdit]
	)

	const hasFilters = keyword.trim().length > 0 || status !== 'all'

	return (
		<PageContainer>
			<PageHeader
				title='User List'
				description='Manage user information in the practice admin system.'
				extra={
					<Button type='primary' onClick={handleCreate}>
						New User
					</Button>
				}
			/>

			<Card>
				<UserFilter
					keyword={keyword}
					status={status}
					onKeywordChange={setKeyword}
					onStatusChange={setStatus}
					onReset={() => {
						setKeyword('')
						setStatus('all')
					}}
				/>

				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginBottom: 16,
						gap: 12,
						flexWrap: 'wrap',
					}}
				>
					<Space size={8} wrap>
						<Text type='secondary'>Total users: {users.length}</Text>
						<Text type='secondary'>Filtered: {filteredUsers.length}</Text>
						{hasFilters ? <Tag color='blue'>Filters Applied</Tag> : null}
					</Space>

					{hasFilters ? (
						<Button
							type='link'
							onClick={() => {
								setKeyword('')
								setStatus('all')
							}}
						>
							Clear Filters
						</Button>
					) : null}
				</div>

				<Table<UserItem>
					rowKey='id'
					loading={loading}
					columns={columns}
					dataSource={filteredUsers}
					locale={{
						emptyText: (
							<Empty
								description={
									hasFilters
										? 'No users match the current filters'
										: 'No user data yet'
								}
							/>
						),
					}}
					pagination={{
						pageSize: 5,
						showSizeChanger: false,
					}}
				/>
			</Card>

			<UserFormModal
				open={open}
				currentUser={currentUser}
				onCancel={handleCancel}
				onSubmit={handleSubmit}
			/>
		</PageContainer>
	)
}

export default UserPage
