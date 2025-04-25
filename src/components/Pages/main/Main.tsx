import { Box, Grid, GridItem, HStack, Show, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { ContentRecipe } from '~/components/widgets/contentRecipe/contentRecipe';
import { Filter } from '~/components/widgets/Filter/Filter';
import { Juciest } from '~/components/widgets/juciest/Juciest';
import { Slider } from '~/components/widgets/slider/Slider';

import { AddRecipe } from '../../widgets/addRecipe/AddRecipe';
import { CookBlog } from '../../widgets/cookBlog/cookBlog';
import { MetricsDesktop } from '../../widgets/metricsDesktop/MetricsDesktop';
import { NavMenu } from '../../widgets/navMenu/NavMenu';
import { SearchForm2 } from '../../widgets/searchForm/SearchForm2';
import { VeganKitchen } from '../../widgets/veganKitchen/veganKitchen';

interface PageMenuProps {
    isBurgerOpen: boolean;
    isFilterHidden: boolean;
    setIsFilterHidden: (value: boolean) => void;
}

const scrollController = {
    disabledScroll() {
        document.body.style.overflow = 'hidden';
    },
    enabledScroll() {
        document.body.style.overflow = 'auto';
    },
};

export function Main({ isBurgerOpen, isFilterHidden, setIsFilterHidden }: PageMenuProps) {
    useEffect(() => {
        if (isBurgerOpen || isFilterHidden === false) {
            scrollController.disabledScroll();
        } else {
            scrollController.enabledScroll();
        }
    });
    const [isSearchStarted, setIsSearchStarted] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [customAllergen, setCustomAllergen] = useState<string[]>([]);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [isDisabled, setIsDisabled] = useState(true);
    const [selectedMeatTypes, setSelectedMeatTypes] = useState<string[]>([]);
    const [selectedSideDishTypes, setSelectedSideDishTypes] = useState<string[]>([]);
    const [selectedFilterCategory, setSelectedFilterCategory] = useState<string[]>([]);
    const [selectedFilterAuthor, setSelectedFilterAuthor] = useState<string[]>([]);
    const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
    const [isAuthorMenuOpen, setIsAuthorMenuOpen] = useState(false);
    return (
        <>
            <Box as='section'>
                <Filter
                    isFilterHidden={isFilterHidden}
                    selectedMeatTypes={selectedMeatTypes}
                    selectedSideDishTypes={selectedSideDishTypes}
                    selectedFilterCategory={selectedFilterCategory}
                    selectedFilterAuthor={selectedFilterAuthor}
                    isCategoryMenuOpen={isCategoryMenuOpen}
                    isAuthorMenuOpen={isAuthorMenuOpen}
                    setIsFilterHidden={setIsFilterHidden}
                    setSelectedMeatTypes={setSelectedMeatTypes}
                    setSelectedSideDishTypes={setSelectedSideDishTypes}
                    setSelectedFilterCategory={setSelectedFilterCategory}
                    setSelectedFilterAuthor={setSelectedFilterAuthor}
                    setIsCategoryMenuOpen={setIsCategoryMenuOpen}
                    setIsAuthorMenuOpen={setIsAuthorMenuOpen}
                ></Filter>
            </Box>
            <Box
                as='article'
                w='100%'
                maxW={{ sm: '100vw' }}
                p={0}
                mt={{ base: '64px', sm: '62px', xl: '80px' }}
                position='relative'
                filter={isBurgerOpen || isFilterHidden === false ? 'blur(4px)' : ''}
                bg={isBurgerOpen || isFilterHidden === false ? 'rgba(0, 0, 0, 0.16)' : ''}
            >
                <Grid
                    templateColumns={{ xl: '256px auto 208px' }}
                    maxW='100vw'
                    gap={{ xl: '24px' }}
                    overflow='hidden'
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
                                    <SearchForm2
                                        setIsSearchStarted={setIsSearchStarted}
                                        searchValue={searchValue}
                                        setSearchValue={setSearchValue}
                                        selectedItems={selectedItems}
                                        setSelectedItems={setSelectedItems}
                                        customAllergen={customAllergen}
                                        setCustomAllergen={setCustomAllergen}
                                        isDisabled={isDisabled}
                                        setIsDisabled={setIsDisabled}
                                        isFilterHidden={isFilterHidden}
                                        setIsFilterHidden={setIsFilterHidden}
                                    ></SearchForm2>
                                </Box>
                                <Box
                                    w={{ xl: '100%' }}
                                    maxW={{ xl: '1360px' }}
                                    overflow={{ base: 'hidden', xl: 'visible' }}
                                    px={{ base: '16px', md: '0', '2xl': '2px' }}
                                    display={isSearchStarted === true ? { base: 'none' } : '""'}
                                >
                                    <Box
                                        as='section'
                                        overflow={{
                                            base: 'hidden',
                                            xl: 'hidden',
                                            '2xl': 'visible',
                                        }}
                                    >
                                        {/* <NewRecipe></NewRecipe> */}
                                        <Slider></Slider>
                                    </Box>
                                    <Box
                                        as='section'
                                        overflow={{ base: 'hidden', xl: 'visible' }}
                                        mt={{ xl: '24px', '2xl': '10px' }}
                                    >
                                        <Juciest></Juciest>
                                    </Box>
                                    <Box as='section' overflow='hidden'>
                                        <CookBlog isBurgerOpen={isBurgerOpen}></CookBlog>
                                    </Box>
                                    <Box
                                        as='section'
                                        overflow='hidden'
                                        pr={{ base: '32px', xl: '0' }}
                                    >
                                        <VeganKitchen></VeganKitchen>
                                    </Box>
                                </Box>
                                <Box
                                    w={{ xl: '100%' }}
                                    maxW={{ xl: '1360px' }}
                                    overflow={{ base: 'hidden', xl: 'visible' }}
                                    px={{ base: '16px', md: '0', '2xl': '2px' }}
                                    display={isSearchStarted === true ? { base: '""' } : 'none'}
                                    mt={{ base: '24px', xl: '48px' }}
                                >
                                    <ContentRecipe
                                        searchValue={searchValue}
                                        selectedItems={selectedItems}
                                        customAllergen={customAllergen}
                                        isDisabled={isDisabled}
                                    ></ContentRecipe>
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
