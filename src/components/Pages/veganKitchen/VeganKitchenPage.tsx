import { Box, Grid, GridItem, HStack, Show, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { ContentRecipe } from '~/components/widgets/contentRecipe/contentRecipe';
import { ContentRecipeDefault } from '~/components/widgets/contentRecipe/contentRecipeDefault';
import { Filter } from '~/components/widgets/Filter/Filter';
import { Tabs } from '~/components/widgets/tabs/Tabs';
import { VeganKitchen } from '~/components/widgets/veganKitchen/veganKitchen';

import { AddRecipe } from '../../widgets/addRecipe/AddRecipe';
import { MetricsDesktop } from '../../widgets/metricsDesktop/MetricsDesktop';
import { NavMenu } from '../../widgets/navMenu/NavMenu';
import { SearchForm2 } from '../../widgets/searchForm/SearchForm2';

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

export function VeganKitchenPage({
    isBurgerOpen,
    isFilterHidden,
    setIsFilterHidden,
}: PageMenuProps) {
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
                filter={isBurgerOpen || isFilterHidden === false ? 'blur(2px)' : ''}
                bg={isBurgerOpen || isFilterHidden === false ? 'rgba(0, 0, 0, 0.16)' : ''}
            >
                <Grid
                    templateColumns={{ xl: '256px auto 208px' }}
                    maxW='100vw'
                    gap={{ xl: '24px' }}
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
                            px={{ md: '0px', xl: '0' }}
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
                                <Box as='section' maxW='100vw'>
                                    <Box
                                        px={{ base: '16px', md: '20px', xl: '0px' }}
                                        pt={{ md: '2px', xl: '0px' }}
                                    >
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
                                        maxW={{ xl: 'calc(100vw - 360px - 208px - 24px)' }}
                                        h={{ base: '30px' }}
                                        mb='64px'
                                        display={isSearchStarted === true ? { base: 'none' } : '""'}
                                    >
                                        <Tabs></Tabs>
                                    </Box>
                                    <Box
                                        as='section'
                                        ml={{ base: '16px', md: '18px', xl: 0, '2xl': '1px' }}
                                        flexDirection='column'
                                        alignItems='center'
                                        mt={{ base: '24px', md: '25px', xl: '30px', '2xl': '24px' }}
                                        pr={{ base: '16px', md: '18px', xl: 0 }}
                                        display={
                                            isSearchStarted === true ? { base: 'none' } : 'flex'
                                        }
                                    >
                                        <ContentRecipeDefault
                                            selectedItems={selectedItems}
                                            customAllergen={customAllergen}
                                            isDisabled={isDisabled}
                                        ></ContentRecipeDefault>
                                    </Box>
                                    <Box
                                        pl={{ base: '16px', xl: 0 }}
                                        pr={{ base: '16px', xl: '0' }}
                                        display={isSearchStarted === true ? { base: 'none' } : '""'}
                                    >
                                        <VeganKitchen></VeganKitchen>
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
                                </Box>
                                <Box
                                    w={{ xl: '100%' }}
                                    maxW={{ xl: '1360px' }}
                                    overflow='hidden'
                                ></Box>
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
