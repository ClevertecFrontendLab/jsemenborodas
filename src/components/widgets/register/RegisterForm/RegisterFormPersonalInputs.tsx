import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { setAppLoader } from '~/store/app-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import {
    isEmailValidSelect,
    isFirstNameValidSelect,
    isSubNameValidSelect,
    progressSelect,
    setEmail,
    setFirstName,
    setIsEmailValid,
    setIsFirstNameValid,
    setIsSubNameValid,
    setLastName,
    userEmailSelect,
    userFirstNameSelect,
    userLastNameSelect,
} from '~/store/reducers/user';

type RegisterButtonProps = {
    onClick?: () => void;
};

export function RegisterFormPersonalInputs({ onClick }: RegisterButtonProps) {
    const dispatch = useAppDispatch();

    const progressBar = useAppSelector(progressSelect);

    const firstLetterRegExp = new RegExp('^[А-Я]');
    const allRegExp = new RegExp('^[А-Яа-я-ё]{1,}$');
    const emailRegExp = new RegExp(
        '^[A-Za-z0-9._%+-]{1,}(?<!\\.)@([A-Za-z0-9-]{1,})(\\.[A-Za-z]{2,})+$',
    );
    const [firstNameError, setFirstNameError] = useState<string>('');
    const [subNameError, setSubNameError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const isFirstNameValid = useAppSelector(isFirstNameValidSelect);
    const isEmailValid = useAppSelector(isEmailValidSelect);
    const isSubNameValid = useAppSelector(isSubNameValidSelect);
    const [isFirstMount, setIsFirstMount] = useState<boolean>(true);

    const emailCheck = (value: string) => {
        if (value.length && value.length <= 50) {
            const isMatch = emailRegExp.test(value);
            if (isMatch) {
                dispatch(setIsEmailValid(true));
                setEmailError('');
                return;
            }
            dispatch(setIsEmailValid(false));
            setEmailError('Введите корректный e-mail');
            return;
        }
        if (value.length === 0) {
            dispatch(setIsEmailValid(false));
            setEmailError('Введите e-mail');
            return;
        }
        dispatch(setIsEmailValid(false));
        setEmailError('Максимальная длина 50 символов');
        return;
    };

    const firstNameCheck = (value: string) => {
        if (value.length && value.length <= 50) {
            const isMatchByLetters = firstLetterRegExp.test(value);
            const isMatchByAll = allRegExp.test(value);
            if (isMatchByAll && isMatchByLetters) {
                setFirstNameError('');
                dispatch(setIsFirstNameValid(true));
                return;
            }
            if (!isMatchByLetters) {
                setFirstNameError('Должно начинаться с кириллицы А-Я');
                dispatch(setIsFirstNameValid(false));
                return;
            }
            if (!isMatchByAll) {
                setFirstNameError('Только кириллица А-Я, и "-"');
                dispatch(setIsFirstNameValid(false));
                return;
            }
        }
        if (value.length === 0) {
            setFirstNameError('Введите имя');
            dispatch(setIsFirstNameValid(false));
            return;
        }
        setFirstNameError('Максимальная длина 50 символов');
        dispatch(setIsFirstNameValid(false));
    };

    const subNameCheck = (value: string) => {
        if (value.length && value.length <= 50) {
            const isMatchByLetters = firstLetterRegExp.test(value);
            const isMatchByAll = allRegExp.test(value);
            if (isMatchByAll && isMatchByLetters) {
                setSubNameError('');
                dispatch(setIsSubNameValid(true));
                return;
            }
            if (!isMatchByLetters) {
                setSubNameError('Должно начинаться с кириллицы А-Я');
                dispatch(setIsSubNameValid(false));
                return;
            }
            if (!isMatchByAll) {
                setSubNameError('Только кириллица А-Я, и "-"');
                dispatch(setIsSubNameValid(false));
                return;
            }
        }
        if (value.length === 0) {
            setSubNameError('Введите фамилию');
            dispatch(setIsSubNameValid(false));
            return;
        }
        setSubNameError('Максимальная длина 50 символов');
        dispatch(setIsSubNameValid(false));
    };

    const firstName = useAppSelector(userFirstNameSelect);
    const lastName = useAppSelector(userLastNameSelect);
    const email = useAppSelector(userEmailSelect);

    const handleChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        dispatch(setFirstName(newValue));
        firstNameCheck(newValue);
    };
    const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        dispatch(setLastName(newValue));
        subNameCheck(newValue);
    };
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        dispatch(setEmail(newValue));
        emailCheck(newValue);
    };
    const trimFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.trim();
        dispatch(setFirstName(newValue));
        firstNameCheck(newValue);
    };
    const trimLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.trim();
        dispatch(setLastName(newValue));
        subNameCheck(newValue);
    };
    const trimEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.trim();
        dispatch(setEmail(newValue));
        emailCheck(newValue);
    };
    const submitCheck = () => {
        if (!isFirstNameValid) {
            const newValue = firstName.trim();
            firstNameCheck(newValue);
        }
        if (!isSubNameValid) {
            const newValue = lastName.trim();
            subNameCheck(newValue);
        }
        if (!isEmailValid) {
            const newValue = email.trim();
            emailCheck(newValue);
        }
        if (isFirstNameValid && isSubNameValid && isEmailValid) {
            return true;
        }
        return false;
    };

    useEffect(() => {
        if (isFirstMount) {
            setIsFirstMount(false);
            dispatch(setAppLoader(false));
            return;
        }
    }, [isFirstMount, dispatch]);

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
                        Ваше имя
                    </FormLabel>
                    <Input
                        data-test-id='first-name-input'
                        display='block'
                        type='text'
                        bg='white'
                        w={{ base: '100%' }}
                        h='48px'
                        placeholder='Имя'
                        value={firstName}
                        isInvalid={!isFirstNameValid}
                        onBlur={trimFirstName}
                        onChange={handleChangeFirstName}
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
                {!isFirstNameValid && (
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
                        {firstNameError}
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
                        Ваша фамилия
                    </FormLabel>
                    <Input
                        data-test-id='last-name-input'
                        display='block'
                        type='text'
                        bg='white'
                        w={{ base: '100%' }}
                        h='48px'
                        placeholder='Фамилия'
                        value={lastName}
                        isInvalid={!isSubNameValid}
                        onChange={handleChangeLastName}
                        onBlur={trimLastName}
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
                {!isSubNameValid && (
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
                        {subNameError}
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
                        Ваш e-mail
                    </FormLabel>
                    <Input
                        data-test-id='email-input'
                        display='block'
                        type='text'
                        bg='white'
                        w={{ base: '100%' }}
                        h='48px'
                        placeholder='e-mail'
                        value={email}
                        isInvalid={!isEmailValid}
                        onChange={handleChangeEmail}
                        onBlur={trimEmail}
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
                {!isEmailValid && (
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
                        {emailError}
                    </Box>
                )}
                <Button
                    mt='40px'
                    w='100%'
                    px={6}
                    borderRadius='6px'
                    border='1px solid rgba(0, 0, 0, 0.08)'
                    bg='rgba(0, 0, 0, 0.92)'
                    h='48px'
                    onClick={() => {
                        if (submitCheck()) {
                            onClick?.();
                        }
                    }}
                    data-test-id={
                        Object.values(progressBar).filter((i) => i === true).length < 4
                            ? 'submit-button'
                            : ''
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
                        Дальше
                    </Box>
                </Button>
            </Box>
        </VStack>
    );
}
