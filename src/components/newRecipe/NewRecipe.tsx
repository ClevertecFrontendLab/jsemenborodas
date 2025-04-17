import { Box, Button, Heading, Hide, HStack, Icon, Show, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

import { FavouriteNotes, leftArrow, Likes, rightArrow } from '~/icons/Icon';

import { Metrics } from '../features/Metrics/Metrics';
import { NewRecipeData } from './NewRecipeData';

export function NewRecipe() {
    return (
        <>
            <Box
                maxW={{
                    base: '100vw',
                    sm: 'calc(100vw - 40px)',
                    md: 'calc(880px + (1440px - 880px) * ((100vw - 880px) / (1440 - 880)))',
                    xl: '1360px',
                }}
                minW={{ xl: '880px' }}
                w={{ xl: '100%' }}
                h={{ xl: '466px' }}
                position='relative'
                pr={{ base: '0' }}
                ml={{ xl: '3.2px' }}
                my={{ base: '25px', xl: '14px', '2xl': '0px' }}
                mb={{ xl: '40px', '2xl': '80px' }}
            >
                <Show above='xl'>
                    <Box
                        position='relative'
                        top={{ xl: '248px', '2xl': '268px' }}
                        w='100%'
                        h={{ xl: '40px', '2xl': '48px' }}
                        overflow={{ xl: 'hidden', '2xl': 'visible' }}
                    >
                        <Button
                            bg='#000000'
                            w={{ xl: '40px', '2xl': '48px' }}
                            h={{ xl: '40px', '2xl': '48px' }}
                            position='absolute'
                            top='0px'
                            left='-8px'
                            borderRadius='6px'
                            zIndex='500'
                        >
                            <Icon as={leftArrow} w={{ '2xl': '24px' }}></Icon>
                        </Button>
                        <Button
                            bg='#000000'
                            w={{ xl: '40px', '2xl': '48px' }}
                            h={{ xl: '40px', '2xl': '48px' }}
                            top='0px'
                            right='-8px'
                            borderRadius='6px'
                            position='absolute'
                            zIndex='500'
                        >
                            <Icon as={rightArrow} w={{ '2xl': '24px' }}></Icon>
                        </Button>
                    </Box>
                </Show>

                <Heading
                    fontFamily='Inter'
                    fontWeight='500'
                    fontSize={{ base: '24px', xl: '37px', '2xl': '48px' }}
                    lineHeight={{ base: '32px', '2xl': '48px' }}
                    letterSpacing={{ base: '0.61px', xl: '1px', '2xl': '2px' }}
                    textAlign='left'
                    mb={{ base: '10px', xl: '26px', '2xl': '24px' }}
                >
                    Новые рецепты
                </Heading>
                <HStack
                    overflow='hidden'
                    w={{ base: '100%' }}
                    spacing={{ base: '12px', xl: '13px', '2xl': '24px' }}
                    h={{ xl: '402px', '2xl': '414px' }}
                >
                    {NewRecipeData.map((recipe) => (
                        <VStack
                            w={{ base: '158px', xl: '277px', '2xl': '322px' }}
                            h={{ base: '220px', xl: '402px', '2xl': '414px' }}
                            flexShrink={0}
                            position='relative'
                            border='1px solid #00000014'
                            borderRadius='8px'
                            className='custom-cursor'
                        >
                            <Box
                                w={{ base: '158px', xl: '277px', '2xl': '322px' }}
                                minH={{ base: '128px', xl: '230px' }}
                                maxH={{ xl: '230px' }}
                                overflow='hidden'
                            >
                                <Image
                                    src={recipe.image}
                                    w='100%'
                                    h='100%'
                                    borderTopRadius='8px'
                                ></Image>

                                <Hide above='xl'>
                                    <HStack
                                        w='fit-content'
                                        bg='#D7FF94'
                                        borderRadius='4px'
                                        spacing='2px'
                                        px={{ base: '4px' }}
                                        py={{ base: '2px' }}
                                        transform='translateY(-120px) translateX(8px)'
                                    >
                                        <Image src={recipe.tagIcon}></Image>
                                        <Text
                                            fontWeight='400'
                                            fontSize='14px'
                                            fontFamily='Inter'
                                            h='20px'
                                            maxW='200px'
                                            lineHeight='20px'
                                        >
                                            {recipe.tag}
                                        </Text>
                                    </HStack>
                                </Hide>
                            </Box>
                            <Box
                                w={{ base: '158px', xl: '277px' }}
                                h={{ base: '92px', xl: '172px' }}
                                pt={{ xl: '5px', '2xl': '9px' }}
                            >
                                <Heading
                                    w={{ base: '142px', xl: '255px', '2xl': '274px' }}
                                    h={{ base: '48px', xl: '28px' }}
                                    lineHeight={{ base: '24px', xl: '28px' }}
                                    fontFamily='Inter'
                                    fontSize={{ base: '16px', xl: '18px', '2xl': '20.2px' }}
                                    fontWeight='500'
                                    textAlign='left'
                                    ml={{ base: '8px', xl: '0px' }}
                                    noOfLines={{ base: 2, xl: 1 }}
                                    display={{ xl: 'block' }}
                                    whiteSpace={{ xl: 'nowrap' }}
                                    pl={{ xl: '12px', '2xl': '2px' }}
                                >
                                    {recipe.title}
                                </Heading>

                                <Show above='xl'>
                                    <Text
                                        w={{ xl: '270px', '2xl': '280px' }}
                                        h='64px'
                                        fontFamily='Inter'
                                        fontSize='14px'
                                        lineHeight='20px'
                                        textAlign='left'
                                        mt='8px'
                                        noOfLines={3}
                                        pl={{ xl: '12px', '2xl': '1.5px' }}
                                    >
                                        {recipe.description}
                                    </Text>
                                </Show>
                                <Box
                                    w={{ base: '142px', xl: '100%' }}
                                    h='24px'
                                    mt={{ base: '11px', xl: '23px' }}
                                    ml={{ base: '12px', xl: 0 }}
                                >
                                    <HStack
                                        spacing='17px'
                                        w='100%'
                                        overflow='hidden'
                                        justifyContent='space-between'
                                    >
                                        <Show above='xl'>
                                            <HStack
                                                ml={{ xl: '12px', '2xl': '2px' }}
                                                px={2}
                                                spacing='8px'
                                                w='fit-content'
                                                h='24px'
                                                fontWeight='400'
                                                fontFamily='Inter'
                                                fontSize='14px'
                                                lineHeight='20px'
                                                bg='#D7FF94'
                                            >
                                                <Image src={recipe.tagIcon} w={4}></Image>
                                                <Text>{recipe.tag}</Text>
                                            </HStack>
                                        </Show>
                                        <HStack
                                            spacing={{ base: '16px', xl: '8px' }}
                                            mr={{ xl: '9px', '2xl': '-1px' }}
                                        >
                                            {recipe.follows > 0 && (
                                                <Metrics
                                                    w={{ xl: '32px' }}
                                                    icon={FavouriteNotes}
                                                >{`${recipe.follows}`}</Metrics>
                                            )}
                                            {recipe.likes > 0 && (
                                                <Metrics
                                                    w={{ xl: '32px' }}
                                                    icon={Likes}
                                                >{`${recipe.likes}`}</Metrics>
                                            )}
                                        </HStack>
                                    </HStack>
                                </Box>
                            </Box>
                        </VStack>
                    ))}
                </HStack>
            </Box>
        </>
    );
}
