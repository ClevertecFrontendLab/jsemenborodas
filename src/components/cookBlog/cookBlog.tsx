import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
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
                h={{ base: '600px', md: '272px', xl: '264px', '2xl': '304px' }}
                p={{ base: '0px 16px 0px 16px', md: '0' }}
                mt={{ base: '32px', xl: '40px' }}
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
                                fontSize={{ base: '24px', xl: '30px', '2xl': '36px' }}
                                lineHeight={{ base: '32px', xl: '36px', '2xl': '40px' }}
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
                                    mr={{ xl: '20px', '2xl': '35px' }}
                                    pt={{ '2xl': '7px' }}
                                >
                                    <HStack spacing='11px'>
                                        <Text
                                            fontFamily='Inter'
                                            fontWeight={600}
                                            fontSize={{ base: '16px', '2xl': '18px' }}
                                            lineHeight={{ base: '24px' }}
                                            letterSpacing={{ base: '0.1px', '2xl': '0.3px' }}
                                        >
                                            Все авторы
                                        </Text>
                                        <Image src={rightArrow} w='14px' h='9px'></Image>
                                    </HStack>
                                </Button>
                            </Show>
                        </HStack>
                    </Box>
                    <Grid gap='0px' templateColumns={{ md: 'repeat(3, 1fr)' }}>
                        {CookBlogData.map((card) => (
                            <GridItem
                                pr={{ base: '12px', xl: '12px' }}
                                h={{ base: '152px', xl: '160px', '2xl': '184px' }}
                                bg='transparent'
                                mt={{ base: '12px', xl: '16px', '2xl': '32px' }}
                                maxW='98%'
                            >
                                <Card bg='white' h='100%' borderRadius={8}>
                                    <CardHeader
                                        p={{
                                            base: '16px 0px 0px 17px',
                                            '2xl': '24px 0px 0px 24px',
                                        }}
                                    >
                                        <HStack spacing={{ base: 0 }} justifyContent='flex-start'>
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
                                                    md: '184px',
                                                    xl: '185px',
                                                    '2xl': '320px',
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
                                                >
                                                    {card.name}
                                                </Text>
                                                <Text
                                                    textAlign='left'
                                                    fontWeight={400}
                                                    fontFamily='Inter'
                                                    fontSize={{ base: '12px', xl: '14px' }}
                                                    lineHeight={{ base: '16px' }}
                                                >
                                                    {card.link}
                                                </Text>
                                            </VStack>
                                        </HStack>
                                    </CardHeader>
                                    <CardBody
                                        w={{ base: '100%', '2xl': '420px' }}
                                        h='100%'
                                        textAlign='left'
                                        p={{
                                            base: '16px 20px 0px 16px',
                                            xl: '16px 10px 0px 15.5px',
                                            '2xl': '28px 10px 0px 24px',
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
