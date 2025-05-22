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
import { useNavigate } from 'react-router';

import { AlertConst } from '~/components/consts/AlertConsts';
import { ErrorStatus } from '~/components/consts/ErrorStatus';
import { BreakfastExit } from '~/icons/Icon';
import { useGetAuthMutation } from '~/query/services/auth';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { authModalIsAlertOpenSelect, toggleIsAlertOpen } from '~/store/reducers/authModals';
import { resetAllUserState, userLoginSelect, userPasswordSelect } from '~/store/reducers/user';

import { setAppError, setAppLoader, userErrorSelector } from '../../../store/app-slice';
import { Err2 } from '../login/LoginForm/LoginFormLogin';
import { alertMockData } from './alertMockData';
import Breakfast from './assets/Breakfast.png';
import Breakfast2 from './assets/Breakfast2.png';

export function AlertNote() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [getAuth] = useGetAuthMutation();
    const error = useSelector(userErrorSelector);
    const isModalOpen = useAppSelector(authModalIsAlertOpenSelect);
    const password = useAppSelector(userPasswordSelect);
    const login = useAppSelector(userLoginSelect);
    const onRepeat = async () => {
        dispatch(toggleIsAlertOpen());
        try {
            dispatch(setAppLoader(true));
            const responce = await getAuth({ login: login, password: password });
            if ('data' in responce) {
                sessionStorage.setItem('isAuth', 'true');
                navigate('/');
                dispatch(setAppLoader(false));
                dispatch(resetAllUserState());
            }
            if ('error' in responce) {
                const err = responce as Err2;
                const responceStatusCode = err.error.status;
                if (responceStatusCode === ErrorStatus.UNAUTHORIZED) {
                    dispatch(setAppError(AlertConst.AUTHERROR));
                }
                if (responceStatusCode === ErrorStatus.FORBIDDEN) {
                    dispatch(setAppError(AlertConst.EMAILERROR));
                }
                if (responceStatusCode >= ErrorStatus.SERVERERROR) {
                    dispatch(setAppError(AlertConst.SERVERERROR));
                    dispatch(toggleIsAlertOpen());
                }
            }
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setAppLoader(false));
        }
    };

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
    if (isModalOpen && error === 'ServerError') {
        return (
            <AbsoluteCenter
                position='relative'
                w={{ base: '316px', xl: '396px' }}
                h={{ base: '380px', xl: '478px' }}
                bg='rgba(255, 255, 255, 1)'
                zIndex={11}
                borderRadius='16px'
                data-test-id='sign-in-error-modal'
            >
                <Box
                    w={{ base: '24px' }}
                    h={{ base: '24px' }}
                    position='absolute'
                    top='24px'
                    right='24px'
                    data-test-id='close-button'
                    onClick={() => dispatch(toggleIsAlertOpen())}
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
                        data-test-id='repeat-button'
                        onClick={() => onRepeat()}
                    >
                        Повторить
                    </Button>
                </VStack>
            </AbsoluteCenter>
        );
    }
    if (isModalOpen && error === 'EmailRegistrationError') {
        return (
            <AbsoluteCenter
                position='relative'
                w={{ base: '316px', xl: '396px' }}
                h={{ base: '420px', xl: '470px' }}
                bg='rgba(255, 255, 255, 1)'
                zIndex={11}
                borderRadius='16px'
                data-test-id='email-verification-failed-modal'
            >
                <Box
                    w={{ base: '24px' }}
                    h={{ base: '24px' }}
                    position='absolute'
                    top='24px'
                    right='24px'
                    onClick={() => dispatch(toggleIsAlertOpen())}
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
                    <Image src={Breakfast2} alt='breakfast' w='100%' h='100%'></Image>
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
                        Упс! Что-то пошло не так
                    </Heading>
                    <Text fontFamily='Inter' fontWeight={400} fontSize={16} lineHeight={6}>
                        Ваша ссылка для верификации недействительна. Попробуйте зарегистрироваться
                        снова.
                    </Text>
                    <Text
                        w={{ base: '100%' }}
                        mt='16px'
                        fontFamily='Inter'
                        fontWeight={400}
                        fontSize={12}
                        lineHeight={4}
                        color='rgba(0, 0, 0, 0.64)'
                        letterSpacing={{ base: '0px' }}
                    >
                        Остались вопросы? Свяжитесь{' '}
                        <Box as='span' textDecoration='underline'>
                            с поддержкой.
                        </Box>
                    </Text>
                </VStack>
            </AbsoluteCenter>
        );
    }
    if (error !== 'ServerError' && error !== 'EmailRegistrationError') {
        return (
            <Box position='relative'>
                <Center>
                    <Alert
                        pl='18px'
                        status='error'
                        position='absolute'
                        bottom={{ base: '100px', xl: '80px' }}
                        bg='#E53E3E'
                        ml={{ '2xl': '24px' }}
                        w={{ base: '328px', xl: '400px' }}
                        h={error === 'not-found-user' ? { base: '96px' } : { base: '72px' }}
                        zIndex={11}
                        data-test-id='error-notification'
                        gap='14px'
                    >
                        <AlertIcon color='white' mr={0} />
                        <VStack alignItems='flex-start' spacing={0} w='100%'>
                            <AlertTitle
                                color='#FFFFFF'
                                fontFamily='Inter'
                                fontWeight={700}
                                fontSize='16px'
                                lineHeight='24px'
                                textAlign='left'
                                w='100%'
                            >
                                {error === 'error'
                                    ? 'Ошибка сервера'
                                    : alertMockData.filter((item) => item.errorMesage === error)[0]
                                          .heading}
                            </AlertTitle>
                            <AlertDescription
                                textAlign='left'
                                color='#FFFFFF'
                                fontFamily='Inter'
                                fontWeight={400}
                                fontSize='16px'
                                lineHeight='24px'
                                w='100%'
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
                            data-test-id='close-alert-button'
                        >
                            <CloseButton color='white'></CloseButton>
                        </Box>
                    </Alert>
                </Center>
            </Box>
        );
    }
}
