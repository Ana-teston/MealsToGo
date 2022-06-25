import React, { useState, useContext }from "react";

import {AccountBackground, AccountCover, AccountContainer, AuthButton, AuthInput } from "../components/account.styles";
import  { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin } = useContext(AuthenticationContext);

    return (
    <AccountBackground>
        <AccountCover />
        <AccountContainer>
            <AuthInput
                label="E-mail"
                value={email}
                textContentType="emailAddress"
                KeyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(u) => setEmail(u)}
            />
            <Spacer size="large">
                <AuthInput
                    label="Password"
                    value={password}
                    textContentType="password"
                    SecurityTextEntry
                    autoCapitalize="none"
                    secure
                    onChangeText={(p) => setPassword(p)}
                />
            </Spacer>
            <Spacer size="large">
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => onLogin(email, password)}
                >
                    Login
                </AuthButton>
            </Spacer>
        </AccountContainer>
    </AccountBackground>
    );
};