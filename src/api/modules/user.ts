/**
 * @Description:
 * @Author: zhaorubo
 * @Email: zrbjava@gmail.com
 * @Date: 2026-04-30 11:29:02
 * @LastEditTime: 2026-04-30 16:35:27
 * @LastEditors: zhaorubo
 */

import type { UserFormValues, UserItem } from '../../types/user'

import { createSuccessResponse } from '../../utils/http'

let userStore: UserItem[] = [
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

function sleep(ms = 300) {
	return new Promise(resolve => {
		window.setTimeout(resolve, ms)
	})
}

export async function getUserList() {
	await sleep()
	return createSuccessResponse([...userStore])
}

export async function createUser(payload: UserFormValues) {
	await sleep()

	const newUser: UserItem = {
		id: Date.now(),
		...payload,
	}

	userStore = [newUser, ...userStore]
	return createSuccessResponse(newUser)
}

export async function updateUser(id: number, payload: UserFormValues) {
	await sleep()

	let updatedUser: UserItem | null = null

	userStore = userStore.map(user => {
		if (user.id !== id) {
			return user
		}

		updatedUser = {
			...user,
			...payload,
		}

		return updatedUser
	})

	if (!updatedUser) {
		throw new Error('User not found')
	}

	return createSuccessResponse(updatedUser)
}

export async function deleteUser(id: number) {
	await sleep()

	userStore = userStore.filter(user => user.id !== id)
	return createSuccessResponse(true)
}
