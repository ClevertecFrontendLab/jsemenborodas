import { Box, HStack } from '@chakra-ui/react';

import { Success } from '../success/Success';
import { LoginForm } from './LoginForm/LoginForm';
import { ResetPassword } from './LoginForm/ResetPassword';
import { LoginImgBlock } from './LoginImgBlock';
export function Login() {
    return (
        <>
            <Box as='section' minW='100%' minH={{ base: '800px', sm: '1024px', xl: '1120px' }}>
                <HStack w='100%' h='100%' spacing={0}>
                    <ResetPassword />
                    <Box
                        w={{ base: '100%', xl: 'calc(100% - 48px)' }}
                        bg='linear-gradient(235deg, rgba(234, 255, 199, 1) 0%, rgba(41, 129, 63, 1) 100%)'
                    >
                        <Success />
                        <LoginForm />
                    </Box>
                    <Box display={{ base: 'none', xl: 'inline-block' }} w='100%'>
                        <LoginImgBlock />
                    </Box>
                </HStack>
            </Box>
        </>
    );
}
