import React from 'react';
import {useUserAuth} from '../context/UserAuthContext';
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const {user} = useUserAuth();
  // const {auth} = useUserAuth();
  if(!user) {
    return <Navigate to="/" />
  }
  return children
}

export default ProtectedRoute;
