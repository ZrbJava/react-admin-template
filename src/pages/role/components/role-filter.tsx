import { Button, Input, Select, Space } from 'antd'
import type { RoleStatus } from '../../../types/role'

type RoleFilterProps = {
	keyword: string
	status: 'all' | RoleStatus
	onKeywordChange: (value: string) => void
	onStatusChange: (value: 'all' | RoleStatus) => void
	onReset: () => void
}

function RoleFilter({
	keyword,
	status,
	onKeywordChange,
	onStatusChange,
	onReset,
}: RoleFilterProps) {
	return (
		<Space style={{ marginBottom: 16 }} size={12} wrap>
			<Input
				placeholder='Search by role name'
				value={keyword}
				onChange={event => onKeywordChange(event.target.value)}
				style={{ width: 220 }}
				allowClear
			/>

			<Select
				value={status}
				onChange={value => onStatusChange(value)}
				style={{ width: 180 }}
				options={[
					{ label: 'All Status', value: 'all' },
					{ label: 'Enabled', value: 'enabled' },
					{ label: 'Disabled', value: 'disabled' },
				]}
			/>

			<Button onClick={onReset}>Reset</Button>
		</Space>
	)
}

export default RoleFilter
