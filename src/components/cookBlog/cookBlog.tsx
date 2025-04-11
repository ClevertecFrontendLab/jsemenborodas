import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Grid,
    GridItem,
    Heading,
    Hide,
    HStack,
    Show,
    VStack,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

import { CookBlogData } from './cookBlogData';
import rightArrow from './Vector.png';
export function CookBlog() {
    return (
        <>
            <Box
                w={{ base: '100%', md: '100%' }}
                h={{ base: '600px', md: '272px', xl: '264px', '3xl': '304px' }}
                minW={{ xl: '880px' }}
                pr={{ base: '32px', xl: '0' }}
                mt={{ base: '32px', xl: '24px', '3xl': '38px' }}
                borderRadius='16px'
                overflow='hidden'
            >
                <Box
                    bg='rgba(196, 255, 97, 1)'
                    h='100%'
                    borderRadius='16px'
                    p={{ base: '13px 0px 0px 11.6px', xl: '24px 0px 0px 26px' }}
                >
                    <Box>
                        <HStack justifyContent={{ xl: 'space-between' }}>
                            <Heading
                                as='h3'
                                fontFamily='Inter'
                                fontSize={{ base: '24px', xl: '30px', '3xl': '36px' }}
                                lineHeight={{ base: '32px', xl: '36px', '3xl': '40px' }}
                                fontWeight={500}
                                letterSpacing={{ base: '0.5px', xl: '1px' }}
                            >
                                Кулинарные блоги
                            </Heading>
                            <Show above='xl'>
                                <Button
                                    bg='transparent'
                                    p={0}
                                    w={{ base: '149px' }}
                                    h={{ base: '40px' }}
                                    mr={{ xl: '20px', '3xl': '32px' }}
                                    mt={{ '3xl': '3px' }}
                                    pt={{ '3xl': '7px' }}
                                >
                                    <HStack spacing='11px'>
                                        <Text
                                            fontFamily='Inter'
                                            fontWeight={600}
                                            fontSize={{ base: '16px', '3xl': '18px' }}
                                            lineHeight={{ base: '24px' }}
                                            letterSpacing={{ base: '0.1px', '3xl': '0.3px' }}
                                        >
                                            Все авторы
                                        </Text>
                                        <Image src={rightArrow} w='14px' h='9px'></Image>
                                    </HStack>
                                </Button>
                            </Show>
                        </HStack>
                    </Box>
                    <Grid gap='0px' templateColumns={{ md: 'repeat(3, 33.333%)' }}>
                        {CookBlogData.map((card) => (
                            <GridItem
                                pr={{ base: '12px', xl: '12px' }}
                                h={{ base: '152px', xl: '160px', '3xl': '184px' }}
                                bg='transparent'
                                mt={{ base: '12px', xl: '18px', '3xl': '32px' }}
                                maxW='98%'
                            >
                                <Card bg='white' h='100%' borderRadius={8} maxW='100%'>
                                    <CardHeader
                                        p={{
                                            base: '16px 0px 0px 17px',
                                            xl: '16px 0px 0px 16.5px',
                                            '3xl': '24px 0px 0px 24px',
                                        }}
                                    >
                                        <Flex justifyContent='flex-start' w='100%'>
                                            <VStack>
                                                {' '}
                                                <Image
                                                    src={card.image}
                                                    w={{ base: '32px', xl: '48px' }}
                                                    h={{ base: '32px', xl: '48px' }}
                                                    borderRadius='50%'
                                                ></Image>
                                            </VStack>

                                            <VStack
                                                alignItems='flex-start'
                                                spacing={0}
                                                pl={{ base: '8px', xl: '11px' }}
                                                w={{
                                                    base: '240px',
                                                    md: 'calc(100% - 32px)',
                                                    xl: '185px',
                                                    '3xl': '320px',
                                                }}
                                            >
                                                <Text
                                                    textAlign='left'
                                                    fontFamily='Inter'
                                                    fontWeight={500}
                                                    fontSize={{ base: '16px', xl: '18px' }}
                                                    lineHeight={{ base: '24px' }}
                                                    letterSpacing={{ xl: '0px' }}
                                                    whiteSpace='nowrap'
                                                    textOverflow='ellipsis'
                                                    overflow='hidden'
                                                    sx={{
                                                        WebkitLineClamp: '1',
                                                    }}
                                                    w='100%'
                                                    pt={{ '3xl': '2px' }}
                                                >
                                                    {card.name}
                                                </Text>
                                                <Text
                                                    textAlign='left'
                                                    fontWeight={400}
                                                    fontFamily='Inter'
                                                    fontSize={{ base: '12px', xl: '14px' }}
                                                    lineHeight={{ base: '16px' }}
                                                    pt={{ xl: '5px' }}
                                                >
                                                    {card.link}
                                                </Text>
                                            </VStack>
                                        </Flex>
                                    </CardHeader>
                                    <CardBody
                                        w={{ base: '100%', '3xl': '420px' }}
                                        h='100%'
                                        textAlign='left'
                                        p={{
                                            base: '16px 12px 0px 16px',
                                            xl: '14px 10px 0px 15.5px',
                                            '3xl': '28px 10px 0px 24px',
                                        }}
                                        letterSpacing={{ xl: '0px' }}
                                    >
                                        <Text
                                            w='100%'
                                            h='64px'
                                            fontFamily='Inter'
                                            fontSize={{ base: '14px' }}
                                            fontWeight={400}
                                            lineHeight={{ base: '20px' }}
                                            noOfLines={3}
                                        >
                                            {card.text}
                                        </Text>
                                    </CardBody>
                                </Card>
                            </GridItem>
                        ))}
                    </Grid>
                    <Hide above='xl'>
                        <Button
                            bg='transparent'
                            p={0}
                            w={{ base: '149px' }}
                            h={{ base: '40px' }}
                            justifyContent='flex-start'
                        >
                            <HStack spacing='11px' ml='10px' mt='21px'>
                                <Text
                                    fontFamily='Inter'
                                    fontWeight={600}
                                    fontSize={{ base: '16px' }}
                                    lineHeight={{ base: '24px' }}
                                    letterSpacing={{ base: '0.1px' }}
                                >
                                    Все авторы
                                </Text>
                                <Image src={rightArrow} w='14px' h='9px'></Image>
                            </HStack>
                        </Button>
                    </Hide>
                </Box>
            </Box>
        </>
    );
}
