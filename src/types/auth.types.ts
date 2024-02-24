import { TUser, TUserInstance } from './user.types'

export type TAuthData = {
  user: TUser
  accessToken: string
  refreshToken: string
}

export type TEditBody = Pick<
  TUserInstance,
  'description' | 'name'
>

export type TLoginBody = Pick<TUserInstance, 'email' | 'password'>

export type TRegistrationBody = Pick<
  TUserInstance,
  'email' | 'name' | 'password'
>
