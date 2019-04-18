import React from 'react';

import { connect } from 'react-redux';
import { logOut } from './state/auth'

const App = (props) => (
  <div>
    <button
      onClick={props._logOut}
    >
      LOG OUT
    </button>

    {
      Object.entries(props._userLoginsLogs || {})
        .map(
          ([key, value]) => (
            <div
              key={key}
            >
              {value.timestamp}
            </div>
          )
        )

    }
  </div>
)

const mapStateToProps = state => ({
  _userLoginsLogs: state.auth.userLoginsLogs,
})

const mapDispatchToProps = dispatch => ({
  _logOut: () => dispatch(logOut()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
