import { Box, HStack } from '@chakra-ui/react';

import { useAppSelector } from '~/store/hooks';
import { authModalIsVerifyOpenSelect } from '~/store/reducers/authModals';

import { LoginImgBlock } from '../login/LoginImgBlock';
import { Verification } from '../verification/Verification';
import { RegisterForm } from './RegisterForm/RegisterForm';

export function Register() {
    const isModalOpen = useAppSelector(authModalIsVerifyOpenSelect);

    return (
        <>
            <Box
                as='section'
                w='100vw'
                maxW='1920px'
                minH={{ base: '800px', sm: '1024px', xl: '1120px' }}
            >
                <HStack w='100%' spacing={0} h='100%'>
                    {isModalOpen && <Verification />}
                    <Box
                        w={{ base: '100%', xl: 'calc(100% - 48px)' }}
                        bg='linear-gradient(235deg, rgba(234, 255, 199, 1) 0%, rgba(41, 129, 63, 1) 100%)'
                    >
                        <RegisterForm />
                    </Box>
                    <Box display={{ base: 'none', xl: 'inline-block' }} w='100%'>
                        <LoginImgBlock />
                    </Box>
                </HStack>
            </Box>
        </>
    );
}
