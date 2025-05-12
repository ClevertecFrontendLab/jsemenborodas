import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
export function LoginFooter() {
    return (
        <>
            <Box
                w='100%'
                px={{ base: '8px' }}
                position='absolute'
                bottom={{ base: '26px', xl: '28px', '2xl': '30px' }}
            >
                <Text
                    fontFamily='Inter'
                    fontWeight='600'
                    fontSize='12px'
                    lineHeight='16px'
                    textAlign='left'
                    ml={{ base: '18px', sm: '20px' }}
                >
                    Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
                </Text>
            </Box>
        </>
    );
}
