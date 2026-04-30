/**
 * @Description:
 * @Author: zhaorubo
 * @Email: zrbjava@gmail.com
 * @Date: 2026-04-30 16:32:43
 * @LastEditTime: 2026-04-30 16:32:43
 * @LastEditors: zhaorubo
 */
import type { ApiResponse } from '../types/api'

export function createSuccessResponse<T>(
	data: T,
	message = 'success'
): ApiResponse<T> {
	return {
		code: 0,
		message,
		data,
	}
}
