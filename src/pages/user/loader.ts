import { getUserList } from '../../api/modules/user'

export async function userListLoader() {
	const response = await getUserList()
	return response.data
}
