import React from 'react'
import ReactDOM from 'react-dom'

import {store} from './store'
import {Provider} from 'react-redux'

import App from './App'
import Auth from './Auth'
import { startListeningToAuthChangesAsyncctionCreator } from './state/auth';



ReactDOM.render(
    <Provider store={store}>
    <Auth>
        <App />,
    </Auth>,
    </Provider>,
    document.getElementById('root')
)