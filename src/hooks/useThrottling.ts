export const useThrottiling = (
	func: () => void,
	delay?: number
): (() => void) => {
	let timer: NodeJS.Timeout | null = null

	const throttiling = (): void => {
		if (timer) return

		timer = setTimeout(() => {
			func()

			clearTimeout(Number(timer))
			timer = null
		}, delay || 500)
	}

	return throttiling
}
