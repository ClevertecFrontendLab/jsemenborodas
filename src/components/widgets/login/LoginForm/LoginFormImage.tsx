import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

import logoFull from '../assets/logoFull.png';
export function LoginFormImage() {
    return (
        <Box
            w={{ base: '158px', xl: '271px' }}
            h={{ base: '38px', xl: '64px' }}
            m={{ base: '0 auto', xl: '0' }}
            mr={{ xl: '28px', '2xl': '6px' }}
        >
            <Image src={logoFull} alt='logo' />
        </Box>
    );
}
