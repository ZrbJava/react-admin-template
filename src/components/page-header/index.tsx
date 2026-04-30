/*
 * @Description:
 * @Author: zhaorubo
 * @Email: zrbjava@gmail.com
 * @Date: 2026-04-30 17:09:33
 * @LastEditTime: 2026-04-30 17:09:34
 * @LastEditors: zhaorubo
 */
import type { ReactNode } from 'react'
import { Space, Typography } from 'antd'

type PageHeaderProps = {
	title: string
	description?: string
	extra?: ReactNode
}

const { Title, Text } = Typography

function PageHeader({ title, description, extra }: PageHeaderProps) {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'flex-start',
				gap: 16,
			}}
		>
			<Space direction='vertical' size={4}>
				<Title level={3} style={{ margin: 0 }}>
					{title}
				</Title>

				{description ? <Text type='secondary'>{description}</Text> : null}
			</Space>

			{extra ? <div>{extra}</div> : null}
		</div>
	)
}

export default PageHeader
