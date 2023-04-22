export const formatTime = (num: number) => {
	let time = 0

	if (Number.isInteger(num)) time = num
	else time = num * 60

	let result = ''

	const hours = Math.floor(time / 60)
	const minutes = time % 60

	let hoursEnding = ''

	if (hours >= 2 && hours <= 4) hoursEnding = 'а'
	else if (hours < 12 && hours >= 5) hoursEnding = 'ов'

	result += hours !== 0 ? `${hours} час${hoursEnding} ` : ''

	let MinutesEnding = ''

	if ((minutes === 1 || minutes % 10 === 1) && minutes !== 11)
		MinutesEnding = 'а'
	else if (
		minutes % 10 > 1 &&
		minutes % 10 < 5 &&
		(minutes < 12 || minutes > 14)
	)
		MinutesEnding = 'ы'

	result += minutes !== 0 ? `${minutes} минут${MinutesEnding}` : ''

	return result
}
