/**
 * @Description:
 * @Author: zhaorubo
 * @Email: zrbjava@gmail.com
 * @Date: 2026-04-30 17:08:07
 * @LastEditTime: 2026-04-30 17:08:07
 * @LastEditors: zhaorubo
 */
import type { ReactNode } from 'react'
import { Space } from 'antd'

type PageContainerProps = {
	children: ReactNode
}

function PageContainer({ children }: PageContainerProps) {
	return (
		<Space direction='vertical' size={16} style={{ width: '100%' }}>
			{children}
		</Space>
	)
}

export default PageContainer
