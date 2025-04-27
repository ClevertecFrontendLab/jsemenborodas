import { Box, Grid, GridItem, HStack, Show, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { FilterContentRecipe } from '~/components/widgets/contentRecipe/filterConentRecipe';
import { FilterContentRecipeSearch } from '~/components/widgets/contentRecipe/filterConentRecipeSearch';
import { Filter } from '~/components/widgets/Filter/Filter';

import { AddRecipe } from '../../widgets/addRecipe/AddRecipe';
import { MetricsDesktop } from '../../widgets/metricsDesktop/MetricsDesktop';
import { NavMenu } from '../../widgets/navMenu/NavMenu';
import { SearchForm2 } from '../../widgets/searchForm/SearchForm2';

interface PageMenuProps {
    isBurgerOpen: boolean;
    isFilterHidden: boolean;
    setIsFilterHidden: (value: boolean) => void;
    selectedFilterCategory: { id: number; title: string; name: string }[];
}

const scrollController = {
    disabledScroll() {
        document.body.style.overflow = 'hidden';
    },
    enabledScroll() {
        document.body.style.overflow = 'auto';
    },
};

export function FilteredPage({
    isBurgerOpen,
    isFilterHidden,
    setIsFilterHidden,
    selectedFilterCategory,
}: PageMenuProps) {
    const location = useLocation();
    const {
        selectedMeatTypes = [],
        selectedSideDishTypes = [],
        selectedFilterAuthor = [],
        defaultAllergen = [],
        inputValue = [],
    } = location.state || {};

    const [meatTypes, setMeatTypes] = useState<string[]>(selectedMeatTypes);
    const [sideDishes, setSideDishes] = useState<string[]>(selectedSideDishTypes);
    const [categories, setCategories] =
        useState<{ id: number; title: string; name: string }[]>(selectedFilterCategory);
    const [authors, setAuthors] = useState<string[]>(selectedFilterAuthor);
    const [customAllergen, setCustomAllergen] = useState<string[]>(defaultAllergen);
    const [isSearchStarted, setIsSearchStarted] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
    const [isAuthorMenuOpen, setIsAuthorMenuOpen] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);
    useEffect(() => {
        if (isBurgerOpen || !isFilterHidden) {
            scrollController.disabledScroll();
        } else {
            scrollController.enabledScroll();
        }
    }, [isBurgerOpen, isFilterHidden]);

    return (
        <>
            <Box as='section'>
                <Filter
                    isFilterHidden={isFilterHidden}
                    isCategoryMenuOpen={isCategoryMenuOpen}
                    isAuthorMenuOpen={isAuthorMenuOpen}
                    setIsFilterHidden={setIsFilterHidden}
                    setSelectedMeatTypes={setMeatTypes}
                    setSelectedSideDishTypes={setSideDishes}
                    setSelectedFilterCategory={setCategories}
                    setSelectedFilterAuthor={setAuthors}
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
                bg={isBurgerOpen || isFilterHidden === false ? 'transparent' : ''}
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
                                            searchValue={
                                                inputValue.length > 3 ? inputValue : searchValue
                                            }
                                            setSearchValue={setSearchValue}
                                            selectedItems={selectedItems}
                                            setSelectedItems={setSelectedItems}
                                            customAllergen={customAllergen}
                                            setCustomAllergen={setCustomAllergen}
                                            isDisabled={isDisabled}
                                            setIsDisabled={setIsDisabled}
                                            isFilterHidden={isFilterHidden}
                                            setIsFilterHidden={setIsFilterHidden}
                                            selectedFilterCategory={selectedFilterCategory}
                                            isSuccessful={isSuccessful}
                                        ></SearchForm2>
                                    </Box>
                                    <Box
                                        as='section'
                                        display={isSearchStarted ? 'none' : '""'}
                                        px={{ base: '16px' }}
                                    >
                                        <FilterContentRecipe
                                            selectedItems={selectedItems}
                                            meatTypes={meatTypes}
                                            sideDishes={sideDishes}
                                            isDisabled={isDisabled}
                                            categories={categories}
                                            authors={authors}
                                            isSearchStarted={isSearchStarted}
                                            defaultAllergen={defaultAllergen}
                                        ></FilterContentRecipe>
                                    </Box>
                                    <Box as='section' display={isSearchStarted ? '""' : 'none'}>
                                        <FilterContentRecipeSearch
                                            searchValue={searchValue}
                                            selectedItems={selectedItems}
                                            customAllergen={customAllergen}
                                            defaultAllergen={defaultAllergen}
                                            isDisabled={isDisabled}
                                            meatTypes={meatTypes}
                                            sideDishes={sideDishes}
                                            categories={categories}
                                            authors={authors}
                                            isSearchStarted={isSearchStarted}
                                            setIsSuccessful={setIsSuccessful}
                                        ></FilterContentRecipeSearch>
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
