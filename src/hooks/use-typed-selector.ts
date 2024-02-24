import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { TypeSelectorHook } from '../store/store'

export const useTypedSelector: TypedUseSelectorHook<TypeSelectorHook> =
	useSelector