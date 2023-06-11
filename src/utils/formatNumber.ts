export const formatNumber = (num = 0): string => {
	if (num >= 1_000_000_000) {
		const billions = (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '')

		return billions + 'B'
	} else if (num >= 1_000_000) {
		const millions = (num / 1_000_000).toFixed(1).replace(/\.0$/, '')

		return millions + 'M'
	} else if (num >= 1_000) {
		const kilos = (num / 1_000).toFixed(1).replace(/\.0$/, '')

		return kilos + 'K'
	} else {
		return num.toString()
	}
}
