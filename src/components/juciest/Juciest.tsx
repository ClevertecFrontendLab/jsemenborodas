import {
    Box,
    Button,
    Card,
    CardBody,
    Grid,
    GridItem,
    Heading,
    Hide,
    HStack,
    Icon,
    Show,
    VStack,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

import { FavouriteNotes, Likes } from '~/icons/Icon';

import { MetricsDefault } from '../metrics/MetricsDefault';
import { JuciestData } from './juciestData';
import RightArrow from './juciestImages/Vector.png';
export function Juciest() {
    return (
        <>
            <Box
                px={{ base: '16px', md: '0px', xl: '0px' }}
                mt={{ base: '34px', xl: '75px', '2xl': '109px' }}
                ml={{ xl: '3.2px' }}
                minW={{ xl: '880px' }}
            >
                <HStack justifyContent='space-between'>
                    <Heading
                        fontSize={{ base: '24px', xl: '36px', '2xl': '48px' }}
                        fontFamily='Inter'
                        fontWeight='500'
                        lineHeight={{ base: '32px', xl: '40px', '2xl': '48px' }}
                        letterSpacing={{ base: '0.4px', '2xl': '1.6px' }}
                        textAlign='left'
                    >
                        Самое сочное
                    </Heading>
                    <Show above='xl'>
                        <Button
                            w={{ xl: '167px', '2xl': '197px' }}
                            h={{ xl: '40px', '2xl': '48px' }}
                            paddingX={{ xl: '16.5px' }}
                            pt={{ xl: '1px', '2xl': '4.5px' }}
                            pl={{ base: '15px', '2xl': '20px' }}
                            bg='#B1FF2E'
                            mt={{ md: '-2px' }}
                            borderRadius='6px'
                        >
                            <HStack spacing='10px'>
                                <Text
                                    fontWeight={600}
                                    fontFamily='Inter'
                                    lineHeight='24px'
                                    letterSpacing={{ '2xl': '0.2px' }}
                                    fontSize={{ base: '16px', '2xl': '18px' }}
                                >
                                    Вся подборка
                                </Text>
                                <Image src={RightArrow} w='14px' h='8px'></Image>
                            </HStack>
                        </Button>
                    </Show>
                </HStack>

                <Grid
                    border='none'
                    borderColor='transparent'
                    mt={{ base: '11px', xl: '16px', '2xl': '24px' }}
                    templateColumns={{
                        md: 'repeat(2, 1fr)',
                        xl: 'repeat(1,1fr)',
                        '2xl': 'repeat(2,1fr)',
                    }}
                    gap={{ base: '12px', md: '16px', '2xl': '24px' }}
                >
                    {JuciestData.map((recipe) => (
                        <GridItem>
                            <Card
                                borderRadius={8}
                                w={{ base: '100%', md: '100%', xl: '100%', '2xl': '50%' }}
                                maxW={{ '2xl': '668px' }}
                                h={{ base: '128px', xl: '244px' }}
                            >
                                <CardBody p={0} w='100%' h='100%' borderLeftRadius={8}>
                                    <HStack
                                        p={0}
                                        w={{ base: '100%' }}
                                        h='100%'
                                        spacing={0}
                                        borderLeftRadius={8}
                                    >
                                        <Box
                                            w={{ base: '158px', xl: '346px' }}
                                            minW={{ xl: '346px' }}
                                            h='100%'
                                            borderLeftRadius={8}
                                        >
                                            <Image
                                                src={recipe.image}
                                                h='100%'
                                                w={{ base: '100%' }}
                                                borderLeftRadius={8}
                                            ></Image>
                                            <Show above='xl'>
                                                {recipe.isRecomended == true &&
                                                    recipe.recomendedInfo.map((recomendant) => (
                                                        <Box
                                                            bg='#D7FF94'
                                                            w='fit-content'
                                                            h='28px'
                                                            transform={{
                                                                xl: 'translateY(-48px) translateX(24px)',
                                                            }}
                                                            borderRadius='4px'
                                                            padding='4px 8px'
                                                        >
                                                            <HStack>
                                                                <Image
                                                                    w='16px'
                                                                    h='16px'
                                                                    borderRadius='50%'
                                                                    src={recomendant.profileImage}
                                                                ></Image>
                                                                <Text
                                                                    fontFamily='Inter'
                                                                    fontSize='14px'
                                                                    fontWeight={400}
                                                                    lineHeight='20px'
                                                                    color='#000000'
                                                                >
                                                                    {recomendant.name} рекомендует
                                                                </Text>
                                                            </HStack>
                                                        </Box>
                                                    ))}
                                            </Show>
                                            <Hide above='xl'>
                                                <Box
                                                    w={{ base: '127px' }}
                                                    h='24px'
                                                    bg='#FFFFD3'
                                                    borderRadius='4px'
                                                    transform='translateY(-120px) translateX(8px)'
                                                >
                                                    <HStack p={{ base: '2px 4px' }} spacing='2px'>
                                                        <Image
                                                            src={recipe.tagIcon}
                                                            w={{ base: '16px' }}
                                                        ></Image>
                                                        <Text
                                                            fontFamily='Inter'
                                                            fontWeight={400}
                                                            fontSize={{ base: '14px' }}
                                                            lineHeight='20px'
                                                        >
                                                            {recipe.tag}
                                                        </Text>
                                                    </HStack>
                                                </Box>
                                            </Hide>
                                        </Box>
                                        <Box
                                            w={{ base: 'calc(100% - 158px)', '2xl': '100%' }}
                                            h={{ xl: '100%' }}
                                        >
                                            <VStack
                                                spacing={0}
                                                mt={{ base: '4px' }}
                                                textAlign='left'
                                            >
                                                <HStack
                                                    w={{
                                                        base: '154px',
                                                        md: '100%',
                                                        xl: '486px',
                                                        '2xl': '274px',
                                                    }}
                                                    h={{ base: '24px' }}
                                                    spacing={{ base: '17px', '2xl': '8px' }}
                                                    ml={{
                                                        base: '8px',
                                                        md: '24px',
                                                        xl: '0px',
                                                        '2xl': '20px',
                                                    }}
                                                    mt={{ xl: '16px' }}
                                                    justifyContent={{ xl: 'space-between' }}
                                                >
                                                    <Show above='xl'>
                                                        <HStack
                                                            w='fit-content'
                                                            h='24px'
                                                            fontWeight='400'
                                                            fontFamily='Inter'
                                                            fontSize='14px'
                                                            lineHeight='20px'
                                                            bg='#FFFFD3'
                                                            p='0px 8px 0px 9px'
                                                            spacing={{ xl: '7px', '2xl': '7px' }}
                                                        >
                                                            <Image
                                                                src={recipe.tagIcon}
                                                                w={4}
                                                            ></Image>
                                                            <Text>{recipe.tag}</Text>
                                                        </HStack>
                                                    </Show>
                                                    <Box>
                                                        <HStack
                                                            mr={{ xl: '5.5px', '2xl': '6px' }}
                                                            spacing='16.5px'
                                                        >
                                                            <MetricsDefault
                                                                icon={FavouriteNotes}
                                                                w={{ base: 'fit-content' }}
                                                            >
                                                                <Text
                                                                    fontSize='12px'
                                                                    lineHeight='16px'
                                                                    color='#2DB100'
                                                                    fontWeight='600'
                                                                    fontFamily='Inter'
                                                                >
                                                                    {recipe.follows}
                                                                </Text>
                                                            </MetricsDefault>
                                                            <MetricsDefault
                                                                icon={Likes}
                                                                w={{ base: 'fit-content' }}
                                                            >
                                                                <Text
                                                                    fontSize='12px'
                                                                    lineHeight='16px'
                                                                    color='#2DB100'
                                                                    fontWeight='600'
                                                                    fontFamily='Inter'
                                                                >
                                                                    {recipe.likes}
                                                                </Text>
                                                            </MetricsDefault>
                                                        </HStack>
                                                    </Box>
                                                </HStack>
                                                <Heading
                                                    as='h4'
                                                    w={{
                                                        base: '154px',
                                                        md: '100%',
                                                        '2xl': '274px',
                                                    }}
                                                    h={{ base: '68px', xl: '62px', '2xl': '28px' }}
                                                    fontSize={{ base: '15.5px', xl: '19.7px' }}
                                                    fontFamily='Inter'
                                                    lineHeight={{ base: '24px' }}
                                                    textAlign='left'
                                                    ml={{
                                                        base: '0px',
                                                        md: '15px',
                                                        xl: '45px',
                                                        '2xl': '19px',
                                                    }}
                                                    letterSpacing={{ base: '0' }}
                                                    pt={{
                                                        base: '1px',
                                                        xl: '26.5px',
                                                        '2xl': '0px',
                                                    }}
                                                    mt={{ '2xl': '26px' }}
                                                    sx={{ wordSpacing: '0.8px' }}
                                                    whiteSpace={{ '2xl': 'nowrap' }}
                                                    textOverflow={{ '2xl': 'ellipsis' }}
                                                    overflow={{ '2xl': 'hidden' }}
                                                >
                                                    {recipe.title}
                                                </Heading>
                                                <Show above='xl'>
                                                    <Text
                                                        w={{ xl: '486px', '2xl': '280px' }}
                                                        h='64px'
                                                        ml={{ '2xl': '25px' }}
                                                        fontFamily='Inter'
                                                        fontSize={{ xl: '13.98px' }}
                                                        lineHeight='20px'
                                                        textAlign='left'
                                                        mt={{ '2xl': '6px' }}
                                                        noOfLines={{ '2xl': 3 }}
                                                    >
                                                        {recipe.description}
                                                    </Text>
                                                </Show>

                                                <HStack
                                                    w={{ base: '154px', md: '100%' }}
                                                    h={{ base: '24px' }}
                                                    justifyContent='flex-end'
                                                    mr={{ md: '16px', xl: '46px', '2xl': '10px' }}
                                                    mt={{ md: '1px', xl: '26px', '2xl': '28px' }}
                                                    spacing='8px'
                                                >
                                                    <Button
                                                        size='base'
                                                        w={{ base: '24px', xl: '122px' }}
                                                        h={{ base: '24px', xl: '32px' }}
                                                        border='1px solid #0000007A'
                                                        borderRadius='6px'
                                                        bg='transparent'
                                                    >
                                                        <HStack>
                                                            <Icon
                                                                as={FavouriteNotes}
                                                                w='12px'
                                                            ></Icon>
                                                            <Show above='xl'>
                                                                <Text
                                                                    fontFamily='Inter'
                                                                    fontWeight={600}
                                                                    fontSize='14px'
                                                                    lineHeight='20px'
                                                                >
                                                                    Сохранить
                                                                </Text>
                                                            </Show>
                                                        </HStack>
                                                    </Button>
                                                    <Button
                                                        w={{ base: '70px', xl: '88px' }}
                                                        h={{ base: '24px', xl: '32px' }}
                                                        bg='#000000EB'
                                                        borderRadius='6px'
                                                    >
                                                        <HStack spacing='7.5px'>
                                                            <Text
                                                                color='#FFFFFF'
                                                                fontWeight={600}
                                                                fontFamily='Inter'
                                                                fontSize={{
                                                                    base: '12px',
                                                                    xl: '14px',
                                                                }}
                                                                lineHeight={{ base: '16px' }}
                                                            >
                                                                Готовить
                                                            </Text>
                                                        </HStack>
                                                    </Button>
                                                </HStack>
                                            </VStack>
                                        </Box>
                                    </HStack>
                                </CardBody>
                            </Card>
                        </GridItem>
                    ))}
                    <Hide above='xl'>
                        <GridItem>
                            <Button
                                w='167px'
                                h='40px'
                                paddingX='16px'
                                mx={{ base: 'auto', md: '79%' }}
                                pl={{ base: '15px' }}
                                bg='#B1FF2E'
                                mt={{ md: '-2px' }}
                            >
                                <HStack spacing='10px'>
                                    <Text
                                        fontWeight={600}
                                        fontFamily='Inter'
                                        lineHeight='24px'
                                        fontSize={{ base: '16px' }}
                                    >
                                        Вся подборка
                                    </Text>
                                    <Image src={RightArrow} w='14px' h='8px'></Image>
                                </HStack>
                            </Button>
                        </GridItem>
                    </Hide>
                </Grid>
            </Box>
        </>
    );
}
