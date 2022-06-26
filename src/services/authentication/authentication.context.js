import React, { useState, createContext } from "react";
import * as firebase from "firebase";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

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
        if (password !== repeatPassword) {
            setError("error: Passwords do not match");
            return;
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
            setUser(user);
            setIsLoading(false);
        })
            .catch((e) => {
                setError(false);
                setError(e.toString());
            })
    }

    return(
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
            }}


        >{children}</AuthenticationContext.Provider>
    )
}