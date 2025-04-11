import {
    Avatar,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Card,
    CardHeader,
    Heading,
    Hide,
    HStack,
    Icon,
    Show,
    VStack,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { useLocation } from 'react-router';

import { Burger, FullLogo, Logo } from '~/icons/Icon';

import { Metrics } from '../metrics/Metrics';

export function Header() {
    const location = useLocation();
    const breadCrumbNames: Record<string, string> = {
        '/JuciestPage': 'Самые Сочные',
        '/SecondDelicious': 'Вторые Блюда',
    };
    const pathNames = location.pathname.split('/').filter((x) => x);
    return (
        <>
            <Box
                as='header'
                bg='rgba(255, 255, 211, 1)'
                data-test-id='header'
                w='100%'
                position='fixed'
                top='0'
                maxW={{ base: '1920px', sm: '100vw', xl: '1920px' }}
                zIndex='1200'
                pb='2px'
            >
                <HStack
                    spacing={{ base: 0, xl: '7.9rem' }}
                    paddingTop={{ base: '11px', md: '10px', xl: '16px', '2xl': '16px' }}
                    paddingBottom={{ xl: '16px' }}
                    paddingX={{ base: '16px', md: '20px', xl: '20px' }}
                    marginRight={{ xl: '56px' }}
                    paddingRight={{ xl: '0px' }}
                    justifyContent={{ base: 'space-between', xl: 'normal' }}
                >
                    <Box>
                        <Hide above='md'>
                            <Icon as={Logo} w={8} h={8} />
                        </Hide>
                        <Show above='md'>
                            <Icon
                                as={FullLogo}
                                w={{ lg: '135.11px', xl: '135.2px' }}
                                h={8}
                                mt={{ xl: '4px' }}
                            />
                        </Show>
                    </Box>

                    <HStack
                        spacing={0}
                        textAlign='right'
                        maxW={{ xl: '1591px' }}
                        w={{ xl: '100%' }}
                    >
                        <HStack
                            spacing={0}
                            px={{ base: 0, md: 2, lg: 0 }}
                            maxW={{ xl: '1152.8px' }}
                            w='100%'
                        >
                            <Hide above='xl'>
                                <Metrics></Metrics>
                            </Hide>
                            <Show above='xl'>
                                <Heading
                                    fontSize={16}
                                    lineHeight={6}
                                    fontWeight='400'
                                    padding={0}
                                    fontFamily='Inter'
                                >
                                    <Breadcrumb separator='>'>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href='/'>Главная</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        {pathNames.map((_, index) => {
                                            const route = `/${pathNames[index]}`;
                                            const displayName = breadCrumbNames[route];
                                            return (
                                                <BreadcrumbItem key={route}>
                                                    <BreadcrumbLink href={route}>
                                                        {displayName}
                                                    </BreadcrumbLink>
                                                </BreadcrumbItem>
                                            );
                                        })}
                                    </Breadcrumb>
                                </Heading>
                            </Show>
                        </HStack>
                        <Box
                            w={{ base: '48px', xl: '432px' }}
                            h={12}
                            pt={{ base: '9px', xl: '0px' }}
                            pr={{ base: '12px', xl: '0px' }}
                        >
                            <Hide above='xl'>
                                <Icon as={Burger} w={6} h={6} />
                            </Hide>
                            <Show above='xl'>
                                <Card shadow='none' w='432px' bg='transparent'>
                                    <CardHeader p={0} bg='rgba(255, 255, 211, 1)'>
                                        <HStack justifyContent='flex-start' spacing='12px'>
                                            <Avatar
                                                ml={{ xl: '53px', '2xl': '55px' }}
                                                p={0}
                                                name='Екатерина Константинопольская'
                                                src='./avatar.jpg'
                                                bg='transparent'
                                            ></Avatar>
                                            <Box>
                                                <VStack spacing={0} alignItems='flex-start'>
                                                    <Heading
                                                        fontSize='18.2px'
                                                        fontWeight='500'
                                                        lineHeight='28px'
                                                        fontFamily='Inter'
                                                        letterSpacing='0%'
                                                        pt='0.5px'
                                                    >
                                                        Екатерина Константинопольская
                                                    </Heading>
                                                    <Text
                                                        color='rgba(0, 0, 0, 0.64)'
                                                        lineHeight='20px'
                                                        fontFamily='Inter'
                                                        fontSize='14px'
                                                        mt='-1px'
                                                    >
                                                        @bake_and_pie
                                                    </Text>
                                                </VStack>
                                            </Box>
                                        </HStack>
                                    </CardHeader>
                                </Card>
                            </Show>
                        </Box>
                    </HStack>
                </HStack>
            </Box>
        </>
    );
}
