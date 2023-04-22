import { rootActions } from '../store/root-actions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(rootActions, dispatch)
}