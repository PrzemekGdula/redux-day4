import { auth, googleProvider, databse } from '../firebaseConf'

const EMAIL_CHANGED = 'auth/EMAIL_CHANGED'
const PASS_CHANGED = 'auth/PASS_CHANGED'

export const logInAsyncActionCreator = () => (dispatch, getState) => {
    const state = getState()
    const email = state.auth.email
    const password = state.auth.password

    auth.signInWithEmailAndPassword(email, password)
        .then(() => console.log('ZALOGOWANO'))
        .catch((error) => console.log('WYSTĄPIŁ BŁĄD', error))
}

export const emailChangedActionCreator = newValue => ({
    type: EMAIL_CHANGED,
    newValue,
})
export const passChangedActionCreator = newValue => ({
    type: PASS_CHANGED,
    newValue,
})

const initialState = {
    user: null,
    email: '',
    password: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {
                ...state,
                email: action.newValue,
            }
        case PASS_CHANGED:
            return {
                ...state,
                password: action.newValue,
            }

        default:
            return state
    }
}