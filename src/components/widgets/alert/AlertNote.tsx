import {
    AbsoluteCenter,
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    Button,
    Center,
    CloseButton,
    Heading,
    Icon,
    VStack,
} from '@chakra-ui/react';
import { Image, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { BreakfastExit } from '~/icons/Icon';
import { useAppDispatch } from '~/store/hooks';

import { setAppError, userErrorSelector } from '../../../store/app-slice';
import { alertMockData } from './alertMockData';
import Breakfast from './assets/Breakfast.png';
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
            const timer = setTimeout(() => {
                dispatch(setAppError(null));
                localStorage.removeItem('Error');
            }, 15000);

            return () => clearTimeout(timer);
        }
    }, [error, dispatch]);

    if (!error) return null;
    if (error === 'ServerError') {
        return (
            <AbsoluteCenter
                position='relative'
                w={{ base: '316px', xl: '396px' }}
                h={{ base: '380px', xl: '478px' }}
                bg='rgba(255, 255, 255, 1)'
                zIndex={11}
                borderRadius='16px'
            >
                <Box
                    w={{ base: '24px' }}
                    h={{ base: '24px' }}
                    position='absolute'
                    top='24px'
                    right='24px'
                >
                    <Icon as={BreakfastExit} w={{ base: '24px' }} h={{ base: '24px' }}></Icon>
                </Box>
                <Box
                    w={{ base: '108px', xl: '206px' }}
                    h={{ base: '108px', xl: '206px' }}
                    mx={{ base: 'auto' }}
                    my={{ base: '32px' }}
                >
                    <Image src={Breakfast} alt='breakfast' w='100%' h='100%'></Image>
                </Box>
                <VStack w={{ base: '252px', xl: '332px' }} mx='auto' spacing={4}>
                    <Heading
                        as='h2'
                        fontFamily='Inter'
                        fontWeight={700}
                        fontSize={24}
                        lineHeight={8}
                        color='rgba(0, 0, 0, 1)'
                        letterSpacing={{ base: '0.1px' }}
                    >
                        Вход не выполнен
                    </Heading>
                    <Text
                        w={{ base: '252px' }}
                        fontFamily='Inter'
                        fontWeight={400}
                        fontSize={16}
                        lineHeight={6}
                        color='rgba(0, 0, 0, 0.64)'
                        letterSpacing={{ base: '0.2px' }}
                    >
                        Что-то пошло не так. Попробуйте еще раз
                    </Text>
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
                    >
                        Повторить
                    </Button>
                </VStack>
            </AbsoluteCenter>
        );
    }
    return (
        <Center>
            <Alert
                status='error'
                position='fixed'
                bottom='100px'
                bg='#E53E3E'
                w={{ base: '328px', xl: '400px' }}
                h={{ base: '72px' }}
                zIndex={11}
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
                        {error === 'error'
                            ? 'Ошибка сервера'
                            : alertMockData.filter((item) => item.errorMesage === error)[0].heading}
                    </AlertTitle>
                    <AlertDescription
                        color='#FFFFFF'
                        fontFamily='Inter'
                        fontWeight={400}
                        fontSize='16px'
                        lineHeight='24px'
                    >
                        {error === 'error'
                            ? 'Попробуйте поискать снова попозже'
                            : alertMockData.filter((item) => item.errorMesage === error)[0]
                                  .description}
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
