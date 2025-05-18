import { Alert, AlertIcon, Center } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

import { setAppSuccess, userSuccessSelector } from '~/store/app-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';

import Icon from './assets/icon.png';
import { SuccessMockData } from './SuccesMockData';
export function Success() {
    const dispatch = useAppDispatch();
    const isModalShow = useAppSelector(userSuccessSelector);
    const data = SuccessMockData.find((i) => i.success === isModalShow);
    if (isModalShow && isModalShow.length) {
        return (
            <>
                <Center>
                    <Alert
                        zIndex={11}
                        position='absolute'
                        bottom={{ base: '100px', xl: '80px' }}
                        w={{ base: '328px', xl: '400px' }}
                        h={{ base: '48px' }}
                        status='success'
                        fontFamily='Inter'
                        fontWeight={700}
                        fontSize={16}
                        lineHeight={6}
                        bg='rgba(56, 161, 105, 1)'
                        color='rgba(255, 255, 255, 1)'
                        data-test-id='error-notification'
                    >
                        <AlertIcon
                            color='white'
                            mr={{ base: '16px', xl: '12px' }}
                            ml={{ xl: '4px' }}
                        />
                        {data?.title}
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
