import React, { useState, createContext } from "react";
import * as firebase from "firebase";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    firebase.auth().onAuthStateChanged((usr) => {
        if (usr) {
            setUser(usr);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    });

    const onLogin = (email, password) => {
        loginRequest(email, password)
            .then((user) => {
            setUser(user);
            setIsLoading(false);
        })
            .catch((e) => {
                setError(false);
                setError(e.toString());
            })
    };

    const onRegister = (email, password, repeatPassword) => {
        setIsLoading(true);
        if (password !== repeatPassword) {
            setError("error: Passwords do not match");
            return;
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
            setUser(user);
            setIsLoading(true);
        })
            .catch((e) => {
                setError(false);
                setError(e.toString());
            });
    };

    const onLogout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(null);
                setError(null);
            });
    };

    return(
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout,
            }}


        >{children}</AuthenticationContext.Provider>
    )
}