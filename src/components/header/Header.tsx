import { Box, Flex } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

function Header() {
    return (
        <>
            <Box as='header' bg='rgba(255, 255, 211, 1)' w='360px' h='64px'>
                <Flex h='100%' w='100%' flexWrap='wrap'>
                    <Box w='16px' h='8px'></Box>
                    <Box w='32px' h='32px' mt='16px'>
                        <Image src='/logo.svg'></Image>
                    </Box>
                    <Box w='8px' h='4px'></Box>
                    <Box w='53px' h='24px'></Box>
                    <Box w='187px' h='24px' mt='23px'>
                        <Flex justifyContent='flex-end'>
                            <Box w='56px' h='24px'>
                                <Flex gap='6px'>
                                    <Image src='/left-icon.svg'></Image>
                                    <Text
                                        fontFamily='Inter'
                                        fontWeight='600'
                                        fontSize='12px'
                                        color='rgba(45, 177, 0, 1)'
                                    >
                                        185
                                    </Text>
                                </Flex>
                            </Box>
                            <Box w='58px' h='24px'>
                                <Flex gap='6px'>
                                    <Image src='/center-icon.svg'></Image>
                                    <Text
                                        fontFamily='Inter'
                                        fontWeight='600'
                                        fontSize='12px'
                                        color='rgba(45, 177, 0, 1)'
                                    >
                                        589
                                    </Text>
                                </Flex>
                            </Box>
                            <Box w='57px' h='24px'>
                                <Flex gap='6px'>
                                    <Image src='/right-icon.svg'></Image>
                                    <Text
                                        fontFamily='Inter'
                                        fontWeight='600'
                                        fontSize='12px'
                                        color='rgba(45, 177, 0, 1)'
                                    >
                                        587
                                    </Text>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                    <Box w='48px' h='48px' mt='8px'>
                        <Image src='Icon-Button.svg'></Image>
                    </Box>
                    ``
                    <Box w='16px' h='8px'></Box>
                </Flex>
            </Box>
        </>
    );
}

export default Header;
