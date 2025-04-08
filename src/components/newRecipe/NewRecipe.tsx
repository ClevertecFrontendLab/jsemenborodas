import { Box, Heading, HStack, Icon, StackProps, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { ElementType } from 'react';

import { FavouriteNotes, Likes } from '~/icons/Icon';

import { NewRecipeData } from './NewRecipeData';

interface MetricProps extends StackProps {
    icon: ElementType;
}
function Metric(props: MetricProps) {
    const { icon, children, ...rest } = props;
    return (
        <HStack {...rest} spacing='6px'>
            <Icon as={icon} w={3} h={3} />
            <Text color='rgba(45, 177, 0, 1)' fontFamily='Inter' fontSize={12} fontWeight='600'>
                {children}
            </Text>
        </HStack>
    );
}

export function NewRecipe() {
    return (
        <>
            <Box
                maxW={{ base: '100vw', sm: 'calc(100vw - 40px)', md: '728px', xl: '880px' }}
                w={{ xl: '100%' }}
                h={{ xl: '466px' }}
                overflow='hidden'
                position='relative'
                px={{ base: '15px', sm: '0px', xl: '3.2px' }}
                my={{ base: '25px', xl: '53.9px' }}
            >
                <Heading
                    fontFamily='Inter'
                    fontWeight='500'
                    fontSize={{ base: '24px', xl: '37px' }}
                    lineHeight='32px'
                    letterSpacing={{ base: '0.61px', xl: '1px' }}
                    textAlign='left'
                    mb={{ base: '10px' }}
                >
                    Новые рецепты
                </Heading>
                <HStack w={{ base: '100%' }} spacing='11px' h={{ xl: '402px' }}>
                    {NewRecipeData.map((recipe) => (
                        <VStack
                            w={{ base: '159px', xl: '277px' }}
                            h={{ base: '220px', xl: '402px' }}
                            flexShrink={0}
                            position='relative'
                            border='1px solid #00000014'
                            borderRadius='8px'
                        >
                            <Box w={{ base: '159px', xl: '277px' }} minH='128px' overflow='hidden'>
                                <Image
                                    src={recipe.image}
                                    w='100%'
                                    h='100%'
                                    borderTopRadius='8px'
                                ></Image>
                                <HStack
                                    w='100%'
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
                            </Box>
                            <Box w='158px' h='92px'>
                                <Heading
                                    fontFamily='Inter'
                                    fontSize='16px'
                                    noOfLines={2}
                                    whiteSpace='normal'
                                    textOverflow='elipsis'
                                    overflow='hidden'
                                    lineHeight='24px'
                                    w='142px'
                                    h='48px'
                                    ml='9px'
                                    textAlign='left'
                                    fontWeight='500'
                                    letterSpacing='0px'
                                >
                                    {recipe.title}
                                </Heading>
                                <Box w='142px' h='24px' mt='11px' ml='12px'>
                                    <HStack spacing='17px'>
                                        {recipe.follows > 0 && (
                                            <Metric
                                                icon={FavouriteNotes}
                                            >{`${recipe.follows}`}</Metric>
                                        )}
                                        {recipe.likes > 0 && (
                                            <Metric icon={Likes}>{`${recipe.likes}`}</Metric>
                                        )}
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
