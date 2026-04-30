import { Button, message } from 'antd'
import { useCallback, useMemo, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getRoleList } from '../../api/modules/role'
import DataTable from '../../components/data-table'
import { createListEmpty } from '../../components/list-section/create-list-empty'
import ListSection from '../../components/list-section'
import PageContainer from '../../components/page-container'
import PageHeader from '../../components/page-header'
import { roleColumns } from './columns'
import RoleFilter from './components/role-filter'
import type { RoleItem, RoleStatus } from '../../types/role'

function RolePage() {
	const initialRoles = useLoaderData() as RoleItem[]
	const [roles, setRoles] = useState<RoleItem[]>(() => initialRoles)
	const [loading, setLoading] = useState(false)
	const [keyword, setKeyword] = useState('')
	const [status, setStatus] = useState<'all' | RoleStatus>('all')

	const loadRoles = useCallback(async () => {
		try {
			setLoading(true)
			const response = await getRoleList()
			setRoles(response.data)
		} catch {
			message.error('Failed to load roles')
		} finally {
			setLoading(false)
		}
	}, [])

	const filteredRoles = useMemo(() => {
		return roles.filter(role => {
			const matchKeyword = role.name
				.toLowerCase()
				.includes(keyword.trim().toLowerCase())
			const matchStatus = status === 'all' ? true : role.status === status

			return matchKeyword && matchStatus
		})
	}, [keyword, roles, status])

	const hasFilters = keyword.trim().length > 0 || status !== 'all'

	return (
		<PageContainer>
			<PageHeader
				title='Role List'
				description='View platform roles and their current status.'
				extra={<Button onClick={() => void loadRoles()}>Refresh Roles</Button>}
			/>

			<ListSection
				filter={
					<RoleFilter
						keyword={keyword}
						status={status}
						onKeywordChange={setKeyword}
						onStatusChange={setStatus}
						onReset={() => {
							setKeyword('')
							setStatus('all')
						}}
					/>
				}
				total={roles.length}
				filteredTotal={filteredRoles.length}
				hasFilters={hasFilters}
				onClearFilters={() => {
					setKeyword('')
					setStatus('all')
				}}
				emptyDescription='No role data yet'
				filteredEmptyDescription='No roles match the current filters'
			>
				<DataTable<RoleItem>
					rowKey='id'
					loading={loading}
					columns={roleColumns}
					dataSource={filteredRoles}
					emptyText={createListEmpty(hasFilters, {
						emptyDescription: 'No role data yet',
						filteredEmptyDescription: 'No roles match the current filters',
					})}
				/>
			</ListSection>
		</PageContainer>
	)
}

export default RolePage
