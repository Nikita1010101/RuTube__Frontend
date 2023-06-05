export const formatViews = (views: number): string => {
	const viewsStr = views.toString()
	const lastNumbers =
		viewsStr[viewsStr.length - 2] + viewsStr[viewsStr.length - 1]

	if (views < 10) {
		if (views === 1) return 'Просмотр'

		if (views >= 2 && views <= 4) return 'Просмотра'
	}

	if (lastNumbers[1] === '1' && lastNumbers !== '11') return 'Просмотр'

	if (
		+lastNumbers[1] >= 2 &&
		+lastNumbers[1] <= 4 &&
		!(+lastNumbers >= 12 && +lastNumbers <= 14)
	)
		return 'Просмотра'

	return 'Просмотров'
}
