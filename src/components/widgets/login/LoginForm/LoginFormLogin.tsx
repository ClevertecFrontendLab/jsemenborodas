import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    VStack,
} from '@chakra-ui/react';
import { Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useGetAuthMutation } from '~/query/services/auth';
import { setAppError, setAppLoader, setIsAuth, userLoadingSelector } from '~/store/app-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { toggleIsAlertOpen, toggleIsResetPasswordOpen } from '~/store/reducers/authModals';
import { resetAllUserState } from '~/store/reducers/user';

import { Loader } from '../../loader/Loader';
import ShowPassword from './assets/ShowPassword.png';

export type Err = { error: string; message: string; statusCode: number };
export type Err2 = {
    error: {
        data: { message: string; error: string; statusCode: number };
        status: number;
    };
};
export function LoginFormLogin() {
    const dispatch = useAppDispatch();
    const [ShowPasswordBoolean, setShowPasswordBoolean] = useState<boolean>(false);
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isFirstMount, setIsFirstMount] = useState<boolean>(true);

    const togglePasswordVisibility = () => {
        setShowPasswordBoolean(!ShowPasswordBoolean);
    };
    const resetPasswordVisibility = () => {
        setShowPasswordBoolean(false);
    };

    const [isLoginValid, setIsLoginValid] = useState<boolean>(true);
    const [loginError, setLoginError] = useState<string>('');
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
    const [passwordError, setPasswordError] = useState<string>('');
    const [getAuth] = useGetAuthMutation();
    const isLoading = useAppSelector(userLoadingSelector);
    const checkData = () => {
        let valid = true;
        if (login.length && login.length <= 50) {
            setIsLoginValid(true);
            setLoginError('');
        } else {
            if (login.length === 0) {
                setIsLoginValid(false);
                setLoginError('Введите логин');
                valid = false;
            } else {
                setIsLoginValid(false);
                setLoginError('Максимальная длина 50 символов');
                valid = false;
            }
        }
        if (password.length && password.length <= 50) {
            setIsPasswordValid(true);
            setPasswordError('');
        } else {
            if (password.length === 0) {
                setIsPasswordValid(false);
                setPasswordError('Введите пароль');
                valid = false;
            } else {
                setIsPasswordValid(false);
                setPasswordError('Максимальная длина 50 символов');
                valid = false;
            }
        }
        return valid;
    };
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (checkData()) {
            try {
                dispatch(setAppLoader(true));
                const responce = await getAuth({ login: login, password: password });
                if ('data' in responce) {
                    dispatch(setIsAuth(true));
                    sessionStorage.setItem('isAuth', 'true');
                    dispatch(setAppLoader(false));
                }
                if ('error' in responce) {
                    const err = responce as Err2;
                    const responceStatusCode = err.error.status;
                    if (responceStatusCode === 401) {
                        dispatch(setAppError('WrongLoginOrPassword'));
                    }
                    if (responceStatusCode === 403) {
                        dispatch(setAppError('EmailNotVerified'));
                    }
                    if (responceStatusCode >= 500) {
                        dispatch(setAppError('ServerError'));
                        dispatch(toggleIsAlertOpen());
                    }
                }
            } catch (error) {
                const err = error as Err;
                const responceStatusCode = err.statusCode;
                if (responceStatusCode === 401) {
                    dispatch(setAppError('WrongLoginOrPassword'));
                }
                if (responceStatusCode === 403) {
                    dispatch(setAppError('EmailNotVerified'));
                }
                if (responceStatusCode >= 500) {
                    dispatch(setAppError('ServerError'));
                    sessionStorage.setItem('pswrd', password);
                    sessionStorage.setItem('lgn', login);
                    dispatch(toggleIsAlertOpen());
                }
            } finally {
                dispatch(setAppLoader(false));
            }
        }
    };

    const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.trim();
        setLogin(newValue);
        if (newValue.length && newValue.length <= 50) {
            setIsLoginValid(true);
            setLoginError('');
        } else {
            if (newValue.length === 0) {
                setIsLoginValid(false);
                setLoginError('Введите логин');
            } else {
                setIsLoginValid(false);
                setLoginError('Максимальная длина 50 символов');
            }
        }
    };

    const trimLogin = () => {
        const newValue = login.trim();
        setLogin(newValue);
    };

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setPassword(newValue);
        if (newValue.length && newValue.length <= 50) {
            setIsPasswordValid(true);
            setPasswordError('');
        } else {
            if (newValue.length === 0) {
                setIsPasswordValid(false);
                setPasswordError('Введите пароль');
            } else {
                setIsPasswordValid(false);
                setPasswordError('Максимальная длина 50 символов');
            }
        }
    };
    useEffect(() => {
        if (isFirstMount) {
            setIsFirstMount(false);
            dispatch(setAppLoader(false));
            return;
        }
    }, [isFirstMount, dispatch]);

    return (
        <>
            {isLoading && <Loader />}
            <Box as='form' w='100%' onSubmit={handleSubmit} data-test-id='sign-in-form'>
                <VStack w='100%' spacing='112px'>
                    <Box w='100%'>
                        <VStack w='100%'>
                            <Box w='100%' ml={{ '2xl': '24px' }}>
                                <FormControl
                                    w={{ base: '100%', sm: '355px', xl: '451px', '2xl': '461px' }}
                                    mx={{ sm: 'auto' }}
                                >
                                    <FormLabel
                                        fontFamily='Inter'
                                        fontWeight={400}
                                        fontSize='16px'
                                        lineHeight='24px'
                                        mb='4px'
                                    >
                                        Логин для входа на сайт
                                    </FormLabel>
                                    <Input
                                        type='text'
                                        bg='white'
                                        w={{ base: '100%' }}
                                        data-test-id='login-input'
                                        h='48px'
                                        placeholder='Введите логин'
                                        value={login}
                                        isInvalid={!isLoginValid}
                                        onChange={handleChangeLogin}
                                        onMouseDown={trimLogin}
                                        onMouseUp={trimLogin}
                                        onMouseLeave={trimLogin}
                                        sx={{
                                            '::placeholder': {
                                                fontFamily: 'Inter',
                                                fontWeight: '400',
                                                fontSize: { base: '18px' },
                                                color: 'rgba(19, 75, 0, 1)',
                                            },
                                        }}
                                    />
                                </FormControl>
                                {!isLoginValid && (
                                    <Box
                                        w={{
                                            base: '100%',
                                            sm: '355px',
                                            xl: '451px',
                                            '2xl': '461px',
                                        }}
                                        mx='auto'
                                        textAlign='left'
                                        fontFamily='Inter'
                                        color='#E53E3E'
                                    >
                                        {loginError}
                                    </Box>
                                )}
                            </Box>
                            <Box w='100%' mt='16px' ml={{ '2xl': '24px' }}>
                                <FormControl
                                    w={{ base: '100%', sm: '355px', xl: '451px', '2xl': '461px' }}
                                    mx={{ sm: 'auto' }}
                                >
                                    <FormLabel
                                        fontFamily='Inter'
                                        fontWeight={400}
                                        fontSize='16px'
                                        lineHeight='24px'
                                        mb='4px'
                                    >
                                        Пароль
                                    </FormLabel>
                                    <InputGroup>
                                        <Input
                                            type={ShowPasswordBoolean ? 'text' : 'password'}
                                            bg='white'
                                            w={{ base: '100%' }}
                                            h='48px'
                                            placeholder='Пароль для сайта'
                                            data-test-id='password-input'
                                            value={password}
                                            onChange={handleChangePassword}
                                            isInvalid={!isPasswordValid}
                                            sx={{
                                                '::placeholder': {
                                                    fontFamily: 'Inter',
                                                    fontWeight: '400',
                                                    fontSize: { base: '18px' },
                                                    color: 'rgba(19, 75, 0, 1)',
                                                },
                                            }}
                                        />
                                        <InputRightElement
                                            w='48px'
                                            h='48px'
                                            onMouseDown={togglePasswordVisibility}
                                            onMouseUp={togglePasswordVisibility}
                                            onMouseLeave={resetPasswordVisibility}
                                            cursor='pointer'
                                            data-test-id='password-visibility-button'
                                        >
                                            <Image src={ShowPassword} />
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                {!isPasswordValid && (
                                    <Box
                                        w={{
                                            base: '100%',
                                            sm: '355px',
                                            xl: '451px',
                                            '2xl': '461px',
                                        }}
                                        mx='auto'
                                        textAlign='left'
                                        fontFamily='Inter'
                                        color='#E53E3E'
                                    >
                                        {passwordError}
                                    </Box>
                                )}
                            </Box>
                        </VStack>
                    </Box>
                    <Box w='100%' ml={{ '2xl': '24px' }}>
                        <Box w='100%'>
                            <Button
                                type='submit'
                                w={{ base: '100%', sm: '355px', xl: '451px', '2xl': '461px' }}
                                h='48px'
                                bg='rgba(0, 0, 0, 0.92)'
                                border='1px solid rgba(0, 0, 0, 0.08)'
                                data-test-id='submit-button'
                                sx={{ _hover: { bg: 'rgba(0, 0, 0, 0.92)' } }}
                            >
                                <Box
                                    as='span'
                                    mx='auto'
                                    fontFamily='Inter'
                                    fontWeight='600'
                                    fontSize={{ base: '18px' }}
                                    lineHeight={{ base: '28px' }}
                                    color='rgba(255, 255, 255, 1)'
                                >
                                    Войти
                                </Box>
                            </Button>
                        </Box>
                        <Box
                            w='100%'
                            mt='16px'
                            onClick={() => {
                                dispatch(resetAllUserState());
                                dispatch(toggleIsResetPasswordOpen());
                            }}
                        >
                            <Text
                                fontFamily='Inter'
                                fontWeight='600'
                                fontSize={{ base: '16px' }}
                                lineHeight={{ base: '24px' }}
                                color='rgba(0, 0, 0, 1)'
                                mx='auto'
                                cursor='pointer'
                                data-test-id='forgot-password'
                            >
                                Забыли логин или пароль?
                            </Text>
                        </Box>
                    </Box>
                </VStack>
            </Box>
        </>
    );
}
