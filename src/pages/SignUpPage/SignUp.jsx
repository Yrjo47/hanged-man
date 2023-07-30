import React from 'react'
import RegForm from '../../components/RegForm'

const SignUp = () => {

    const onSubmit = ({username, password}) => {
        console.log({
            'username': username,
            'password': password,
        })
    }

  return (
    <>
        <RegForm isLoginForm={false} onSubmit={onSubmit}/>
    </>
  )
}

export default SignUp