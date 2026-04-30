import { getUserList } from '../../api/modules/user'

export async function userListLoader() {
	return getUserList()
}
