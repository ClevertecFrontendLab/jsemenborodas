import {
    AbsoluteCenter,
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    PinInput,
    PinInputField,
    VStack,
} from '@chakra-ui/react';
import { Image, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { BreakfastExit } from '~/icons/Icon';
import {
    useResetPasswordMutation,
    useRestoreUserMutation,
    useVerifyOTPMutation,
} from '~/query/services/auth';
import { AuthError } from '~/query/types/types';
import { setAppError, setAppSuccess } from '~/store/app-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import {
    authModaisIsResetPasswordOpenSelect,
    toggleIsResetPasswordOpen,
} from '~/store/reducers/authModals';
import {
    setLogin,
    setPassword,
    setRepeatPassword,
    userLoginSelect,
    userPasswordSelect,
    userRepeatPasswordSelect,
} from '~/store/reducers/user';

import ShowPassword from '../../login/LoginForm/assets/ShowPassword.png';
import step1image from './assets/restorestep1.png';
import step2image from './assets/restorestep2.png';
export function ResetPassword() {
    const dispatch = useAppDispatch();
    const isPasswordResetOpen = useAppSelector(authModaisIsResetPasswordOpenSelect);
    const [ResetResponce] = useResetPasswordMutation();
    const [email, setEmail] = useState<string>('');
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
    const [step, setStep] = useState<number>(0);
    const [pinValue, setPinValue] = useState<string>('');
    const [_emailError, setEmailError] = useState<string>('');
    const [pinError, setPinError] = useState<string>('');
    const emailRegExp = new RegExp(
        '^[A-Za-z0-9._%+-]{1,}(?<!\\.)@([A-Za-z0-9-]{1,})(\\.[A-Za-z]{2,})+$',
    );
    const resetPin = () => {
        setPinValue('');
    };
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setEmail(newValue);
        emailCheck(newValue);
    };
    const [request] = useRestoreUserMutation();
    const [verifyRequest] = useVerifyOTPMutation();

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [isRepeatPasswordVibisle, setIsRepeatPasswordVisible] = useState<boolean>(false);

    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
    const [isLoginValid, setIsLoginValid] = useState<boolean>(true);
    const [isRepeatValid, setIsRepeatValid] = useState<boolean>(true);

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
    const emailCheck = (value: string) => {
        if (value.length && value.length <= 50) {
            const isMatch = emailRegExp.test(value);
            if (isMatch) {
                setIsEmailValid(true);
                setEmailError('');
                return;
            }
            setIsEmailValid(false);
            setEmailError('Введите корректный e-mail');
            return;
        }
        if (value.length === 0) {
            setIsEmailValid(false);
            setEmailError('Введите e-mai');
            return;
        }
        setIsEmailValid(false);
        setEmailError('Максимальная длина 50 символов');
        return;
    };
    const onSubmit = async () => {
        if (email.length && isEmailValid) {
            try {
                const responce = await request({ email: email });
                if ('error' in responce) {
                    const ErrorResponce = responce.error as AuthError;
                    if (ErrorResponce.status === 400) {
                        dispatch(setAppError('waitTillNewCodeWillGenerate'));
                    } else if (ErrorResponce.status === 403) {
                        dispatch(setAppError('not-found-user'));
                    } else if (ErrorResponce.status >= 500) {
                        dispatch(setAppError('Error'));
                    }
                }
                if ('data' in responce) {
                    setStep(step + 1);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };
    const onSubmitStep1 = async (newValue: string) => {
        try {
            const responce = await verifyRequest({ email: email, otpToken: newValue });
            if ('error' in responce) {
                const ErrorResponce = responce.error as AuthError;
                console.log(responce);
                if (ErrorResponce.status === 403) {
                    setPinError('error');
                    resetPin();
                } else if (ErrorResponce.status >= 500) {
                    setPinError('error');
                    resetPin();
                    console.log('hehe');
                    dispatch(setAppError('Error'));
                }
            }
            if ('data' in responce) {
                resetPin();
                setStep(step + 1);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const registerSubmit = async () => {
        checkLogin(login);
        checkPassword(password);
        checkRepeatPassword(repeatPassword);
        if (isLoginValid && isPasswordValid && isRepeatValid) {
            try {
                const responce = await ResetResponce({
                    email: email,
                    login: login,
                    password: password,
                    passwordConfirm: repeatPassword,
                });
                if ('error' in responce) {
                    const ErrorResponce = responce.error as AuthError;
                    console.log(responce);
                    if (ErrorResponce.status >= 500) {
                        dispatch(setAppError('Error'));
                    }
                }
                if ('data' in responce) {
                    resetPin();
                    setStep(0);
                    dispatch(toggleIsResetPasswordOpen());
                    dispatch(setAppSuccess('VerificatioinGreat'));
                }
            } catch (error) {
                console.log(error);
            }
        }
    };
    const handlePinChange = (value: string) => {
        const newValue = value;
        setPinValue(newValue);
    };
    const onComplete = (value: string) => {
        const newValue = value;
        handlePinChange(newValue);
        if (newValue.length === 6) {
            onSubmitStep1(newValue);
        }
    };
    if (isPasswordResetOpen && step === 0) {
        return (
            <>
                <AbsoluteCenter
                    position='relative'
                    w={{ base: '316px', xl: '396px' }}
                    h={{ base: '520px', xl: '578px' }}
                    bg='rgba(255, 255, 255, 1)'
                    zIndex={11}
                    borderRadius='16px'
                    data-test-id='sign-up-success-modal'
                >
                    <Box
                        w={{ base: '24px' }}
                        h={{ base: '24px' }}
                        position='absolute'
                        top='24px'
                        right='24px'
                        onClick={() => dispatch(toggleIsResetPasswordOpen())}
                        data-test-id='close-button'
                    >
                        <Icon as={BreakfastExit} w={{ base: '24px' }} h={{ base: '24px' }}></Icon>
                    </Box>
                    <Box
                        w={{ base: '108px', xl: '206px' }}
                        h={{ base: '108px', xl: '206px' }}
                        mx={{ base: 'auto' }}
                        my={{ base: '32px' }}
                    >
                        <Image src={step1image} alt='breakfast' w='100%' h='100%'></Image>
                    </Box>
                    <VStack w={{ base: '252px', xl: '332px' }} mx='auto' spacing={4}>
                        <Heading
                            as='h2'
                            fontFamily='Inter'
                            fontWeight={400}
                            fontSize={16}
                            lineHeight={6}
                            color='rgba(0, 0, 0, 1)'
                            letterSpacing={{ base: '0.1px' }}
                        >
                            Для восстановления входа введите ваш e-mail, куда можно отправить
                            уникальный код
                        </Heading>
                        <FormControl w={{ base: '100%' }} mx={{ sm: 'auto' }}>
                            <FormLabel
                                fontFamily='Inter'
                                fontWeight={400}
                                fontSize='16px'
                                lineHeight='24px'
                                mb='4px'
                            >
                                Ваш e-mail
                            </FormLabel>
                            <Input
                                data-test-id='email-input'
                                type='text'
                                bg='white'
                                w={{ base: '100%' }}
                                h='48px'
                                placeholder='e-mail'
                                value={email}
                                onChange={handleChangeEmail}
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
                        <Button
                            mt='8px'
                            w='100%'
                            h={{ base: '48px' }}
                            bg='rgba(0, 0, 0, 0.92)'
                            border='1px solid rgba(0, 0, 0, 0.08)'
                            borderRadius='6px'
                            fontFamily='Inter'
                            fontWeight={600}
                            fontSize={18}
                            lineHeight={7}
                            color='rgba(255, 255, 255, 1)'
                            onClick={() => onSubmit()}
                            data-test-id='submit-button'
                        >
                            Получить код
                        </Button>
                        <Text
                            mt='6px'
                            fontFamily='Inter'
                            fontWeight={400}
                            fontSize={12}
                            lineHeight={4}
                            color='rgba(0, 0, 0, 0.48)'
                        >
                            Не пришло письмо? Проверьте папку Спам.
                        </Text>
                    </VStack>
                </AbsoluteCenter>
                <Box
                    className='overlay'
                    zIndex={10}
                    position='fixed'
                    top='0'
                    bottom='0'
                    left='0'
                    right='0'
                    sx={{
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)',
                    }}
                ></Box>
            </>
        );
    }
    if (isPasswordResetOpen && step === 1) {
        return (
            <>
                <AbsoluteCenter
                    position='relative'
                    w={{ base: '316px', xl: '396px' }}
                    h={{ base: '412px', xl: '470px' }}
                    bg='rgba(255, 255, 255, 1)'
                    zIndex={11}
                    borderRadius='16px'
                    data-test-id='verification-code-modal'
                >
                    <Box
                        w={{ base: '24px' }}
                        h={{ base: '24px' }}
                        position='absolute'
                        top='24px'
                        right='24px'
                        onClick={() => dispatch(toggleIsResetPasswordOpen())}
                        data-test-id='close-button'
                    >
                        <Icon as={BreakfastExit} w={{ base: '24px' }} h={{ base: '24px' }}></Icon>
                    </Box>
                    <Box
                        w={{ base: '108px', xl: '206px' }}
                        h={{ base: '108px', xl: '206px' }}
                        mx={{ base: 'auto' }}
                        my={{ base: '32px' }}
                    >
                        <Image src={step2image} alt='breakfast' w='100%' h='100%'></Image>
                    </Box>
                    <VStack w={{ base: '252px', xl: '332px' }} mx='auto' spacing={4}>
                        <Heading
                            as='h2'
                            fontFamily='Inter'
                            fontWeight={400}
                            fontSize={16}
                            lineHeight={6}
                            color='rgba(0, 0, 0, 1)'
                            letterSpacing={{ base: '0px' }}
                        >
                            Мы отправили вам на e-mail
                            <br />{' '}
                            <Box as='span' fontWeight={600}>
                                {email}
                            </Box>
                            <br />
                            <Box as='span' w={{ base: '180px', xl: '100%' }} display='inline-block'>
                                шестизначный код. Введите его ниже.
                            </Box>
                        </Heading>
                        <FormControl
                            w={{ base: '280px' }}
                            textAlign='left'
                            ml={{ base: '10px' }}
                            mr={{ sm: '0px' }}
                        >
                            <PinInput
                                type='alphanumeric'
                                onChange={handlePinChange}
                                value={pinValue}
                                onComplete={onComplete}
                            >
                                <PinInputField
                                    w={{ base: '40px' }}
                                    h={{ base: '40px' }}
                                    mr={{ base: '6px' }}
                                    borderColor={pinError.length ? 'red' : 'rgba(0, 0, 0, 0.06)'}
                                    data-test-id='verification-code-input-0'
                                />
                                <PinInputField
                                    w={{ base: '40px' }}
                                    h={{ base: '40px' }}
                                    mr={{ base: '6px' }}
                                    borderColor={pinError.length ? 'red' : 'rgba(0, 0, 0, 0.06)'}
                                    data-test-id='verification-code-input-1'
                                />
                                <PinInputField
                                    w={{ base: '40px' }}
                                    h={{ base: '40px' }}
                                    mr={{ base: '6px' }}
                                    borderColor={pinError.length ? 'red' : 'rgba(0, 0, 0, 0.06)'}
                                    data-test-id='verification-code-input-2'
                                />
                                <PinInputField
                                    w={{ base: '40px' }}
                                    h={{ base: '40px' }}
                                    mr={{ base: '6px' }}
                                    borderColor={pinError.length ? 'red' : 'rgba(0, 0, 0, 0.06)'}
                                    data-test-id='verification-code-input-3'
                                />
                                <PinInputField
                                    w={{ base: '40px' }}
                                    h={{ base: '40px' }}
                                    mr={{ base: '6px' }}
                                    borderColor={pinError.length ? 'red' : 'rgba(0, 0, 0, 0.06)'}
                                    data-test-id='verification-code-input-4'
                                />
                                <PinInputField
                                    w={{ base: '40px' }}
                                    h={{ base: '40px' }}
                                    mr={{ base: '6px' }}
                                    borderColor={pinError.length ? 'red' : 'rgba(0, 0, 0, 0.06)'}
                                    data-test-id='verification-code-input-5'
                                />
                            </PinInput>
                        </FormControl>

                        <Text
                            w={{ base: '150px', xl: '100%' }}
                            mt='6px'
                            fontFamily='Inter'
                            fontWeight={400}
                            fontSize={12}
                            lineHeight={4}
                            color='rgba(0, 0, 0, 0.48)'
                        >
                            Не пришло письмо? Проверьте папку Спам.
                        </Text>
                    </VStack>
                </AbsoluteCenter>
                <Box
                    className='overlay'
                    zIndex={10}
                    position='fixed'
                    top='0'
                    bottom='0'
                    left='0'
                    right='0'
                    sx={{
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)',
                    }}
                ></Box>
            </>
        );
    }

    if (isPasswordResetOpen && step === 2) {
        return (
            <>
                <AbsoluteCenter
                    position='relative'
                    w={{ base: '316px', xl: '396px' }}
                    h={{ base: '580px', xl: '564px' }}
                    bg='rgba(255, 255, 255, 1)'
                    zIndex={11}
                    borderRadius='16px'
                    pt='32px'
                    data-test-id='reset-credentials-modal'
                >
                    <Box
                        w={{ base: '24px' }}
                        h={{ base: '24px' }}
                        position='absolute'
                        top='24px'
                        right='24px'
                        onClick={() => dispatch(toggleIsResetPasswordOpen())}
                        data-test-id='close-button'
                    >
                        <Icon as={BreakfastExit} w={{ base: '24px' }} h={{ base: '24px' }}></Icon>
                    </Box>

                    <VStack w={{ base: '252px', xl: '332px' }} mx='auto' spacing={4}>
                        <Heading
                            as='h2'
                            w={{ base: '100%', xl: '300px' }}
                            fontFamily='Inter'
                            fontWeight={700}
                            fontSize={24}
                            lineHeight={8}
                            color='rgba(0, 0, 0, 1)'
                            letterSpacing={{ base: '0px' }}
                        >
                            Восстановление аккаунта
                        </Heading>
                        <Box w='100%' mt={{ base: '8px' }}>
                            <FormControl
                                w={{
                                    base: '100%',
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
                                    Логин для входа на сайт
                                </FormLabel>
                                <Input
                                    data-test-id='login-input'
                                    type='text'
                                    bg='white'
                                    w={{ base: '100%' }}
                                    h='48px'
                                    placeholder='bake_and_pie'
                                    value={login}
                                    onChange={handleChangeLogin}
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
                        <Box w='100%' mt={{ base: '8px' }}>
                            <FormControl
                                w={{
                                    base: '100%',
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
                                        data-test-id='password-input'
                                        type={isPasswordVisible ? 'text' : 'password'}
                                        bg='white'
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
                        <Box w='100%' mt={{ base: '8px' }}>
                            <FormControl
                                w={{
                                    base: '100%',
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
                                        type={isRepeatPasswordVibisle ? 'text' : 'password'}
                                        bg='white'
                                        data-test-id='confirm-password-input'
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
                            mt='16px'
                            w='100%'
                            h={{ base: '48px' }}
                            bg='rgba(0, 0, 0, 0.92)'
                            border='1px solid rgba(0, 0, 0, 0.08)'
                            borderRadius='6px'
                            fontFamily='Inter'
                            fontWeight={600}
                            fontSize={18}
                            lineHeight={7}
                            color='rgba(255, 255, 255, 1)'
                            onClick={() => registerSubmit()}
                            data-test-id='submit-button'
                        >
                            Зарегистрироваться
                        </Button>
                    </VStack>
                </AbsoluteCenter>
                <Box
                    className='overlay'
                    zIndex={10}
                    position='fixed'
                    top='0'
                    bottom='0'
                    left='0'
                    right='0'
                    sx={{
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)',
                    }}
                ></Box>
            </>
        );
    }
}
