import { Box, HStack } from '@chakra-ui/react';

import { LoginForm } from './LoginForm/LoginForm';
import { LoginImgBlock } from './LoginImgBlock';
export function Login() {
    return (
        <>
            <Box as='section' minW='100%' minH='100vh'>
                <HStack w='100%' h='100vh' spacing={0}>
                    <Box
                        w={{ base: '100%', xl: 'calc(100% - 48px)' }}
                        h='100%'
                        bg='linear-gradient(235deg, rgba(234, 255, 199, 1) 0%, rgba(41, 129, 63, 1) 100%)'
                    >
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
