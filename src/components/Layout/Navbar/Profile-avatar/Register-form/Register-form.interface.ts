import { Dispatch, SetStateAction } from 'react'

export interface IRegisterForm {
  setIsForm: Dispatch<SetStateAction<boolean>>
}

export interface IRegisterData {
  name: string
  email: string
  password: string
}
