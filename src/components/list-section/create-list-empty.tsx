import { Empty } from 'antd'

type CreateListEmptyOptions = {
	emptyDescription?: string
	filteredEmptyDescription?: string
}

export function createListEmpty(
	hasFilters: boolean,
	options?: CreateListEmptyOptions
) {
	return (
		<Empty
			description={
				hasFilters
					? options?.filteredEmptyDescription ?? 'No data matches the current filters'
					: options?.emptyDescription ?? 'No data yet'
			}
		/>
	)
}
