import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading,
    HStack,
    VStack,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

import exiticon from '../../../public/exitIcon.png';
import { NavMenuData } from './NavMenuData';
export function NavMenu() {
    return (
        <>
            <Box position='fixed' zIndex='200'>
                <VStack
                    h='calc(100vh - 80px)'
                    w='256px'
                    boxShadow='0px 1px 3px 0px #0000001F'
                    pt={{ xl: '34px', '2xl': '34px' }}
                >
                    <Accordion
                        w='256px'
                        allowToggle
                        maxH='calc(100vh - 80px - 190px)'
                        overflow='hidden'
                        overflowY='auto'
                        pl='0px'
                        sx={{
                            '&::-webkit-scrollbar': {
                                width: '8px',
                                background: '#0000000A',
                            },
                            '&::-webkit-scrollbar-track': {
                                background: 'transparent',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: '#00000029',
                                borderRadius: '8px',
                            },
                            '&::-webkit-scrollbar-button': {
                                display: 'none',
                            },
                        }}
                    >
                        {NavMenuData.map((item) => (
                            <AccordionItem key={item.id} border='none'>
                                <AccordionButton
                                    py={0}
                                    px={0}
                                    pr={2}
                                    ml={5}
                                    w='230px'
                                    _expanded={{ bg: '#EAFFC7' }}
                                >
                                    <Box as='span' flex='1' textAlign='left'>
                                        <HStack spacing='12px' align='center' h='48px'>
                                            <Image src={item.icon} w='24px' h='24px'></Image>
                                            <Heading
                                                as='h4'
                                                fontFamily='Inter'
                                                fontSize='16px'
                                                lineHeight='24px'
                                                fontWeight='500'
                                            >
                                                {' '}
                                                {item.title}
                                            </Heading>
                                        </HStack>
                                    </Box>
                                    <AccordionIcon w='24px' h='32px'></AccordionIcon>
                                </AccordionButton>
                                <AccordionPanel overflowY='auto'>
                                    <VStack>
                                        {item.childrens.map((child) => (
                                            <Box
                                                key={child.id}
                                                w='230px'
                                                h='36px'
                                                textAlign='left'
                                                pl='52px'
                                            >
                                                <Heading
                                                    as='h5'
                                                    fontSize='16px'
                                                    fontWeight='500'
                                                    fontFamily='Inter'
                                                >
                                                    {Object.values(child.title).join('')}
                                                </Heading>
                                            </Box>
                                        ))}
                                    </VStack>
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <Box as='footer' position='fixed' bottom='36px'>
                        <VStack spacing='15px' pt='10px' pl='5px'>
                            <Text
                                fontFamily='Inter'
                                color='#0000003D'
                                fontWeight='500'
                                fontSize='12px'
                                lineHeight='16px'
                                textAlign='left'
                                w='208px'
                                h='16px'
                            >
                                Версия программы 03.25
                            </Text>
                            <Text
                                fontFamily='Inter'
                                color='#000000A3'
                                fontWeight='500'
                                fontSize='12px'
                                lineHeight='16px'
                                textAlign='left'
                                w='208px'
                                h='48px'
                            >
                                Все права защищены, ученический файл,<br></br> ©Клевер Технолоджи,
                                2025
                            </Text>
                            <HStack spacing='6px' pl='17px'>
                                <Image src={exiticon}></Image>
                                <Text
                                    fontFamily='Inter'
                                    color='##000000'
                                    fontWeight='600'
                                    fontSize='12px'
                                    lineHeight='18px'
                                    textAlign='left'
                                    w='208px'
                                    h='16px'
                                >
                                    Выйти
                                </Text>
                            </HStack>
                        </VStack>
                    </Box>
                </VStack>
            </Box>
        </>
    );
}
