/**
 * @Description:
 * @Author: zhaorubo
 * @Email: zrbjava@gmail.com
 * @Date: 2026-04-30 16:32:04
 * @LastEditTime: 2026-04-30 16:32:13
 * @LastEditors: zhaorubo
 */

export type ApiResponse<T> = {
	code: number
	message: string
	data: T
}
