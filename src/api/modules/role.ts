import type { ApiResponse } from '../../types/api'
import type { RoleItem } from '../../types/role'
import { createSuccessResponse } from '../../utils/http'
import { roleList } from '../../pages/role/mock'

const roleStore: RoleItem[] = [...roleList]

function sleep(ms = 300) {
	return new Promise(resolve => {
		window.setTimeout(resolve, ms)
	})
}

export async function getRoleList(): Promise<ApiResponse<RoleItem[]>> {
	await sleep()
	return createSuccessResponse([...roleStore])
}
