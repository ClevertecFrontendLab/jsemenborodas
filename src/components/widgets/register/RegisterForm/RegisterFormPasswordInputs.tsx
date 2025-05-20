import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    useBreakpointValue,
    VStack,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '~/store/hooks';
import {
    progressSelect,
    setLogin,
    setPassword,
    setRepeatPassword,
    userLoginSelect,
    userPasswordSelect,
    userRepeatPasswordSelect,
} from '~/store/reducers/user';

import ShowPassword from '../../login/LoginForm/assets/ShowPassword.png';
type RegisterButtonProps = {
    onClick?: () => void;
};
export function RegisterFormPasswordInputs({ onClick }: RegisterButtonProps) {
    const dispatch = useAppDispatch();

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [isRepeatPasswordVibisle, setIsRepeatPasswordVisible] = useState<boolean>(false);

    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
    const [isLoginValid, setIsLoginValid] = useState<boolean>(true);
    const [isRepeatValid, setIsRepeatValid] = useState<boolean>(true);

    const progressBar = useAppSelector(progressSelect);

    const [passwordError, setPasswordError] = useState<string>('');
    const [loginError, setLoginError] = useState<string>('');
    const [repeatPasswordError, setRepeatPasswordError] = useState<string>('');

    const password = useAppSelector(userPasswordSelect);
    const login = useAppSelector(userLoginSelect);
    const repeatPassword = useAppSelector(userRepeatPasswordSelect);

    const loginRegExp = new RegExp('^[A-Za-z0-9!@#$&_+-.]{0,50}$', 'im');
    const firstLetterUpperCaseRegExp = new RegExp('^[A-Z]{1,}');
    const hasNumberRegExp = new RegExp('[0-9]');
    const checkLogin = (value: string) => {
        if (value.length >= 5 && value.length <= 50) {
            const isMatch = loginRegExp.test(value);
            if (isMatch) {
                setIsLoginValid(true);
                setLoginError('');
                return;
            }
            setIsLoginValid(false);
            setLoginError('Не соответствует формату');
        }
        if (value.length === 0) {
            setIsLoginValid(false);
            setLoginError('Введите логин');
            return;
        }
        if (value.length < 5) {
            setIsLoginValid(false);
            setLoginError('Не соответствует формату');
            return;
        }
        if (value.length > 50) {
            setIsLoginValid(false);
            setLoginError('Максимальная длина 50 символов');
            return;
        }
    };

    const checkPassword = (value: string) => {
        if (value.length >= 8 && value.length <= 50) {
            const isMatch = loginRegExp.test(value);
            const isFirstLetterMatch = firstLetterUpperCaseRegExp.test(value);
            const hasNumber = hasNumberRegExp.test(value);
            if (isMatch && isFirstLetterMatch && hasNumber) {
                setIsPasswordValid(true);
                setPasswordError('');
                return;
            }
            setIsPasswordValid(false);
            setPasswordError('Не соответствует формату');
        }
        if (value.length === 0) {
            setIsPasswordValid(false);
            setPasswordError('Введите пароль');
            return;
        }
        if (value.length < 8) {
            setIsPasswordValid(false);
            setPasswordError('Не соответствует формату');
            return;
        }
        if (value.length > 50) {
            setIsPasswordValid(false);
            setPasswordError('Максимальная длина 50 символов');
            return;
        }
    };

    const checkRepeatPassword = (value: string) => {
        if (value.length === 0) {
            setIsRepeatValid(false);
            setRepeatPasswordError('Повторите пароль');
            return;
        }
        if (value === password) {
            setIsRepeatValid(true);
            setRepeatPasswordError('');
            return;
        }
        setIsRepeatValid(false);
        setRepeatPasswordError('Пароли должны совпадать');
    };
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const toggleRepeatPasswordVisibility = () => {
        setIsRepeatPasswordVisible(!isRepeatPasswordVibisle);
    };

    const resetPasswordVisibility = () => {
        setIsPasswordVisible(false);
    };

    const resetRepeatPasswordVisibility = () => {
        setIsRepeatPasswordVisible(false);
    };

    const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        dispatch(setLogin(newValue));
        checkLogin(newValue);
    };
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        dispatch(setPassword(newValue));
        checkPassword(newValue);
    };
    const handleChangePasswordRepeat = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        dispatch(setRepeatPassword(newValue));
        checkRepeatPassword(newValue);
    };

    const trimLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.trim();
        dispatch(setLogin(newValue));
        checkLogin(newValue);
    };
    const widthInput = useBreakpointValue({
        base: '100%',
        sm: '355px',
        xl: '451px',
        '2xl': '461px',
    });
    const onSubmit = () => {
        if (!isLoginValid) {
            const newValue = login.trim();
            dispatch(setLogin(newValue));
            checkLogin(newValue);
        }
        if (!isPasswordValid) {
            const newValue = password;
            dispatch(setPassword(newValue));
            checkPassword(newValue);
        }
        if (!isRepeatValid) {
            const newValue = repeatPassword;
            dispatch(setRepeatPassword(newValue));
            checkRepeatPassword(newValue);
        }
        if (isLoginValid && isPasswordValid && isRepeatValid) return true;
        return false;
    };
    return (
        <VStack
            sx={{
                '*': {
                    _before: { display: 'none !important' },
                    _after: { display: 'none !important' },
                },
            }}
            w='100%'
            mt={{ base: '16px' }}
            ml={{ '2xl': '24px' }}
            spacing={6}
            mr={{ '2xl': '24px' }}
        >
            <Box w='100%'>
                <FormControl w={widthInput} minW={widthInput} maxW={widthInput} mx={{ sm: 'auto' }}>
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
                        data-test-id='login-input'
                        bg='white'
                        w={{ base: '100%' }}
                        h='48px'
                        placeholder='bake_and_pie'
                        value={login}
                        onChange={handleChangeLogin}
                        onBlur={trimLogin}
                        isInvalid={!isLoginValid}
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
                <Box
                    mt='4px'
                    w={{
                        base: '100%',
                        sm: '355px',
                        xl: '451px',
                        '2xl': '461px',
                    }}
                    mx='auto'
                    textAlign='left'
                    fontFamily='Inter'
                    fontSize='12px'
                    lineHeight='16px'
                    color='rgba(0, 0, 0, 0.64)'
                >
                    Логин не менее 5 символов, только латиница
                </Box>
                {!isLoginValid && (
                    <Box
                        mt='4px'
                        w={{
                            base: '100%',
                            sm: '355px',
                            xl: '451px',
                            '2xl': '461px',
                        }}
                        mx='auto'
                        textAlign='left'
                        fontFamily='Inter'
                        fontSize='12px'
                        lineHeight='16px'
                        color='#E53E3E'
                    >
                        {loginError}
                    </Box>
                )}
            </Box>
            <Box w='100%'>
                <FormControl
                    w={{
                        base: '100%',
                        sm: '355px',
                        xl: '451px',
                        '2xl': '461px',
                    }}
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
                            type={isPasswordVisible ? 'text' : 'password'}
                            bg='white'
                            data-test-id='password-input'
                            w={{ base: '100%' }}
                            h='48px'
                            placeholder='Пароль'
                            value={password}
                            // isInvalid={!isLoginValid}
                            onChange={handleChangePassword}
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
                        >
                            <Image src={ShowPassword} />
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <Box
                    mt='4px'
                    w={{
                        base: '100%',
                        sm: '355px',
                        xl: '451px',
                        '2xl': '461px',
                    }}
                    mx='auto'
                    textAlign='left'
                    fontFamily='Inter'
                    fontSize='12px'
                    lineHeight='16px'
                    color='rgba(0, 0, 0, 0.64)'
                >
                    Пароль не менее 8 символов, с заглавной буквой и цифрой
                </Box>
                {!isPasswordValid && (
                    <Box
                        mt='4px'
                        w={{
                            base: '100%',
                            sm: '355px',
                            xl: '451px',
                            '2xl': '461px',
                        }}
                        mx='auto'
                        textAlign='left'
                        fontFamily='Inter'
                        fontSize='12px'
                        lineHeight='16px'
                        color='#E53E3E'
                    >
                        {passwordError}
                    </Box>
                )}
            </Box>
            <Box w='100%'>
                <FormControl
                    w={{
                        base: '100%',
                        sm: '355px',
                        xl: '451px',
                        '2xl': '461px',
                    }}
                    mx={{ sm: 'auto' }}
                >
                    <FormLabel
                        fontFamily='Inter'
                        fontWeight={400}
                        fontSize='16px'
                        lineHeight='24px'
                        mb='4px'
                    >
                        Повторите пароль
                    </FormLabel>
                    <InputGroup>
                        <Input
                            data-test-id='confirm-password-input'
                            type={isRepeatPasswordVibisle ? 'text' : 'password'}
                            bg='white'
                            w={{ base: '100%' }}
                            h='48px'
                            placeholder='Повторите пароль'
                            value={repeatPassword}
                            isInvalid={!isRepeatValid}
                            onChange={handleChangePasswordRepeat}
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
                            onMouseDown={toggleRepeatPasswordVisibility}
                            onMouseUp={toggleRepeatPasswordVisibility}
                            onMouseLeave={resetRepeatPasswordVisibility}
                            cursor='pointer'
                        >
                            <Image src={ShowPassword} />
                        </InputRightElement>
                    </InputGroup>
                    {!isRepeatValid && (
                        <Box
                            mt='4px'
                            w={{
                                base: '100%',
                                sm: '355px',
                                xl: '451px',
                                '2xl': '461px',
                            }}
                            mx='auto'
                            textAlign='left'
                            fontFamily='Inter'
                            fontSize='12px'
                            lineHeight='16px'
                            color='#E53E3E'
                        >
                            {repeatPasswordError}
                        </Box>
                    )}
                </FormControl>
            </Box>
            <Button
                mt='40px'
                w='100%'
                px={6}
                borderRadius='6px'
                border='1px solid rgba(0, 0, 0, 0.08)'
                bg='rgba(0, 0, 0, 0.92)'
                h='48px'
                onClick={() => {
                    if (onSubmit()) {
                        onClick?.();
                    }
                }}
                data-test-id={
                    Object.values(progressBar).filter((i) => i === true).length < 4
                        ? ''
                        : 'submit-button'
                }
            >
                <Box
                    as='span'
                    fontFamily='Inter'
                    fontWeight={600}
                    fontSize={18}
                    lineHeight={7}
                    color='rgba(255, 255, 255, 1)'
                >
                    Зарегистрироваться
                </Box>
            </Button>
        </VStack>
    );
}
