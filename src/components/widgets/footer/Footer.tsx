import { Box, Button, Center, Hide, HStack, VStack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { useAppSelector } from '~/store/hooks';
import { selectorIsBurgerOpen, selectorIsFilterOpen } from '~/store/reducers/open';

import Avatar from '../../shared/images/avatarImages/avatar.jpg';
import Notes from '../../shared/images/FooterImages/IconButton.png';
import Home from '../../shared/images/FooterImages/left-icon.png';
import Search from '../../shared/images/FooterImages/Vector.png';

export function Footer() {
    const navigate = useNavigate();
    const isFilterOpen = useAppSelector(selectorIsFilterOpen);
    const isBurgerOpen = useAppSelector(selectorIsBurgerOpen);
    const isBurgerOrFilterOpen = () => {
        if (isBurgerOpen || isFilterOpen) {
            return true;
        }
        return false;
    };
    return (
        <>
            <Hide above='xl'>
                <HStack
                    w='100%'
                    h='84px'
                    spacing={0}
                    bg='#FFFFD3'
                    mt='16px'
                    data-test-id='footer'
                    position='fixed'
                    bottom='0px'
                    filter={isBurgerOrFilterOpen() ? 'blur(2px)' : ''}
                >
                    <Button
                        bg='radial-gradient(circle, #C4FF61 0%, #FFFFD3 40%)'
                        w='25%'
                        h='100%'
                        pt={{ base: '14px', md: '12px' }}
                        onClick={() => navigate('/')}
                    >
                        <VStack spacing={0} pt='0px' h='100%'>
                            <Box bg='black' w='40px' h='40px' borderRadius='50%'>
                                <Center>
                                    <Image
                                        src={Home}
                                        bg='black'
                                        transform='translateY(70%)'
                                    ></Image>
                                </Center>
                            </Box>
                            <Text
                                fontFamily='Inter'
                                fontWeight={500}
                                fontSize='12px'
                                lineHeight='16px'
                                mt='4px'
                            >
                                Главная
                            </Text>
                        </VStack>
                    </Button>
                    <Button bg='transparent' w='25%' h='100%' pt={{ base: '10px', md: '8px' }}>
                        <VStack h='100%' pt='12px' spacing={0}>
                            <Image src={Search}></Image>
                            <Text
                                fontFamily='Inter'
                                fontWeight={500}
                                fontSize='12px'
                                lineHeight='16px'
                                mt='12px'
                            >
                                Поиск
                            </Text>
                        </VStack>
                    </Button>
                    <Button bg='transparent' w='25%' h='100%' pt={{ base: '10px', md: '8px' }}>
                        <VStack spacing={0} h='100%'>
                            <Image src={Notes}></Image>
                            <Text
                                fontFamily='Inter'
                                fontWeight={500}
                                fontSize='12px'
                                lineHeight='16px'
                            >
                                Записать
                            </Text>
                        </VStack>
                    </Button>
                    <Button bg='transparent' w='25%' h='100%' pt={{ base: '10px', md: '8px' }}>
                        <VStack spacing={0} pt='4px' h='100%'>
                            <Image src={Avatar} w={10} h={10} borderRadius='50%'></Image>
                            <Text
                                fontFamily='Inter'
                                fontWeight={500}
                                fontSize='12px'
                                lineHeight='16px'
                                mt='4px'
                            >
                                Мой профиль
                            </Text>
                        </VStack>
                    </Button>
                </HStack>
            </Hide>
        </>
    );
}
