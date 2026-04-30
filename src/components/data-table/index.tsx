import type { TableProps } from 'antd'
import { Table } from 'antd'
import type { ReactNode } from 'react'

type DataTableProps<T extends object> = {
	emptyText?: ReactNode
	pageSize?: number
	showSizeChanger?: boolean
} & TableProps<T>

function DataTable<T extends object>({
	emptyText,
	pageSize = 5,
	showSizeChanger = false,
	pagination,
	locale,
	...restProps
}: DataTableProps<T>) {
	return (
		<Table<T>
			pagination={
				pagination === false
					? false
					: {
							pageSize,
							showSizeChanger,
							...pagination,
						}
			}
			locale={{
				...locale,
				emptyText: emptyText ?? locale?.emptyText,
			}}
			{...restProps}
		/>
	)
}

export default DataTable
