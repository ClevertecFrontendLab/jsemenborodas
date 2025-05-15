import { Box, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '~/store/hooks';
import {
    setEmail,
    setFirstName,
    setLastName,
    userEmailSelect,
    userFirstNameSelect,
    userLastNameSelect,
} from '~/store/reducers/user';

export function RegisterFormPersonalInputs() {
    const dispatch = useAppDispatch();

    const firstLetterRegExp = new RegExp('^[А-Я]', 'gim');
    const allRegExp = new RegExp('^[А-Яа-я-ё]{1,}$', 'gim');
    const emailRegExp = new RegExp(
        '^[A-Za-z0-9._%+-]{1,}(?<!\\.)@([A-Za-z0-9-]{1,})(\\.[A-Za-z]{2,})+$',
    );
    const [firstNameError, setFirstNameError] = useState<string>('');
    const [subNameError, setSubNameError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [isFirstNameValid, setIsFirstNameValid] = useState<boolean>(true);
    const [isSubNameValid, setIsSubNameValid] = useState<boolean>(true);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
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

    const firstNameCheck = (value: string) => {
        if (value.length && value.length <= 50) {
            const isMatchByLetters = firstLetterRegExp.test(value);
            const isMatchByAll = allRegExp.test(value);
            if (isMatchByAll && isMatchByLetters) {
                setFirstNameError('');
                setIsFirstNameValid(true);
                return;
            }
            if (!isMatchByLetters) {
                setFirstNameError('Должно начинаться с кириллицы А-Я');
                setIsFirstNameValid(false);
                return;
            }
            if (!isMatchByAll) {
                setFirstNameError('Только кириллица А-Я, и "-"');
                setIsFirstNameValid(false);
                return;
            }
        }
        if (value.length === 0) {
            setFirstNameError('Введите имя');
            setIsFirstNameValid(false);
            return;
        }
        setFirstNameError('Максимальная длина 50 символов');
        setIsFirstNameValid(false);
    };

    const subNameCheck = (value: string) => {
        if (value.length && value.length <= 50) {
            const isMatchByLetters = firstLetterRegExp.test(value);
            const isMatchByAll = allRegExp.test(value);
            if (isMatchByAll && isMatchByLetters) {
                setSubNameError('');
                setIsSubNameValid(true);
                return;
            }
            if (!isMatchByLetters) {
                setSubNameError('Должно начинаться с кириллицы А-Я');
                setIsSubNameValid(false);
                return;
            }
            if (!isMatchByAll) {
                setSubNameError('Только кириллица А-Я, и "-"');
                setIsSubNameValid(false);
                return;
            }
        }
        if (value.length === 0) {
            setSubNameError('Введите имя');
            setIsSubNameValid(false);
            return;
        }
        setSubNameError('Максимальная длина 50 символов');
        setIsSubNameValid(false);
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

    return (
        <VStack
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
                        type='text'
                        bg='white'
                        w={{ base: '100%' }}
                        h='48px'
                        placeholder='Имя'
                        value={firstName}
                        isInvalid={!isFirstNameValid}
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
                        type='text'
                        bg='white'
                        w={{ base: '100%' }}
                        h='48px'
                        placeholder='Фамилия'
                        value={lastName}
                        isInvalid={!isSubNameValid}
                        onChange={handleChangeLastName}
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
                        type='text'
                        bg='white'
                        w={{ base: '100%' }}
                        h='48px'
                        placeholder='e-mail'
                        value={email}
                        isInvalid={!isEmailValid}
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
            </Box>
        </VStack>
    );
}
