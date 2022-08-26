import React from 'react'
import { useAppSelector } from './redux'

function useAuth() {

    const {email, token} = useAppSelector(state=>state.LoginReducer)

  return {
      isAuth: !!email,
      email,
      token
  }
  
}

export default useAuth