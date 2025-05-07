import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    Center,
    CloseButton,
    VStack,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '~/store/hooks';

import { setAppError, userErrorSelector } from '../../../store/app-slice';

export function AlertNote() {
    const dispatch = useAppDispatch();
    const error = useSelector(userErrorSelector);

    useEffect(() => {
        const savedError = localStorage.getItem('Error');
        if (savedError) {
            dispatch(setAppError(savedError));
        }
    });

    useEffect(() => {
        if (error) {
            localStorage.setItem('Error', error);
            const timer = setTimeout(() => {
                dispatch(setAppError(null));
                localStorage.removeItem('Error');
            }, 15000);

            return () => clearTimeout(timer);
        }
    }, [error, dispatch]);

    if (!error) return null;

    return (
        <Center>
            <Alert
                status='error'
                position='fixed'
                bottom='100px'
                bg='#E53E3E'
                w={{ base: '328px', xl: '400px' }}
                h={{ base: '72px' }}
                zIndex={100000990}
                data-test-id='error-notification'
            >
                <AlertIcon color='white' />
                <VStack alignItems='flex-start' spacing={0}>
                    <AlertTitle
                        color='#FFFFFF'
                        fontFamily='Inter'
                        fontWeight={700}
                        fontSize='16px'
                        lineHeight='24px'
                    >
                        Ошибка сервера
                    </AlertTitle>
                    <AlertDescription
                        color='#FFFFFF'
                        fontFamily='Inter'
                        fontWeight={400}
                        fontSize='16px'
                        lineHeight='24px'
                    >
                        Попробуйте поискать снова попозже
                    </AlertDescription>
                </VStack>
                <Box
                    position='absolute'
                    top='0'
                    right='0'
                    onClick={() => {
                        dispatch(setAppError(null));
                        localStorage.removeItem('Error');
                    }}
                >
                    <CloseButton color='white' data-test-id='close-alert-button'></CloseButton>
                </Box>
            </Alert>
        </Center>
    );
}
