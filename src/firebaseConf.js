import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCnGryP6hQfoxUp61ey-FOGNHpDSbEUQps",
    authDomain: "jfddl7-api-e1e9f.firebaseapp.com",
    databaseURL: "https://jfddl7-api-e1e9f.firebaseio.com",
    projectId: "jfddl7-api-e1e9f",
    storageBucket: "jfddl7-api-e1e9f.appspot.com",
    messagingSenderId: "638817931408"
}

firebase.initializeApp(config)

export const database = firebase.database()
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()