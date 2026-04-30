import type { ReactNode } from 'react'
import { Button, Card, Space, Tag, Typography } from 'antd'

type ListSectionProps = {
	filter?: ReactNode
	children: ReactNode
	total: number
	filteredTotal: number
	hasFilters?: boolean
	onClearFilters?: () => void
	emptyDescription?: string
	filteredEmptyDescription?: string
}

const { Text } = Typography

function ListSection({
	filter,
	children,
	total,
	filteredTotal,
	hasFilters = false,
	onClearFilters,
	emptyDescription = 'No data yet',
	filteredEmptyDescription = 'No data matches the current filters',
}: ListSectionProps) {
	return (
		<Card>
			{filter}

			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginBottom: 16,
					gap: 12,
					flexWrap: 'wrap',
				}}
			>
				<Space size={8} wrap>
					<Text type='secondary'>Total: {total}</Text>
					<Text type='secondary'>Filtered: {filteredTotal}</Text>
					{hasFilters ? <Tag color='blue'>Filters Applied</Tag> : null}
				</Space>

				{hasFilters && onClearFilters ? (
					<Button type='link' onClick={onClearFilters}>
						Clear Filters
					</Button>
				) : null}
			</div>

			<div
				data-empty-description={hasFilters ? filteredEmptyDescription : emptyDescription}
			>
				{children}
			</div>
		</Card>
	)
}

export default ListSection
