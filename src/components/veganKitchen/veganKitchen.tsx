import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Grid,
    GridItem,
    Heading,
    HStack,
    VStack,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { useLocation } from 'react-router';

import { FavouriteNotes, Likes } from '~/icons/Icon';

import { DerestiCardData } from '../Data/DerestiCardData';
import { DesetiData } from '../Data/DesetiData';
import { MetricsDefault } from '../metrics/MetricsDefault';
import { CardData } from './cardData';
import { veganKitchenData } from './veganKitchenData';

export function VeganKitchen() {
    const location = useLocation();
    const Name: Record<string, string> = {
        '/': 'Приятного аппетита!',
        Juciest: 'Самое сочное',
        SecondDelicious: 'Второе блюдо',
        VeganKitchen: 'Веганская кухня',
    };
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const secondSegment = pathSegments[1];
    const title = Name[secondSegment];
    return (
        <>
            <Box
                w='100%'
                mt={{ base: '40px', md: '39px', xl: '62px', '3xl': '60px' }}
                h={{ xl: '308px' }}
                mb={{ base: '100px', xl: 0 }}
                ml={title === 'Второе блюдо' ? { md: '4px' } : {}}
            >
                <Grid>
                    <GridItem>
                        <Grid
                            templateColumns={{ xl: '33% 1fr' }}
                            gap={
                                title === 'Второе блюдо'
                                    ? { xl: '8px', '3xl': '245px' }
                                    : { xl: '14px', '3xl': '245px' }
                            }
                        >
                            <GridItem>
                                <Heading
                                    textAlign='left'
                                    fontFamily='Inter'
                                    fontWeight={500}
                                    fontSize={
                                        title === 'Второе блюдо'
                                            ? { base: '24px', xl: '48px' }
                                            : { base: '24px', xl: '36px', '3xl': '48px' }
                                    }
                                    letterSpacing={{ base: '0.4px', xl: '1px', '3xl': '1.5px' }}
                                    pl={{ xl: '4px', '3xl': '2px' }}
                                    pt={{ xl: '2px', '3xl': '8px' }}
                                    lineHeight={
                                        title === 'Второе блюдо' ? { xl: '48px' } : { xl: '40px' }
                                    }
                                >
                                    {title === 'Второе блюдо'
                                        ? 'Десерты, выпечка'
                                        : 'Веганская кухня'}
                                </Heading>
                            </GridItem>
                            <GridItem
                                mt={
                                    pathSegments[0] === 'Juciest'
                                        ? { base: '6px', md: '8px', xl: '4px', '2xl': '2px' }
                                        : { base: '6px', md: '8px', xl: '4px', '2xl': '6px' }
                                }
                                w={{ base: '90%', md: '100%' }}
                            >
                                <Text
                                    w='99%'
                                    textAlign={{ base: 'left' }}
                                    fontFamily='Inter'
                                    fontWeight={500}
                                    color='#000000A3'
                                    fontSize={{ base: '14px', xl: '16px' }}
                                    letterSpacing={{ xl: '0.05px' }}
                                    lineHeight={{ base: '20px', xl: '24px' }}
                                    mt={title === 'Второе блюдо' ? { md: '2px', xl: '0px' } : {}}
                                >
                                    {title === 'Второе блюдо'
                                        ? 'Без них невозможно представить себе ни современную, ни традиционную кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб — рецепты изделий из теста многообразны и невероятно популярны.'
                                        : 'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'}
                                </Text>
                            </GridItem>
                        </Grid>
                    </GridItem>
                    <GridItem
                        h={{ base: '540px', md: '172px' }}
                        mt={
                            title === 'Второе блюдо'
                                ? { base: '16px', md: '14px', xl: '20px' }
                                : { base: '16px', md: '14px', xl: '24px' }
                        }
                    >
                        <Grid
                            templateRows={{ base: 'repeat(3, 1fr)', md: '1fr' }}
                            templateColumns={{
                                base: '1fr',
                                md: '31.9% 31.9% 33%',
                                xl: '31.9% 31.9% 31.5%',
                                '2xl': '23.9% 23.9% 1fr',
                            }}
                            gap={
                                title === 'Второе блюдо'
                                    ? { base: '12px', xl: '18px', '2xl': '22px' }
                                    : { base: '12px', xl: '20px', '2xl': '22px' }
                            }
                            ml={{ xl: '4px' }}
                        >
                            {(title === 'Второе блюдо' ? DesetiData : veganKitchenData).map(
                                (item) => (
                                    <GridItem
                                        h={{ base: '168px', xl: '180px', '2xl': '194px' }}
                                        minWidth='0'
                                    >
                                        <Card
                                            h='100%'
                                            borderRadius='8px'
                                            border='1px solid #00000014'
                                            boxShadow='none'
                                            className='custom-cursor'
                                        >
                                            <CardBody
                                                p={{ base: '12px' }}
                                                pt={{ xl: '16px', '2xl': '24px' }}
                                                pl={{ xl: '14px', '2xl': '20px' }}
                                                pb={{ '2xl': 0 }}
                                            >
                                                <VStack
                                                    alignItems='flex-start'
                                                    spacing={
                                                        title === 'Второе блюдо'
                                                            ? { xl: '0px' }
                                                            : { xl: '5px' }
                                                    }
                                                >
                                                    <Box
                                                        maxW={{ base: '100%', xl: '95%' }}
                                                        className='WindowBroker'
                                                    >
                                                        <Text
                                                            fontFamily='Inter'
                                                            fontWeight={500}
                                                            fontSize={{ base: '16px', xl: '20px' }}
                                                            lineHeight={{
                                                                base: '24px',
                                                                xl: '28px',
                                                            }}
                                                            textAlign='left'
                                                            whiteSpace='nowrap'
                                                            overflow='hidden'
                                                            textOverflow='ellipsis'
                                                            letterSpacing={{ xl: '0.25px' }}
                                                            sx={{
                                                                WebkitLineClamp: '1',
                                                            }}
                                                            w='100%'
                                                        >
                                                            {item.title}
                                                        </Text>
                                                    </Box>
                                                    <Box mt='2px'>
                                                        <Text
                                                            fontFamily='Inter'
                                                            fontWeight={400}
                                                            fontSize={{ base: '13.9px' }}
                                                            lineHeight={{ base: '20px' }}
                                                            textAlign='left'
                                                            noOfLines={3}
                                                            mt={
                                                                title === 'Второе блюдо'
                                                                    ? { md: '6px' }
                                                                    : { base: '6px', xl: '0px' }
                                                            }
                                                        >
                                                            {item.description}
                                                        </Text>
                                                    </Box>
                                                </VStack>
                                            </CardBody>
                                            <CardFooter
                                                h={{ '2xl': '50px' }}
                                                pt={{ base: '16px', xl: '16px', '2xl': '4px' }}
                                                pr={{ base: '17px', md: '18px', '2xl': '30.5px' }}
                                                pl={{ base: '10px', '2xl': '20px' }}
                                            >
                                                <HStack
                                                    justifyContent='space-between'
                                                    w='100%'
                                                    ml={{ xl: '4px', '2xl': '0px' }}
                                                    minW={{ '2xl': '192px' }}
                                                >
                                                    <Box bg='#FFFFD3' py='2px' px='8px'>
                                                        <HStack>
                                                            <Image src={item.tagIcon}></Image>
                                                            <Text
                                                                fontFamily='Inter'
                                                                fontSize={{ base: '14px' }}
                                                                lineHeight={{ base: '20px' }}
                                                                fontWeight={400}
                                                                whiteSpace='nowrap'
                                                                textOverflow='ellipsis'
                                                                overflow='hidden'
                                                            >
                                                                {item.tag}
                                                            </Text>
                                                        </HStack>
                                                    </Box>
                                                    <Box>
                                                        <HStack spacing='16px'>
                                                            <MetricsDefault icon={FavouriteNotes}>
                                                                <Text
                                                                    fontFamily='Inter'
                                                                    fontSize={{ base: '12px' }}
                                                                    lineHeight={{ base: '20px' }}
                                                                    fontWeight={600}
                                                                    color='#2DB100'
                                                                >
                                                                    {item.follows}
                                                                </Text>
                                                            </MetricsDefault>
                                                            <MetricsDefault icon={Likes}>
                                                                <Text>{item.likes}</Text>
                                                            </MetricsDefault>
                                                        </HStack>
                                                    </Box>
                                                </HStack>
                                            </CardFooter>
                                        </Card>
                                    </GridItem>
                                ),
                            )}
                            <GridItem
                                h={{ base: '180px', xl: '200px' }}
                                minW='0'
                                height={{ base: '52px' }}
                            >
                                <VStack
                                    spacing={
                                        title === 'Второе блюдо'
                                            ? { base: '12px', md: '6px', xl: '12px' }
                                            : { base: '12px', md: '6px', xl: '12px', '2xl': '16px' }
                                    }
                                >
                                    {(title === 'Второе блюдо' ? DerestiCardData : CardData).map(
                                        (item) => (
                                            <Card
                                                borderRadius='8px'
                                                border='1px solid #00000014'
                                                h={
                                                    title === 'Второе блюдо'
                                                        ? { base: '52px', '2xl': '57px' }
                                                        : { base: '52px' }
                                                }
                                                w='100%'
                                                minW='0'
                                                overflow='hidden'
                                                maxW='100%'
                                                boxShadow='none'
                                                className='custom-cursor'
                                            >
                                                <CardBody
                                                    p={{ base: '16px 0px 0px 12px' }}
                                                    pt={
                                                        title === 'Второе блюдо'
                                                            ? { xl: '16px' }
                                                            : { xl: '12px' }
                                                    }
                                                    pl={{ md: '10px', xl: '9px' }}
                                                    minW='0'
                                                    w='100%'
                                                >
                                                    <HStack
                                                        flexShrink={1}
                                                        w={{ base: '63%', md: '57%', xl: '67%' }}
                                                    >
                                                        <HStack
                                                            minW='0'
                                                            gap={
                                                                title === 'Второе блюдо'
                                                                    ? { '2xl': '0' }
                                                                    : { base: '8px' }
                                                            }
                                                        >
                                                            <Box
                                                                minW='24px'
                                                                w='24px'
                                                                ml={{ '2xl': '12px' }}
                                                            >
                                                                <Image
                                                                    src={item.tagIcon}
                                                                    w='24px'
                                                                    h='24px'
                                                                ></Image>
                                                            </Box>
                                                            <Box
                                                                w={{
                                                                    base: '100%',
                                                                    md: '100%',
                                                                    xl: '100%',
                                                                    '2xl': '100%',
                                                                }}
                                                            >
                                                                <Text
                                                                    fontFamily='Inter'
                                                                    fontWeight={500}
                                                                    fontSize={{
                                                                        base: '16px',
                                                                        xl: '18px',
                                                                        '2xl': '20px',
                                                                    }}
                                                                    letterSpacing={{
                                                                        '2xl': '0.3px',
                                                                    }}
                                                                    whiteSpace='nowrap'
                                                                    overflow='hidden'
                                                                    textOverflow='ellipsis'
                                                                    textAlign={{ '2xl': 'left' }}
                                                                    sx={{
                                                                        WebkitLineClamp: '1',
                                                                    }}
                                                                    pl={{ '2xl': '6px' }}
                                                                >
                                                                    {item.title}
                                                                </Text>
                                                            </Box>
                                                        </HStack>
                                                        <Box
                                                            ml={{ base: '4px' }}
                                                            mr={{ md: '12px', '2xl': '18px' }}
                                                        >
                                                            <Button
                                                                bg='transparent'
                                                                border='1px solid #2DB100'
                                                                borderRadius='6px'
                                                                minW='70px'
                                                                minH='32px'
                                                                w={{ base: '70px', '2xl': '87px' }}
                                                                h='32px'
                                                                cursor='none'
                                                                position='absolute'
                                                                right={
                                                                    title === 'Второе блюдо'
                                                                        ? {
                                                                              base: '12px',
                                                                              xl: '6px',
                                                                              '2xl': '24px',
                                                                          }
                                                                        : {
                                                                              base: '12px',
                                                                              xl: '6px',
                                                                              '2xl': '16px',
                                                                          }
                                                                }
                                                                top={
                                                                    title === 'Второе блюдо'
                                                                        ? {
                                                                              base: '12px',
                                                                              xl: '10px',
                                                                              '2xl': '14px',
                                                                          }
                                                                        : {
                                                                              base: '12px',
                                                                              xl: '10px',
                                                                          }
                                                                }
                                                            >
                                                                <Text
                                                                    fontFamily='Inter'
                                                                    fontWeight={600}
                                                                    fontSize={{
                                                                        base: '12px',
                                                                        '2xl': '14px',
                                                                    }}
                                                                    color='#2DB100'
                                                                >
                                                                    Готовить
                                                                </Text>
                                                            </Button>
                                                        </Box>
                                                    </HStack>
                                                </CardBody>
                                            </Card>
                                        ),
                                    )}
                                </VStack>
                            </GridItem>
                        </Grid>
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
}
