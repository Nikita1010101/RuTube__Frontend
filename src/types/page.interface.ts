import { NextPage } from 'next'

export type TRoles = {
  isOnlyUser?: boolean
}

export type TNextPageAuth<P = object> = NextPage<P> & TRoles

export type TComponentAuthFields = { Component: TRoles }
