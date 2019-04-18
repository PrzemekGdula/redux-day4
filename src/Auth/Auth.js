import React from 'react'

import { connect } from 'react-redux'

import Forms from './Forms'

const Auth = (props) => (
    <div>
        {
            props._user ?
                props.children
                :
                <Forms
                    email={props._email}
                    password={props._password}

                    onEmailChange={() => { }}
                    onPasswordChange={() => { }}

                    onLogInClick={() => { }}

                    onLogInByGoogleClick={() => { }}
                />
        }

    </div>
)

const mapStateToProps = state => ({
    _user: state.auth.user,
    _email: state.auth.email,
    _password: state.auth.password,
})

export default connect(
    mapStateToProps
)(Auth)