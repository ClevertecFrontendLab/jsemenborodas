import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    HStack,
    Icon,
    useBreakpointValue,
    VStack,
} from '@chakra-ui/react';
import { Image, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { Breadcrumbs } from '~/components/features/BreadCrumb/BreadCrumbs';
import { Burger, OpenBurger } from '~/icons/Icon';
import { useGetCategoriesQuery } from '~/query/services/categories';
import { Category } from '~/query/types/types';
import { setAppLoader } from '~/store/app-slice';
import { useAppDispatch } from '~/store/hooks';

import exiticon from '../../../someimages/exitIcon.png';
interface BurgerMenuProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function BurgerMenu({ isOpen, setIsOpen }: BurgerMenuProps) {
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter((x) => x);
    const dispatch = useAppDispatch();
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };
    const isDesktop = useBreakpointValue({ base: false, xl: true });
    const navigate = useNavigate();
    const dataId = useBreakpointValue({
        base: 'vegan-cuisine',
        xl: '',
    });
    const { data, isError, isLoading } = useGetCategoriesQuery({});

    const filteredData = data?.filter((item) => item.subCategories !== undefined);
    useEffect(() => {
        if (!isLoading) {
            dispatch(setAppLoader(false));
        }
    }, [dispatch, isLoading]);
    let resultData;

    if (isError && filteredData) {
        const mockData = localStorage.getItem('navMenu');
        if (mockData === null || (mockData === undefined && data)) {
            localStorage.setItem('navMenu', JSON.stringify(filteredData));
        }
        if (mockData && data && mockData !== undefined) {
            resultData = JSON.parse(mockData) || null;
        }
    } else {
        localStorage.setItem('navMenu', JSON.stringify(filteredData));
    }

    // if (isLoading || isFetching) {
    //     return <Loader />;
    // }
    return (
        <>
            <Box onClick={toggleMenu} zIndex='11'>
                <Icon
                    as={isOpen ? OpenBurger : Burger}
                    w={isOpen ? 3 : 6}
                    h={isOpen ? 3 : 6}
                    data-test-id={isOpen ? 'close-icon' : 'hamburger-icon'}
                />
            </Box>
            <Box
                position='absolute'
                top='60px'
                right={{ base: '8px' }}
                data-test-id={isDesktop ? 'nav' : isOpen ? 'nav' : undefined}
                display={isOpen ? 'block' : 'none'}
                w='344px'
                h={{ base: '82vh', sm: '85vh' }}
                maxH={{ base: '652px', md: '876px' }}
                zIndex='11'
                background='white'
                borderBottomRadius={12}
                overflow='hidden'
            >
                <VStack
                    alignItems='normal'
                    w='344px'
                    pt={{ base: '18px' }}
                    position='absolute'
                    h='100%'
                >
                    <HStack
                        w='100%'
                        pl={{ base: '42px', sm: '30px', md: '20px' }}
                        pb={{ base: '12px', sm: '25px', md: '16px' }}
                    >
                        <Text
                            fontFamily='Inter'
                            fontWeight={400}
                            fontSize='16px'
                            lineHeight='24px'
                            letterSpacing={0}
                            textAlign='left'
                            whiteSpace='wrap'
                        >
                            <Breadcrumbs></Breadcrumbs>
                        </Text>
                    </HStack>
                    <Accordion
                        boxShadow='none'
                        borderRadius='8px'
                        w='100%'
                        minH='0px'
                        h={{
                            base: 'calc(100% - 144px - 24px)',
                            md: 'calc(100% - 144px - 66px)',
                        }}
                        allowToggle
                        overflow='hidden'
                        overflowY='auto'
                        mt={{ md: '6px' }}
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
                            <AccordionItem border='none' boxShadow='none'>
                                <AccordionButton
                                    p={0}
                                    h='48px'
                                    _expanded={{ bg: '#EAFFC7' }}
                                    onClick={() => {
                                        const path = `/${item.category}/${item.subCategories[0].category}`;
                                        navigate(path);
                                    }}
                                >
                                    <HStack
                                        justifyContent='space-between'
                                        w='100%'
                                        pl={{ base: '18px' }}
                                        pr={{ base: '28px', sm: '22px', md: '24px' }}
                                    >
                                        <HStack spacing='12px'>
                                            <Image
                                                src={`https://training-api.clevertec.ru${item.icon}`}
                                                w='24px'
                                                h='24px'
                                            ></Image>
                                            <Text
                                                fontFamily='Inter'
                                                fontWeight={
                                                    pathNames[0] === item.category ? 700 : 500
                                                }
                                                fontSize='16px'
                                                lineHeight='24px'
                                                letterSpacing={0}
                                                data-test-id={
                                                    item.title === 'Веганская кухня' ? dataId : ''
                                                }
                                            >
                                                {item.title}
                                            </Text>
                                        </HStack>

                                        <AccordionIcon w='24px' h='32px'></AccordionIcon>
                                    </HStack>
                                </AccordionButton>
                                <AccordionPanel overflow='hidden' boxShadow='none' p={0} pt={2}>
                                    <VStack alignItems='flex-start' spacing={0}>
                                        {item.subCategories.map((child) => (
                                            <Box
                                                w='230px'
                                                h='36px'
                                                pl='62px'
                                                onClick={() => {
                                                    const path = `/${item.category}/${child.category}`;
                                                    navigate(path);
                                                }}
                                            >
                                                <HStack position='relative'>
                                                    <Text
                                                        fontWeight={
                                                            pathNames[1] === child.category
                                                                ? '700'
                                                                : '500'
                                                        }
                                                        fontFamily='Inter'
                                                        fontSize='16px'
                                                        lineHeight='24px'
                                                        letterSpacing={0}
                                                        whiteSpace='nowrap'
                                                        sx={{
                                                            '&::before':
                                                                pathNames[1] === child.category
                                                                    ? {
                                                                          content: '""',
                                                                          position: 'absolute',
                                                                          left: '-16px',
                                                                          height: '28px',
                                                                          width: '8px',
                                                                          backgroundColor:
                                                                              '#C4FF61',
                                                                      }
                                                                    : {
                                                                          content: '""',
                                                                          position: 'absolute',
                                                                          left: '-8px',
                                                                          height: '24px',
                                                                          width: '1px',
                                                                          backgroundColor:
                                                                              '#C4FF61',
                                                                      },
                                                        }}
                                                    >
                                                        {child.title}
                                                    </Text>
                                                </HStack>
                                            </Box>
                                        ))}
                                    </VStack>
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <Box
                        w='100%'
                        h='144px'
                        mt='8px'
                        p='20px 24px'
                        position='absolute'
                        bottom='4px'
                        bg='white'
                    >
                        <VStack alignItems='flex-start' h='100%' spacing='16px'>
                            <Box textAlign='left'>
                                <Text
                                    textAlign='left'
                                    fontFamily='Inter'
                                    fontWeight={500}
                                    fontSize='12px'
                                    lineHeight='16px'
                                    color='#0000003D'
                                >
                                    Версия программы 03.25
                                </Text>
                            </Box>
                            <Box>
                                <Text
                                    textAlign='left'
                                    fontFamily='Inter'
                                    fontWeight={500}
                                    fontSize='12px'
                                    lineHeight='16px'
                                    color='#000000A3'
                                    letterSpacing='0'
                                >
                                    Bce права защищены, ученический файл, ©Клевер Технолоджи, 2025
                                </Text>
                            </Box>
                            <HStack spacing='6px'>
                                <Image src={exiticon}></Image>
                                <Text
                                    textAlign='left'
                                    fontFamily='Inter'
                                    fontWeight={600}
                                    fontSize='12px'
                                    lineHeight='16px'
                                    color='#000000'
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
