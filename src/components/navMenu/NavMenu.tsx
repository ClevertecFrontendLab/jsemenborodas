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
import { useLocation, useNavigate } from 'react-router';

import exiticon from '../../../public/exitIcon.png';
import { NavMenuData } from './NavMenuData';
export function NavMenu() {
    const location = useLocation();
    const navigate = useNavigate();
    const Name: Record<string, string> = {
        '/': 'Приятного аппетита!',
        Juciest: 'Самое сочное',
        SecondDelicious: 'Второе блюдо',
    };
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const secondSegment = pathSegments[1];
    const title = Name[secondSegment];
    return (
        <>
            <Box position='fixed' zIndex='200' boxShadow='none'>
                <VStack
                    h='calc(100vh - 80px)'
                    w='256px'
                    pt={{ xl: '33px' }}
                    pr={{ xl: '10px' }}
                    ml='8px'
                    boxShadow='none'
                >
                    <Accordion
                        onClick={() => navigate('/VeganKitchen/SecondDelicious')}
                        border='1px solid #0000001A'
                        boxShadow='none'
                        borderLeft='none'
                        borderRadius='8px'
                        defaultIndex={(title === 'Второе блюдо' && 6) || undefined}
                        w='258px'
                        allowToggle
                        maxH='calc(100vh - 80px - 180px)'
                        overflow='hidden'
                        overflowY='auto'
                        borderTop='none'
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
                            <AccordionItem key={item.id} border='none' boxShadow='none'>
                                <AccordionButton
                                    py={0}
                                    px={0}
                                    pr={2}
                                    ml={4}
                                    w='230px'
                                    _expanded={{ bg: '#EAFFC7' }}
                                    pl='4px'
                                >
                                    <Box as='span' flex='1' textAlign='left'>
                                        <HStack spacing='12px' align='center' h='48px'>
                                            <Image src={item.icon} w='24px' h='24px'></Image>
                                            <Heading
                                                as='h4'
                                                fontFamily='Inter'
                                                fontSize='16px'
                                                lineHeight='24px'
                                                fontWeight={
                                                    title === 'Второе блюдо' &&
                                                    item.title === 'Веганская кухня'
                                                        ? 700
                                                        : 500
                                                }
                                                letterSpacing='0px'
                                                data-test-id={
                                                    item.title === 'Веганская кухня'
                                                        ? 'vegan-cuisine'
                                                        : undefined
                                                }
                                            >
                                                {' '}
                                                {item.title}
                                            </Heading>
                                        </HStack>
                                    </Box>
                                    <AccordionIcon w='24px' h='32px'></AccordionIcon>
                                </AccordionButton>
                                <AccordionPanel
                                    overflowY='auto'
                                    pb={0}
                                    pt={0}
                                    overflow='hidden'
                                    boxShadow='none'
                                >
                                    <VStack spacing={0}>
                                        {item.childrens.map((child) => (
                                            <Box
                                                key={child.id}
                                                w='230px'
                                                h='36px'
                                                textAlign='left'
                                                pl='50px'
                                                pt={2}
                                                position='relative'
                                            >
                                                <Heading
                                                    as='h5'
                                                    fontSize='16px'
                                                    fontFamily='Inter'
                                                    whiteSpace='nowrap'
                                                    letterSpacing='0.1px'
                                                    fontWeight={
                                                        title === 'Второе блюдо' &&
                                                        child.title === 'Вторые блюда'
                                                            ? 700
                                                            : 500
                                                    }
                                                    sx={{
                                                        '&::before':
                                                            title === 'Второе блюдо'
                                                                ? {
                                                                      content: '""',
                                                                      position: 'absolute',
                                                                      left:
                                                                          child.title ===
                                                                          'Вторые блюда'
                                                                              ? '31px'
                                                                              : '38px',
                                                                      transform:
                                                                          child.title ===
                                                                          'Вторые блюда'
                                                                              ? 'translateY(-4px)'
                                                                              : '',
                                                                      height:
                                                                          child.title ===
                                                                          'Вторые блюда'
                                                                              ? '28px'
                                                                              : '24px',
                                                                      width:
                                                                          child.title ===
                                                                          'Вторые блюда'
                                                                              ? '8px'
                                                                              : '1px',
                                                                      backgroundColor: '#C4FF61',
                                                                  }
                                                                : {},
                                                    }}
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
                    <Box as='footer' position='fixed' bottom='37px'>
                        <VStack spacing='15px' pt='10px' pl='0px' ml='-5px'>
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
                            <HStack spacing='6px' pl='9px'>
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
