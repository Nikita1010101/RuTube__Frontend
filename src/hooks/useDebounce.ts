import { useEffect, useState } from 'react'

export const useDebounce = (value: string, delay?: number): string => {
	const [debouncedValue, setDebouncedValue] = useState<string>('')

	useEffect(() => {
		const timer: NodeJS.Timeout = setTimeout(() => {
			setDebouncedValue(value)
		}, delay || 500)

		return () => clearTimeout(timer)
	}, [value, delay])

	return debouncedValue
}
