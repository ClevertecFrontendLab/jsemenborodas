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
                minH={{ base: '800px', sm: '1024px', xl: '1120px' }}
                h='100vh'
                maxH='100vh'
            >
                <LoginFormImage />
                <LoginFormTabs />
                <LoginFormLogin />
                <LoginFooter />
            </VStack>
        </>
    );
}
