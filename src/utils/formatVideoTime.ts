export const formatVideoTime = (time: number): string => {
	if (time >= 3600) {
		const hours = Math.floor(time / 3600)
		const minutes = Math.floor((time - hours * 3600) / 60)
		const seconds = Math.floor(time - hours * 3600 - minutes * 60)

		const filteredHours = hours >= 10 ? hours : '0' + hours
		const filteredMinutes = minutes >= 10 ? minutes : '0' + minutes
		const filteredSeconds = seconds >= 10 ? seconds : '0' + seconds

		return `${filteredHours}:${filteredMinutes}:${filteredSeconds}`
	} else if (time < 60) {
		const seconds = Math.floor(time)

		const filteredSeconds = seconds >= 10 ? seconds : '0' + seconds

		return `00:${filteredSeconds}`
	} else {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time - minutes * 60)

		const filteredMinutes = minutes >= 10 ? minutes : '0' + minutes
		const filteredSeconds = seconds >= 10 ? seconds : '0' + seconds

		return `${filteredMinutes}:${filteredSeconds}`
	}
}
