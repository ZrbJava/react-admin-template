import { getRoleList } from '../../api/modules/role'

export async function roleListLoader() {
	const response = await getRoleList()
	return response.data
}
