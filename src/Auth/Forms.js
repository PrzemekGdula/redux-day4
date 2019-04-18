import React from 'react'

import LogInForm from './LogInForm'
import LogByGoogleForm from './LogByGoogleForm'
import RegistrationForm from './RegistrationForm'

const Forms = (props) => (
    <div>
        <LogInForm
            email={props.email}
            password={props.password}
            onEmailChange={props.onEmailChange}
            onPasswordChange={props.onPasswordChange}
            onLogInClick={props.onLogInClick}
        />
        <LogByGoogleForm
            onLogInByGoogleClick={props.onLogInByGoogleClick}
        />
        <RegistrationForm />
    </div>
)

export default Forms