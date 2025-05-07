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

import { useGetCategoriesQuery } from '~/query/services/categories';
import { Category } from '~/query/types/types';
import { setAppError } from '~/store/app-slice';
import { useAppDispatch } from '~/store/hooks';

import exiticon from '../../../../public/exitIcon.png';
import { NavMenuData } from '../../entities/Data/NavMenuData';
import { Loader } from '../loader/Loader';
export function NavMenu() {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const selectedCategory = NavMenuData.find((item) => item.category === pathSegments[0]);

    const navigate = useNavigate();
    const { data, isError, isLoading, error, isFetching } = useGetCategoriesQuery({});
    const mockData = localStorage.getItem('navMenu');

    const filteredData = data?.filter((item) => item.subCategories !== undefined);
    if (mockData === null && data) {
        localStorage.setItem('navMenu', JSON.stringify(filteredData));
    }
    let resultData;
    if (mockData && data) {
        resultData = JSON.parse(mockData);
    }
    if (isError) {
        dispatch(setAppError('Error'));
        localStorage.setItem('Error', 'Error');
    }

    if (isError && resultData === null) {
        console.log(error);
        return <></>;
    }

    if (isLoading || isFetching) {
        return (
            <>
                <Loader></Loader>
            </>
        );
    } else {
        return (
            <>
                <Box
                    position='fixed'
                    zIndex='200'
                    boxShadow='none'
                    borderRight='1px solid #00000024'
                    w='260px'
                >
                    <VStack
                        h='calc(100vh - 80px)'
                        w='256px'
                        pt={{ xl: '33px' }}
                        pr={{ xl: '10px' }}
                        ml='8px'
                        boxShadow='none'
                    >
                        <Accordion
                            boxShadow='none'
                            borderRadius='8px'
                            w='258px'
                            allowToggle
                            maxH='calc(100vh - 80px - 180px)'
                            overflow='hidden'
                            overflowY='auto'
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
                            {(isError ? resultData : filteredData)?.map((item: Category) => (
                                <AccordionItem key={item._id} border='none' boxShadow='none'>
                                    <AccordionButton
                                        py={0}
                                        px={0}
                                        pr={2}
                                        ml={4}
                                        w='230px'
                                        _expanded={{ bg: '#EAFFC7' }}
                                        pl='4px'
                                        onClick={() => {
                                            const path = `/${item.category}/${item.subCategories[0].category}`;
                                            navigate(path);
                                        }}
                                    >
                                        <Box as='span' flex='1' textAlign='left'>
                                            <HStack spacing='12px' align='center' h='48px'>
                                                <Image
                                                    src={`https://training-api.clevertec.ru${item.icon}`}
                                                    w='24px'
                                                    h='24px'
                                                ></Image>
                                                <Heading
                                                    as='h4'
                                                    fontFamily='Inter'
                                                    fontSize='16px'
                                                    lineHeight='24px'
                                                    fontWeight={
                                                        pathSegments[0] === item.category
                                                            ? 700
                                                            : 500
                                                    }
                                                    // fontWeight={
                                                    //     title === 'Второе блюдо' &&
                                                    //     item.title === 'Веганская кухня'
                                                    //         ? 700
                                                    //         : 500
                                                    // }
                                                    letterSpacing='0px'
                                                    data-test-id={
                                                        selectedCategory?.title === item.title
                                                            ? selectedCategory?.category
                                                            : item.title === 'Веганская кухня'
                                                              ? 'vegan-cuisine'
                                                              : '""'
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
                                            {item.subCategories.map((child) => (
                                                <Box
                                                    _hover={{ cursor: 'pointer' }}
                                                    w='230px'
                                                    h='36px'
                                                    textAlign='left'
                                                    pl='55px'
                                                    pt='10px'
                                                    position='relative'
                                                    onClick={() => {
                                                        const path = `/${item.category}/${child.category}`;
                                                        navigate(path);
                                                    }}
                                                >
                                                    <Heading
                                                        as='h5'
                                                        fontSize='16px'
                                                        fontFamily='Inter'
                                                        whiteSpace='nowrap'
                                                        letterSpacing='0.1px'
                                                        data-test-id={
                                                            pathSegments[1] === child.category
                                                                ? `${pathSegments[1]}-active`
                                                                : '""'
                                                        }
                                                        fontWeight={
                                                            pathSegments[1] === child.category
                                                                ? 700
                                                                : 500
                                                        }
                                                        sx={{
                                                            '&::before':
                                                                pathSegments[1] === child.category
                                                                    ? {
                                                                          content: '""',
                                                                          position: 'absolute',
                                                                          left: '35px',
                                                                          transform:
                                                                              'translateY(-4px)',
                                                                          height: '28px',
                                                                          width: '8px',
                                                                          backgroundColor:
                                                                              '#C4FF61',
                                                                      }
                                                                    : {
                                                                          content: '""',
                                                                          position: 'absolute',
                                                                          left: '43px',
                                                                          height: '24px',
                                                                          width: '1px',
                                                                          backgroundColor:
                                                                              '#C4FF61',
                                                                      },
                                                        }}
                                                        // fontWeight={
                                                        //     title === 'Второе блюдо' &&
                                                        //     child.title === 'Вторые блюда'
                                                        //         ? 700
                                                        //         : 500
                                                        // }
                                                        // sx={{
                                                        //     '&::before':
                                                        //         title === 'Второе блюдо'
                                                        //             ? {
                                                        //                   content: '""',
                                                        //                   position: 'absolute',
                                                        //                   left:
                                                        //                       child.title ===
                                                        //                       'Вторые блюда'
                                                        //                           ? '35px'
                                                        //                           : '43px',
                                                        //                   transform:
                                                        //                       child.title ===
                                                        //                       'Вторые блюда'
                                                        //                           ? 'translateY(-4px)'
                                                        //                           : '',
                                                        //                   height:
                                                        //                       child.title ===
                                                        //                       'Вторые блюда'
                                                        //                           ? '28px'
                                                        //                           : '24px',
                                                        //                   width:
                                                        //                       child.title ===
                                                        //                       'Вторые блюда'
                                                        //                           ? '8px'
                                                        //                           : '1px',
                                                        //                   backgroundColor: '#C4FF61',
                                                        //               }
                                                        //             : {},
                                                        // }}
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
                            <VStack
                                spacing='15px'
                                pt='10px'
                                pl='4px'
                                ml='-5px'
                                data-test-id='footer'
                            >
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
                                    Все права защищены, ученический файл,<br></br> ©Клевер
                                    Технолоджи, 2025
                                </Text>
                                <HStack spacing='6px' pl='16px'>
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
}
