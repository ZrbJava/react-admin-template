export type RoleStatus = 'enabled' | 'disabled'

export type RoleScope = 'system' | 'business'

export type RoleItem = {
	id: number
	name: string
	code: string
	scope: RoleScope
	memberCount: number
	status: RoleStatus
}
