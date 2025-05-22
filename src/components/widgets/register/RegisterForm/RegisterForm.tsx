import { VStack } from '@chakra-ui/react';

import { LoginFooter } from '../../login/LoginForm/LoginFooter';
import { LoginFormImage } from '../../login/LoginForm/LoginFormImage';
import { LoginFormTabs } from '../../login/LoginForm/LoginFormTabs';
import { RegisterFormRegister } from './RegisterFormRegister';

export function RegisterForm() {
    return (
        <>
            <VStack
                pt={{ base: '72px', sm: '120px', md: '140px', xl: '170px' }}
                w='100%'
                spacing={{ base: '40px' }}
                position='relative'
                minH={{ base: '800px', sm: '1024px', xl: '1120px' }}
                h='100vh'
                maxH='100vh'
            >
                <LoginFormImage />
                <LoginFormTabs />
                <RegisterFormRegister />
                <LoginFooter />
            </VStack>
        </>
    );
}
