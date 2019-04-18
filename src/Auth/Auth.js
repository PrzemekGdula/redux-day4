import React from 'react'

import Forms from './Forms'

const Auth = (props) => (
    <div>
        {
            props._user ?
                props.children
                :
                <Forms
                    email={}
                    password={}

                    onEmailChange={}
                    onPasswordChange={}

                    onLogInClick={}
                    onLogInByGoogleClick={}
                />
        }

    </div>
)

export default Auth