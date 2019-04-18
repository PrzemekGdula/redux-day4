import React from 'react'

import Forms from './Forms'

const Auth = (props) => (
    <div>
{
    props._user ?
    props.children
    :
    <Forms />
}

    </div>
)

export default Auth