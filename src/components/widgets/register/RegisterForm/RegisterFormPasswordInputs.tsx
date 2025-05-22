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

import { useValidationPassword } from '~/components/hooks/useValidationPassword';
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

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isRepeatPasswordVibisle, setIsRepeatPasswordVisible] = useState(false);

    const [isRepeatValid, setIsRepeatValid] = useState(true);

    const progressBar = useAppSelector(progressSelect);

    const [repeatPasswordError, setRepeatPasswordError] = useState('');

    const password = useAppSelector(userPasswordSelect);
    const login = useAppSelector(userLoginSelect);
    const repeatPassword = useAppSelector(userRepeatPasswordSelect);

    const { loginState, passwordState, validatePassword, validateLogin } = useValidationPassword({
        login: { required: true, minLength: 5, maxLength: 50 },
        password: { required: true, minLength: 8, maxLength: 50 },
    });
    const checkLogin = (value: string) => {
        validateLogin(value);
    };

    const checkPassword = (value: string) => {
        validatePassword(value);
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
        if (!loginState.isValid) {
            const newValue = login.trim();
            dispatch(setLogin(newValue));
            checkLogin(newValue);
        }
        if (!passwordState.isValid) {
            const newValue = password;
            dispatch(setPassword(newValue));
            checkPassword(newValue);
        }
        if (!isRepeatValid) {
            const newValue = repeatPassword;
            dispatch(setRepeatPassword(newValue));
            checkRepeatPassword(newValue);
        }
        if (loginState.isValid && passwordState.isValid && isRepeatValid) return true;
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
            w={widthInput}
            minW={widthInput}
            maxW={widthInput}
            mt={{ base: '16px' }}
            ml={{ '2xl': '24px' }}
            spacing={6}
            mr={{ '2xl': '24px' }}
        >
            <Box w={widthInput} minW={widthInput} maxW={widthInput}>
                <FormControl
                    w={widthInput}
                    minW={widthInput}
                    maxW={widthInput}
                    mx={{ sm: 'auto' }}
                    overflow='visible'
                >
                    <FormLabel
                        fontFamily='Inter'
                        fontWeight={400}
                        fontSize='16px'
                        lineHeight='24px'
                        mb='4px'
                        w={widthInput}
                        minW={widthInput}
                        maxW={widthInput}
                    >
                        Логин для входа на сайт
                    </FormLabel>
                    <Input
                        type='text'
                        data-test-id='login-input'
                        bg='white'
                        w={widthInput}
                        minW={widthInput}
                        maxW={widthInput}
                        h='48px'
                        placeholder='bake_and_pie'
                        value={login}
                        onChange={handleChangeLogin}
                        onBlur={trimLogin}
                        isInvalid={!loginState.isValid}
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
                    w={widthInput}
                    minW={widthInput}
                    maxW={widthInput}
                    mx='auto'
                    textAlign='left'
                    fontFamily='Inter'
                    fontSize='12px'
                    lineHeight='16px'
                    color='rgba(0, 0, 0, 0.64)'
                >
                    Логин не менее 5 символов, только латиница
                </Box>
                {!loginState.isValid && (
                    <Box
                        mt='4px'
                        w={widthInput}
                        minW={widthInput}
                        maxW={widthInput}
                        mx='auto'
                        textAlign='left'
                        fontFamily='Inter'
                        fontSize='12px'
                        lineHeight='16px'
                        color='#E53E3E'
                    >
                        {loginState.error}
                    </Box>
                )}
            </Box>
            <Box w='100%'>
                <FormControl w={widthInput} minW={widthInput} maxW={widthInput} mx={{ sm: 'auto' }}>
                    <FormLabel
                        fontFamily='Inter'
                        fontWeight={400}
                        fontSize='16px'
                        lineHeight='24px'
                        mb='4px'
                    >
                        Пароль
                    </FormLabel>
                    <InputGroup w={widthInput} minW={widthInput} maxW={widthInput} display='block'>
                        <Input
                            type={isPasswordVisible ? 'text' : 'password'}
                            bg='white'
                            data-test-id='password-input'
                            w={widthInput}
                            minW={widthInput}
                            maxW={widthInput}
                            h='48px'
                            placeholder='Пароль'
                            value={password}
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
                    w={widthInput}
                    minW={widthInput}
                    maxW={widthInput}
                    mx='auto'
                    textAlign='left'
                    fontFamily='Inter'
                    fontSize='12px'
                    lineHeight='16px'
                    color='rgba(0, 0, 0, 0.64)'
                >
                    Пароль не менее 8 символов, с заглавной буквой и цифрой
                </Box>
                {!passwordState.isValid && (
                    <Box
                        mt='4px'
                        w={widthInput}
                        minW={widthInput}
                        maxW={widthInput}
                        mx='auto'
                        textAlign='left'
                        fontFamily='Inter'
                        fontSize='12px'
                        lineHeight='16px'
                        color='#E53E3E'
                    >
                        {passwordState.error}
                    </Box>
                )}
            </Box>
            <Box w='100%'>
                <FormControl w={widthInput} minW={widthInput} maxW={widthInput} mx={{ sm: 'auto' }}>
                    <FormLabel
                        w={widthInput}
                        minW={widthInput}
                        maxW={widthInput}
                        fontFamily='Inter'
                        fontWeight={400}
                        fontSize='16px'
                        lineHeight='24px'
                        mb='4px'
                    >
                        Повторите пароль
                    </FormLabel>
                    <InputGroup w={widthInput} minW={widthInput} maxW={widthInput} display='block'>
                        <Input
                            data-test-id='confirm-password-input'
                            type={isRepeatPasswordVibisle ? 'text' : 'password'}
                            bg='white'
                            w={widthInput}
                            minW={widthInput}
                            maxW={widthInput}
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
                            w={widthInput}
                            minW={widthInput}
                            maxW={widthInput}
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
                minW='100%'
                maxW='100%'
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
