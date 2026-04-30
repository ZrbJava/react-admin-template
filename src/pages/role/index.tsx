import { Button } from 'antd'
import { useMemo, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
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
	const [keyword, setKeyword] = useState('')
	const [status, setStatus] = useState<'all' | RoleStatus>('all')

	const filteredRoles = useMemo(() => {
		return initialRoles.filter(role => {
			const matchKeyword = role.name
				.toLowerCase()
				.includes(keyword.trim().toLowerCase())
			const matchStatus = status === 'all' ? true : role.status === status

			return matchKeyword && matchStatus
		})
	}, [initialRoles, keyword, status])

	const hasFilters = keyword.trim().length > 0 || status !== 'all'

	return (
		<PageContainer>
			<PageHeader
				title='Role List'
				description='View platform roles and their current status.'
				extra={<Button disabled>Add Role</Button>}
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
				total={initialRoles.length}
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
