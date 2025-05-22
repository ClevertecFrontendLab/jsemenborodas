import { useState } from 'react';

type ValidationError = {
    isValid: boolean;
    error: string;
};
type ValidationRules = {
    required?: boolean;
    maxLength?: number;
    minLength?: number;
};
type UseValidationProps = {
    login?: ValidationRules;
    password?: ValidationRules;
    email?: ValidationRules;
    firstName?: ValidationRules;
    lastName?: ValidationRules;
};

export const useValidationPassword = (props: UseValidationProps) => {
    const [loginState, setLoginState] = useState<ValidationError>({ isValid: true, error: '' });
    const [passwordState, setPasswordState] = useState<ValidationError>({
        isValid: true,
        error: '',
    });
    const [emailState, setEmailState] = useState<ValidationError>({
        isValid: true,
        error: '',
    });
    const [firstNameState, setFirstNameState] = useState<ValidationError>({
        isValid: true,
        error: '',
    });
    const [lastNameState, setLastNameState] = useState<ValidationError>({
        isValid: true,
        error: '',
    });
    const loginRegExp = new RegExp(
        `^[A-Za-z0-9!@#$&_+-.]{${props.login?.minLength},${props.login?.maxLength}}$`,
    );
    const firstLetterUpperCaseRegExp = new RegExp('^[A-Z]{1,}');
    const firstLetterUpperCaseRusRegExp = new RegExp('^[А-Я]{1,}');
    const hasNumberRegExp = new RegExp('[0-9]');
    const allRegExp = new RegExp('^[А-Яа-я-ё]{1,}$');
    const emailRegExp = new RegExp(
        '^[A-Za-z0-9._%+-]{1,}(?<!\\.)@([A-Za-z0-9-]{1,})(\\.[A-Za-z]{2,})+$',
    );
    const validateLogin = (login: string) => {
        const rules = props.login;
        if (rules?.required && login.length === 0) {
            setLoginState({ isValid: false, error: 'Введите логин' });
            return;
        }
        if (rules?.minLength && login.length < rules.minLength) {
            setLoginState({ isValid: false, error: 'Не соответствует формату' });
            return;
        }
        if (rules?.maxLength && login.length > rules.maxLength) {
            setLoginState({
                isValid: false,
                error: `Максимальная длина ${rules.maxLength} символов`,
            });
            return;
        }
        const isMatch = loginRegExp.test(login);
        if (!isMatch) {
            setLoginState({ isValid: false, error: 'Не соответствует формату' });
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
        if (rules?.minLength && password.length < rules.minLength) {
            setPasswordState({ isValid: false, error: 'Не соответствует формату' });
            return;
        }
        if (rules?.maxLength && password.length > rules.maxLength) {
            setPasswordState({
                isValid: false,
                error: `Максимальная длина ${rules.maxLength} символов`,
            });
            return;
        }
        const isMatch = loginRegExp.test(password);
        const isFirstLetterMatch = firstLetterUpperCaseRegExp.test(password);
        const hasNumber = hasNumberRegExp.test(password);
        if (!isMatch || !isFirstLetterMatch || !hasNumber) {
            setPasswordState({ isValid: false, error: 'Не соответствует формату' });
            return;
        }
        setPasswordState({ isValid: true, error: '' });
    };

    const validateEmail = (email: string) => {
        const rules = props.email;

        if (rules?.required && email.length === 0) {
            setEmailState({ isValid: false, error: 'Введите e-mail' });
            return;
        }
        if (rules?.maxLength && email.length > rules.maxLength) {
            setEmailState({
                isValid: false,
                error: `Максимальная длина ${rules.maxLength} символов`,
            });
            return;
        }
        const isMatch = emailRegExp.test(email);
        if (!isMatch) {
            setEmailState({ isValid: false, error: 'Введите корректный e-mail' });
            return;
        }
        setEmailState({ isValid: true, error: '' });
    };

    const validateFirstName = (firstName: string) => {
        const rules = props.firstName;

        if (rules?.required && firstName.length === 0) {
            setFirstNameState({ isValid: false, error: 'Введите имя' });
            return;
        }
        if (rules?.maxLength && firstName.length > rules.maxLength) {
            setFirstNameState({
                isValid: false,
                error: `Максимальная длина ${rules.maxLength} символов`,
            });
            return;
        }
        const isMatchByLetters = firstLetterUpperCaseRusRegExp.test(firstName);
        const isMatchByAll = allRegExp.test(firstName);
        if (!isMatchByLetters) {
            setFirstNameState({ isValid: false, error: 'Должно начинаться с кириллицы А-Я' });
            return;
        }
        if (!isMatchByAll) {
            setFirstNameState({ isValid: false, error: 'Только кириллица А-Я, и "-"' });
            return;
        }
        setFirstNameState({ isValid: true, error: '' });
    };

    const validateLastName = (lastName: string) => {
        const rules = props.lastName;

        if (rules?.required && lastName.length === 0) {
            setLastNameState({ isValid: false, error: 'Введите фамилию' });
            return;
        }
        if (rules?.maxLength && lastName.length > rules.maxLength) {
            setLastNameState({
                isValid: false,
                error: `Максимальная длина ${rules.maxLength} символов`,
            });
            return;
        }
        const isMatchByLetters = firstLetterUpperCaseRusRegExp.test(lastName);
        const isMatchByAll = allRegExp.test(lastName);
        if (!isMatchByLetters) {
            setLastNameState({ isValid: false, error: 'Должно начинаться с кириллицы А-Я' });
            return;
        }
        if (!isMatchByAll) {
            setLastNameState({ isValid: false, error: 'Только кириллица А-Я, и "-"' });
            return;
        }
        setLastNameState({ isValid: true, error: '' });
    };
    return {
        loginState,
        passwordState,
        emailState,
        firstNameState,
        lastNameState,
        validateLogin,
        validatePassword,
        validateEmail,
        validateFirstName,
        validateLastName,
    };
};
