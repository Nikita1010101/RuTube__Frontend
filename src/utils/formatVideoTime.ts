export const formatVideoTime = (time: number) => {
	let hours: number = 0,
		minutes: number = 0,
		seconds: number = 0

	if (time >= 3600) {
		hours = Math.floor(time / 3600)
		minutes = Math.floor((time - hours * 3600) / 60)
		seconds = Math.floor(time - hours * 3600 - minutes * 60)
		return `${hours >= 10 ? hours : '0' + hours}:${
			minutes >= 10 ? minutes : '0' + minutes
		}:${seconds >= 10 ? seconds : '0' + seconds}`
	} else if (time < 60) {
		return `00:${
			Math.floor(time) >= 10 ? Math.floor(time) : '0' + Math.floor(time)
		}`
	} else {
		minutes = Math.floor(time / 60)
		seconds = Math.floor(time - minutes * 60)
		return `${minutes >= 10 ? minutes : '0' + minutes}:${
			seconds >= 10 ? seconds : '0' + seconds
		}`
	}
}
