export type UserStatus = 'enabled' | 'disabled'

export type UserRole = 'Admin' | 'Editor' | 'Viewer'

export type UserItem = {
	id: number
	name: string
	email: string
	role: UserRole
	status: UserStatus
}

export type UserFormValues = Omit<UserItem, 'id'>
