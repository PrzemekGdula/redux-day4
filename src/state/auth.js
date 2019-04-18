const LOGIN = 'auth/LOGIN'

export const loginActionCreator = () => ({
    type: LOGIN
})

const initialState = {
    user: null,
    email: 'email',
    password: 'password',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {

            }

        default:
            return state
    }
}