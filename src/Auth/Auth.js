import React from 'react'

import { connect } from 'react-redux'
import {emailChangedActionCreator} from '../state/auth'

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

                    onEmailChange={props._onEmailChange}
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

const mapDispatchToProps = dispatch => ({
_onEmailChange: (event)=> dispatch(emailChangedActionCreator(event.target.value))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Auth)