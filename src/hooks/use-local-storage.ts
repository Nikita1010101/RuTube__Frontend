// import { useState, useCallback } from 'react'

// import { IUseLocalStorage } from '@/types/hook.interface'

// export const useLocalStorage = (
//   key: string,
//   value?: number
// ): IUseLocalStorage => {
//   const [storageValue, setStorageValue] = useState<number>(() => {
//     if (typeof window === 'undefined') return value
//     const { id } = JSON.parse(String(localStorage.getItem(key)))
//     return id ?? value
//   })

//   const setValue = useCallback(
//     (value: number): void => {
//       setStorageValue(value)
//       localStorage.setItem(key, JSON.stringify({ id: value }))
//     },
//     [key]
//   )

//   return { storageValue, setValue }
// }
