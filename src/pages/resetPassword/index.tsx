import React from 'react'
import { useLocation } from 'react-router-dom'
import ResetPassword from './ResetPassword'
import ResetPasswordWithToken from './ResetPasswordWithToken'

interface ResetProps {}

function Index({}: ResetProps) {
  const location = useLocation()
  const token: string =
    location.pathname.split('/recuperar/').pop() !== '/recuperar'
      ? (location.pathname.split('/recuperar/').pop() as string)
      : ''

  return token && token.length > 0 ? (
    <ResetPasswordWithToken token={token} />
  ) : (
    <ResetPassword />
  )
}

export default Index
