import { CreateAxiosDefaults } from 'axios'

export const getAxiosParams: CreateAxiosDefaults = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
}
