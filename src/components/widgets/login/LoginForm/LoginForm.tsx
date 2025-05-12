import { VStack } from '@chakra-ui/react';

import { LoginFooter } from './LoginFooter';
import { LoginFormImage } from './LoginFormImage';
import { LoginFormLogin } from './LoginFormLogin';
import { LoginFormTabs } from './LoginFormTabs';
export function LoginForm() {
    return (
        <>
            <VStack
                pt={{ base: '72px', sm: '120px', md: '140px', xl: '172px', '2xl': '170px' }}
                w='100%'
                spacing={{ base: '40px' }}
                px={{ base: '16px' }}
                position='relative'
                h='100%'
            >
                <LoginFormImage />
                <LoginFormTabs />
                <LoginFormLogin />
                <LoginFooter />
            </VStack>
        </>
    );
}
