import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useValidationPassword } from '~/components/hooks/useValidationPassword';
import { setAppLoader } from '~/store/app-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import {
    progressSelect,
    setEmail,
    setFirstName,
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

    const [isFirstMount, setIsFirstMount] = useState(true);
    const {
        emailState,
        firstNameState,
        lastNameState,
        validateEmail,
        validateFirstName,
        validateLastName,
    } = useValidationPassword({
        email: { required: true, minLength: 0, maxLength: 50 },
        firstName: { required: true, minLength: 0, maxLength: 50 },
        lastName: { required: true, minLength: 0, maxLength: 50 },
    });
    const emailCheck = (value: string) => {
        validateEmail(value);
    };

    const firstNameCheck = (value: string) => {
        validateFirstName(value);
    };

    const subNameCheck = (value: string) => {
        validateLastName(value);
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
        validateFirstName(firstName);
        validateLastName(lastName);
        validateEmail(email);
        if (!firstNameState.isValid) {
            const newValue = firstName.trim();
            firstNameCheck(newValue);
        }
        if (!lastNameState.isValid) {
            const newValue = lastName.trim();
            subNameCheck(newValue);
        }
        if (!emailState.isValid) {
            const newValue = email.trim();
            emailCheck(newValue);
        }
        if (
            firstNameState.isValid &&
            lastNameState.isValid &&
            emailState.isValid &&
            firstName.length &&
            lastName.length &&
            email.length
        ) {
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
            minW='100%'
            maxW='100%'
            mt={{ base: '16px' }}
            ml={{ '2xl': '24px' }}
            spacing={6}
            mr={{ '2xl': '24px' }}
        >
            <Box w='100%' minW='100%' maxW='100%'>
                <FormControl w='100%' mx={{ sm: 'auto' }}>
                    <FormLabel
                        fontFamily='Inter'
                        fontWeight={400}
                        fontSize='16px'
                        lineHeight='24px'
                        mb='4px'
                        mx={0}
                        w='100%'
                        minW='100%'
                        maxW='100%'
                    >
                        Ваше имя
                    </FormLabel>
                    <Input
                        transitionProperty='width, height'
                        transitionDuration='0s'
                        px={0}
                        pl={4}
                        color='rgba(19, 75, 0, 1)'
                        borderRadius='6px'
                        border='1px solid rgba(215, 255, 148, 1)'
                        data-test-id='first-name-input'
                        display='block'
                        type='text'
                        bg='white'
                        w='100%'
                        minW='100%'
                        maxW='100%'
                        h='48px'
                        placeholder='Имя'
                        value={firstName}
                        isInvalid={!firstNameState.isValid}
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
                {!firstNameState.isValid && (
                    <Box w='100%' mx='auto' textAlign='left' fontFamily='Inter' color='#E53E3E'>
                        {firstNameState.error}
                    </Box>
                )}
            </Box>
            <Box w='100%' minW='100%' maxW='100%'>
                <FormControl w='100%' mx={{ sm: 'auto' }}>
                    <FormLabel
                        fontFamily='Inter'
                        fontWeight={400}
                        fontSize='16px'
                        lineHeight='24px'
                        mb='4px'
                        mx={0}
                    >
                        Ваша фамилия
                    </FormLabel>
                    <Input
                        transitionProperty='width, height'
                        transitionDuration='0s'
                        px={0}
                        pl={4}
                        color='rgba(19, 75, 0, 1)'
                        borderRadius='6px'
                        border='1px solid rgba(215, 255, 148, 1)'
                        data-test-id='last-name-input'
                        display='block'
                        type='text'
                        bg='white'
                        w='100%'
                        minW='100%'
                        maxW='100%'
                        h='48px'
                        placeholder='Фамилия'
                        value={lastName}
                        isInvalid={!lastNameState.isValid}
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
                {!lastNameState.isValid && (
                    <Box w='100%' mx='auto' textAlign='left' fontFamily='Inter' color='#E53E3E'>
                        {lastNameState.error}
                    </Box>
                )}
            </Box>
            <Box w='100%'>
                <FormControl w='100%' mx={{ sm: 'auto' }}>
                    <FormLabel
                        fontFamily='Inter'
                        fontWeight={400}
                        fontSize='16px'
                        lineHeight='24px'
                        mb='4px'
                        mx={0}
                    >
                        Ваш e-mail
                    </FormLabel>
                    <Input
                        transitionProperty='width, height'
                        transitionDuration='0s'
                        px={0}
                        pl={4}
                        color='rgba(19, 75, 0, 1)'
                        borderRadius='6px'
                        border='1px solid rgba(215, 255, 148, 1)'
                        data-test-id='email-input'
                        display='block'
                        type='text'
                        bg='white'
                        w='100%'
                        minW='100%'
                        maxW='100%'
                        h='48px'
                        placeholder='e-mail'
                        value={email}
                        isInvalid={!emailState.isValid}
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
                {!emailState.isValid && (
                    <Box w='100%' mx='auto' textAlign='left' fontFamily='Inter' color='#E53E3E'>
                        {emailState.error}
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
