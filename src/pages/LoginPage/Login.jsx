import React from 'react'
import RegForm from '../../components/RegForm'

const Login = () => {

  const onSubmit = ({username, password}) => {
    console.log({
      'username': username,
      'password': password
    })
  }

  return (
    <>
      <RegForm isLoginForm={true} onSubmit={onSubmit} />
    </>
  )
}

export default Login