import { Box, Flex, FlexProps, Icon, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { useState } from 'react';

import { DefaultImage } from './assets/Icons';
import { AddIngridients } from './header/addIngridients';
import { Buttons } from './header/Buttons';
import { Header } from './header/Header';
import { Steps } from './header/steps';
export function CreateNewRecipe() {
    const [recipeImage, _setRecipeImage] = useState('');

    const recipeImageHeight = useBreakpointValue({
        base: '224px',
        xl: '410px',
    });

    const recipeImageWidth = useBreakpointValue({
        base: '328px',
        md: '232px',
        xl: '353px',
        '2xl': '553px',
    });

    const flexDirection = useBreakpointValue<FlexProps['direction']>({
        base: 'column',
        md: 'row',
    });
    return (
        <>
            <Box
                as='section'
                pt={{ base: 16, xl: 10 }}
                pl={{ xl: 1 }}
                px={{ base: 4, md: 0 }}
                w='100%'
                h='100%'
                mb={{ base: '100px' }}
                mx={{ md: 'auto' }}
                maxW={{ md: '728px', xl: '100%' }}
            >
                <Flex direction={flexDirection} mt={{ base: 4 }}>
                    {recipeImage.length ? (
                        <Image
                            minW={recipeImageWidth}
                            maxW={recipeImageWidth}
                            minH={recipeImageHeight}
                            maxH={recipeImageHeight}
                            src={recipeImage}
                            borderRadius={8}
                            alt='defaultImage'
                        ></Image>
                    ) : (
                        <Box
                            minW={recipeImageWidth}
                            maxW={recipeImageWidth}
                            minH={recipeImageHeight}
                            maxH={recipeImageHeight}
                            bgColor='rgba(0, 0, 0, 0.08)'
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            borderRadius={8}
                        >
                            <Icon as={DefaultImage} w={8} h={8} />
                        </Box>
                    )}
                    <Header />
                </Flex>{' '}
                <VStack alignItems={{ xl: 'flex-start' }}>
                    <AddIngridients />
                    <Steps />
                    <Buttons />
                </VStack>
            </Box>
        </>
    );
}
