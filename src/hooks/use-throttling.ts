export const useThrottling = (
  func: () => void,
  delay?: number
): (() => void) => {
  let timer: NodeJS.Timeout | null = null

  const throttling = (): void => {
    if (timer) return

    timer = setTimeout(() => {
      func()

      clearTimeout(Number(timer))
      timer = null
    }, delay || 500)
  }

  return throttling
}
