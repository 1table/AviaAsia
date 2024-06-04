import React from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import s from './Registration.module.css'

const Registration = () => {
  return (
    <div className={s.Registration_container}>
     <h1>Registration Page</h1>
      <RegistrationForm />
    </div>
  )
}

export default Registration