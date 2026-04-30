import { getUserList } from '../../api/modules/user'

export async function userListLoader() {
	try {
		const data = await getUserList()
		return data.data
	} catch {
		return null
	}
}
