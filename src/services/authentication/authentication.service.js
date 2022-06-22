import * as firebase from "firebase";

const loginRequeste = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email,password)
}