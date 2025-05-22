import { useState } from 'react';

type ValidationError = {
    isValid: boolean;
    error: string;
};
type ValidationRules = {
    required?: boolean;
    maxLength?: number;
};
type UseValidationProps = {
    login?: ValidationRules;
    password?: ValidationRules;
};

export const useValidationLogin = (props: UseValidationProps) => {
    const [loginState, setLoginState] = useState<ValidationError>({ isValid: true, error: '' });
    const [passwordState, setPasswordState] = useState<ValidationError>({
        isValid: true,
        error: '',
    });
    const validateLogin = (login: string) => {
        const rules = props.login;

        if (rules?.required && login.length === 0) {
            setLoginState({ isValid: false, error: 'Введите логин' });
            return;
        }
        if (rules?.maxLength && login.length > rules.maxLength) {
            setLoginState({
                isValid: false,
                error: `Максимальная длина ${rules.maxLength} символов`,
            });
            return;
        }
        setLoginState({ isValid: true, error: '' });
    };
    const validatePassword = (password: string) => {
        const rules = props.password;

        if (rules?.required && password.length === 0) {
            setPasswordState({ isValid: false, error: 'Введите пароль' });
            return;
        }
        if (rules?.maxLength && password.length > rules.maxLength) {
            setPasswordState({
                isValid: false,
                error: `Максимальная длина ${rules.maxLength} символов`,
            });
            return;
        }
        setPasswordState({ isValid: true, error: '' });
    };
    return {
        loginState,
        passwordState,
        validateLogin,
        validatePassword,
    };
};
