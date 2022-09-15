import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useUserContext } from '../context/user_context'

const PrivateRoute = () => {
  return <h4>Private Route</h4>
}
export default PrivateRoute
