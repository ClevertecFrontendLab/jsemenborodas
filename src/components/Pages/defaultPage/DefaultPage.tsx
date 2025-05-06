import { Box, Grid, GridItem, HStack, Show, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';

import { ContentRecipe } from '~/components/widgets/contentRecipe/contentRecipe';
import { ContentRecipeDefault } from '~/components/widgets/contentRecipe/contentRecipeDefault';
import { Filter } from '~/components/widgets/Filter/Filter';
import { Slider } from '~/components/widgets/slider/Slider';
import { Tabs } from '~/components/widgets/tabs/Tabs';
import { VeganKitchen } from '~/components/widgets/veganKitchen/veganKitchen';
import { useAppSelector } from '~/store/hooks';
import { selectorIsFilterOpen } from '~/store/reducers/open';
import { selectIsSearchStarted, selectIsSearchSuccessful } from '~/store/reducers/search';

import { AddRecipe } from '../../widgets/addRecipe/AddRecipe';
import { MetricsDesktop } from '../../widgets/metricsDesktop/MetricsDesktop';
import { NavMenu } from '../../widgets/navMenu/NavMenu';
import { SearchForm2 } from '../../widgets/searchForm/SearchForm2';

interface PageMenuProps {
    isBurgerOpen: boolean;
}

const scrollController = {
    disabledScroll() {
        document.body.style.overflow = 'hidden';
    },
    enabledScroll() {
        document.body.style.overflow = 'auto';
    },
};

export function DefaultPage({ isBurgerOpen }: PageMenuProps) {
    const isSearchStarted = useAppSelector(selectIsSearchStarted);
    const isSearchSuccessful = useAppSelector(selectIsSearchSuccessful);
    const isFilterOpen = useAppSelector(selectorIsFilterOpen);
    useEffect(() => {
        if (isBurgerOpen || isFilterOpen) {
            scrollController.disabledScroll();
        } else {
            scrollController.enabledScroll();
        }
    }, [isBurgerOpen, isFilterOpen]);

    return (
        <>
            {isFilterOpen && (
                <Box as='section'>
                    <Filter></Filter>
                </Box>
            )}
            <Box
                as='article'
                w='100%'
                maxW={{ sm: '100vw' }}
                p={0}
                mt={{ base: '64px', sm: '62px', xl: '80px' }}
                position='relative'
                filter={isBurgerOpen === true ? 'blur(4px)' : ''}
                bg={isBurgerOpen === true ? 'rgba(0, 0, 0, 0.16)' : ''}
            >
                <Grid
                    templateColumns={{ xl: '256px auto 208px' }}
                    maxW='100vw'
                    gap={{ xl: '24px' }}
                    overflow='visible'
                >
                    <GridItem>
                        <Show above='xl'>
                            <Box w='300px' as='nav' bg='red300'>
                                <NavMenu />
                            </Box>
                        </Show>
                    </GridItem>
                    <GridItem minW={{ xl: '880px' }}>
                        {' '}
                        <HStack
                            px={{ md: '20px', xl: '0' }}
                            spacing='0px'
                            justifyContent={{ base: 'center', xl: 'flex-start' }}
                            position='relative'
                            maxW={{ xl: 'calc(1920px - 256px - 24px)' }}
                        >
                            <VStack
                                as='main'
                                w={{
                                    xl: 'calc(880px + (1360 - 880) * ((100vw - 1440px) / (1920 - 1440)))',
                                }}
                                minW={{ xl: '880px' }}
                            >
                                <Box as='section' px={{ base: '0px', md: '0px', xl: '0' }}>
                                    <SearchForm2></SearchForm2>
                                </Box>
                                <Box
                                    w={{ xl: '100%' }}
                                    maxW={{ xl: '1360px' }}
                                    overflow={{ base: 'hidden', xl: 'visible' }}
                                    px={{ base: '16px', md: '0', '2xl': '2px' }}
                                >
                                    <Box
                                        w={{ xl: '100%' }}
                                        maxW={{ xl: 'calc(100vw - 360px - 208px - 24px)' }}
                                        h={{ base: 'auto' }}
                                        display={
                                            isSearchStarted && isSearchSuccessful === true
                                                ? { base: 'none' }
                                                : '""'
                                        }
                                    >
                                        <Tabs></Tabs>
                                    </Box>

                                    <Box
                                        w={{ xl: '100%' }}
                                        maxW={{ xl: '1360px' }}
                                        overflow={{ base: 'hidden', xl: 'visible' }}
                                        px={{ base: '16px', md: '0', '2xl': '2px' }}
                                        display={
                                            isSearchStarted && isSearchSuccessful === true
                                                ? { base: 'none' }
                                                : '""'
                                        }
                                        mt={{ base: '24px', xl: '48px' }}
                                    >
                                        <ContentRecipeDefault></ContentRecipeDefault>
                                    </Box>
                                    <Box
                                        w={{ xl: '100%' }}
                                        maxW={{ xl: '1360px' }}
                                        overflow={{ base: 'hidden', xl: 'visible' }}
                                        px={{ base: '16px', md: '0', '2xl': '2px' }}
                                        display={
                                            isSearchStarted && isSearchSuccessful === true
                                                ? { base: '""' }
                                                : 'none'
                                        }
                                        mt={{ base: '24px', xl: '48px' }}
                                    ></Box>
                                    <Box
                                        as='section'
                                        overflow={{
                                            base: 'hidden',
                                            xl: 'hidden',
                                            '2xl': 'visible',
                                        }}
                                        display={
                                            isSearchStarted && isSearchSuccessful === true
                                                ? { base: 'none' }
                                                : '""'
                                        }
                                    >
                                        <Slider></Slider>
                                    </Box>
                                    <Box
                                        as='section'
                                        display={
                                            isSearchStarted && isSearchSuccessful === true
                                                ? { base: '""' }
                                                : 'none'
                                        }
                                    >
                                        <ContentRecipe></ContentRecipe>
                                    </Box>
                                    <Box as='section' mt='120px'>
                                        <VeganKitchen></VeganKitchen>
                                    </Box>
                                </Box>
                            </VStack>
                        </HStack>
                    </GridItem>
                    <GridItem>
                        <Show above='xl'>
                            <Box minW='208px' pl='48px' pt='22px' position='fixed'>
                                <MetricsDesktop />
                            </Box>
                            <Box minW='208px' position='fixed' bottom='1px' pl='5px'>
                                <AddRecipe></AddRecipe>
                            </Box>
                        </Show>
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
}
