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

import { FavouriteNotes, Likes } from '~/icons/Icon';

import { MetricsDefault } from '../metrics/MetricsDefault';
import { CardData } from './cardData';
import { veganKitchenData } from './veganKitchenData';

export function VeganKitchen() {
    return (
        <>
            <Box
                w='100%'
                mt={{ base: '40px', md: '42px', xl: '62px', '3xl': '60px' }}
                h={{ xl: '308px' }}
                mb={{ base: '100px', xl: 0 }}
            >
                <Grid>
                    <GridItem>
                        <Grid
                            px={{ base: '16px', md: '0', xl: '3px' }}
                            templateColumns={{ xl: '33% 1fr' }}
                            gap={{ xl: '14px', '3xl': '245px' }}
                        >
                            <GridItem>
                                <Heading
                                    textAlign='left'
                                    fontFamily='Inter'
                                    fontWeight={500}
                                    fontSize={{ base: '24px', xl: '36px', '3xl': '48px' }}
                                    letterSpacing={{ base: '0.4px', xl: '1px', '3xl': '1.5px' }}
                                >
                                    Веганская кухня
                                </Heading>
                            </GridItem>
                            <GridItem mt={{ base: '12px', xl: '4px' }}>
                                <Text
                                    textAlign={{ base: 'left' }}
                                    fontFamily='Inter'
                                    fontWeight={500}
                                    color='#000000A3'
                                    fontSize={{ base: '14px', xl: '16px' }}
                                    letterSpacing={{ xl: '0.05px' }}
                                    lineHeight={{ base: '20px', xl: '24px' }}
                                >
                                    Интересны не только убеждённым вегетарианцам, но и тем, кто
                                    хочет попробовать вегетарианскую диету и готовить вкусные
                                    вегетарианские блюда.
                                </Text>
                            </GridItem>
                        </Grid>
                    </GridItem>
                    <GridItem h={{ base: '540px', md: '172px' }} mt={{ base: '16px', xl: '20px' }}>
                        <Grid
                            templateRows={{ base: 'repeat(3, 1fr)', md: '1fr' }}
                            templateColumns={{
                                base: '1fr',
                                md: '31.9% 31.9% 33%',
                                xl: '31.9% 31.9% 31.5%',
                                '2xl': '23.9% 23.9% 1fr',
                            }}
                            px={{ base: '16px', md: '0', '2xl': '2px' }}
                            gap={{ base: '12px', xl: '20px', '2xl': '24px' }}
                        >
                            {veganKitchenData.map((item) => (
                                <GridItem
                                    h={{ base: '168px', xl: '180px', '2xl': '194px' }}
                                    minWidth='0'
                                >
                                    <Card
                                        h='100%'
                                        borderRadius='8px'
                                        border='1px solid #00000014'
                                        boxShadow='none'
                                    >
                                        <CardBody
                                            p={{ base: '12px' }}
                                            pt={{ xl: '16px', '2xl': '20px' }}
                                            pl={{ xl: '16.5px', '2xl': '22.5px' }}
                                            pb={{ '2xl': 0 }}
                                        >
                                            <VStack alignItems='flex-start'>
                                                <Box
                                                    maxW={{ base: '100%', xl: '95%' }}
                                                    className='WindowBroker'
                                                >
                                                    <Text
                                                        fontFamily='Inter'
                                                        fontWeight={500}
                                                        fontSize={{ base: '16px', xl: '20px' }}
                                                        lineHeight={{ base: '24px', xl: '28px' }}
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
                                                <Box>
                                                    <Text
                                                        fontFamily='Inter'
                                                        fontWeight={400}
                                                        fontSize={{ base: '14px' }}
                                                        lineHeight={{ base: '20px' }}
                                                        textAlign='left'
                                                        noOfLines={3}
                                                    >
                                                        {item.description}
                                                    </Text>
                                                </Box>
                                            </VStack>
                                        </CardBody>
                                        <CardFooter
                                            h={{ '2xl': '50px' }}
                                            pt={{ base: '18px', '2xl': '0px' }}
                                            pr={{ base: '17px', md: '18px', '2xl': '30.5px' }}
                                            pl={{ '2xl': '32px' }}
                                        >
                                            <HStack justifyContent='space-between' w='100%'>
                                                <Box bg='#FFFFD3'>
                                                    <HStack>
                                                        <Image src={item.tagIcon}></Image>
                                                        <Text
                                                            fontFamily='Inter'
                                                            fontSize={{ base: '14px' }}
                                                            lineHeight={{ base: '20px' }}
                                                            fontWeight={400}
                                                            whiteSpace='nowrap'
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
                            ))}
                            <GridItem
                                h={{ base: '180px', xl: '200px' }}
                                minW='0'
                                height={{ base: '52px' }}
                            >
                                <VStack
                                    spacing={{ base: '12px', md: '6px', xl: '12px', '2xl': '16px' }}
                                >
                                    {CardData.map((item) => (
                                        <Card
                                            borderRadius='8px'
                                            border='1px solid #00000014'
                                            h={{ base: '52px' }}
                                            w='100%'
                                            minW='0'
                                            overflow='hidden'
                                            maxW='100%'
                                            boxShadow='none'
                                        >
                                            <CardBody
                                                p={{ base: '9px 0px 0px 12px' }}
                                                pl={{ md: '10px' }}
                                                minW='0'
                                                w='100%'
                                            >
                                                <HStack
                                                    minW='0'
                                                    justifyContent={{ md: 'space-between' }}
                                                >
                                                    <Box minW='24px' w='24px' ml={{ '2xl': '8px' }}>
                                                        <Image
                                                            src={item.tagIcon}
                                                            w='24px'
                                                            h='24px'
                                                        ></Image>
                                                    </Box>
                                                    <Box
                                                        w={{
                                                            base: 'calc(100% - 24px - 70px - 30px)',
                                                            md: '45%',
                                                            xl: '55.7%',
                                                            '2xl': '74%',
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
                                                            letterSpacing={{ '2xl': '0.3px' }}
                                                            whiteSpace='nowrap'
                                                            overflow='hidden'
                                                            textOverflow='ellipsis'
                                                            textAlign={{ '2xl': 'left' }}
                                                            sx={{
                                                                WebkitLineClamp: '1',
                                                            }}
                                                            pl={{ '2xl': '0px' }}
                                                        >
                                                            {item.title}
                                                        </Text>
                                                    </Box>
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
                                    ))}
                                </VStack>
                            </GridItem>
                        </Grid>
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
}
