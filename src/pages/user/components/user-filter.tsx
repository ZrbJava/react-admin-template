import { Button, Input, Select, Space } from 'antd'
import type { UserStatus } from '../../../types/user'

type UserFilterProps = {
	keyword: string
	status: 'all' | UserStatus
	onKeywordChange: (value: string) => void
	onStatusChange: (value: 'all' | UserStatus) => void
	onReset: () => void
}

function UserFilter({
	keyword,
	status,
	onKeywordChange,
	onStatusChange,
	onReset,
}: UserFilterProps) {
	return (
		<Space style={{ marginBottom: 16 }} size={12} wrap>
			<Input
				placeholder='Search by user name'
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

export default UserFilter
