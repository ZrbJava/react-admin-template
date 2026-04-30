import type { RoleItem } from '../../types/role'

export const roleList: RoleItem[] = [
	{
		id: 1,
		name: 'System Admin',
		code: 'system_admin',
		scope: 'system',
		memberCount: 2,
		status: 'enabled',
	},
	{
		id: 2,
		name: 'Operations Manager',
		code: 'ops_manager',
		scope: 'business',
		memberCount: 5,
		status: 'enabled',
	},
	{
		id: 3,
		name: 'Content Editor',
		code: 'content_editor',
		scope: 'business',
		memberCount: 8,
		status: 'enabled',
	},
	{
		id: 4,
		name: 'Auditor',
		code: 'auditor',
		scope: 'system',
		memberCount: 3,
		status: 'disabled',
	},
	{
		id: 5,
		name: 'Viewer',
		code: 'viewer',
		scope: 'business',
		memberCount: 14,
		status: 'enabled',
	},
]
