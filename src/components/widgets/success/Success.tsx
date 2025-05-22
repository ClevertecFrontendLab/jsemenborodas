import { Alert, AlertIcon, Center } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { useEffect } from 'react';

import { setAppSuccess, userSuccessSelector } from '~/store/app-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';

import Icon from './assets/icon.png';
import { SuccessMockData } from './SuccesMockData';
export function Success() {
    const dispatch = useAppDispatch();
    const isModalShow = useAppSelector(userSuccessSelector);
    const data = SuccessMockData.find((i) => i.success === isModalShow);
    useEffect(() => {
        if (data) {
            const timer = setTimeout(() => {
                dispatch(setAppSuccess(''));
            }, 15000);
            return () => clearTimeout(timer);
        }
    }, [data, dispatch]);
    if (isModalShow && isModalShow.length) {
        return (
            <>
                <Center>
                    <Alert
                        zIndex={11}
                        position='absolute'
                        bottom={{ base: '100px', xl: '80px' }}
                        w={{ base: '328px', xl: '400px' }}
                        h={{ base: '72px', xl: '48px' }}
                        status='success'
                        bg='rgba(56, 161, 105, 1)'
                        data-test-id='error-notification'
                        ml={{ '2xl': '24px' }}
                    >
                        <AlertIcon
                            color='white'
                            mr={{ base: '16px', xl: '12px' }}
                            ml={{ xl: '4px' }}
                        />
                        <Text
                            fontFamily='Inter'
                            fontWeight={700}
                            fontSize={16}
                            lineHeight={6}
                            color='rgba(255, 255, 255, 1)'
                            letterSpacing='0px'
                            textAlign='left'
                            w={{ base: '260px', xl: '100%' }}
                        >
                            {data?.title}
                        </Text>
                        <Image
                            data-test-id='close-alert-button'
                            src={Icon}
                            position='absolute'
                            top={3}
                            right={3}
                            cursor='pointer'
                            onClick={() => dispatch(setAppSuccess(''))}
                        />
                    </Alert>
                </Center>
            </>
        );
    }
}
