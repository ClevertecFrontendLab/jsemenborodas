import {
    Box,
    Button,
    Checkbox,
    CheckboxGroup,
    Heading,
    HStack,
    Icon,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Switch,
    Text,
    VStack,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { useRef, useState } from 'react';

import { searchFormFiltersData } from '~/components/entities/Data/searchFormFiltersData';
import { ExitFilter, Plus } from '~/icons/Icon';
import { useGetCategoriesQuery } from '~/query/services/categories';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import {
    addAllergenOnFilter,
    addAuthorOnFilter,
    addCategoryOnFilter,
    addFilterOnFilter,
    addGarnishOnFilter,
    addMeatOnFilter,
    removeAllergenOnFilter,
    removeAuthorsOnFilter,
    removeCategoryOnFilter,
    removeFilterOnFilter,
    removeGarnishOnFilter,
    removeMeatOnFilter,
    resetSearchStateOnFilter,
    selectAllergensOnFilter,
    selectAllFiltersOnFilter,
    selectAuthorsOnFilter,
    selectCategoriesOnFilter,
    selectGarnishOnFilter,
    selectMeatOnFilter,
    setAllergensOnFilter,
} from '~/store/reducers/filter';
import { selectorIsFilterOpen, setIsFilterOpen } from '~/store/reducers/open';
import {
    selectEliminateAllergens,
    setAllergens,
    setAuthors,
    setCategories,
    setGarnish,
    setIsEliminatAllergensActivated,
    setIsSearchStarted,
    setMeat,
} from '~/store/reducers/search';

import { authorMockData } from './assets/authorMockData';
import { garnishMockData } from './assets/garnishMockData';
import { meatMockData } from './assets/meatMockData';

export function Filter() {
    const dispatch = useAppDispatch();

    const categories = useAppSelector(selectCategoriesOnFilter);
    const authors = useAppSelector(selectAuthorsOnFilter);
    const meat = useAppSelector(selectMeatOnFilter);
    const garnish = useAppSelector(selectGarnishOnFilter);
    const allergens = useAppSelector(selectAllergensOnFilter);
    const isEliminateAllergensOn = useAppSelector(selectEliminateAllergens);
    const allFilters = useAppSelector(selectAllFiltersOnFilter);
    const isFilterOpen = useAppSelector(selectorIsFilterOpen);

    const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState<boolean>(false);
    const [isAuthorMenuOpen, setIsAuthorMenuOpen] = useState<boolean>(false);
    const [isAllergenMenuOpen, setIsAllergenMenuOpen] = useState<boolean>(false);
    const [localAllergens, setLocalAllergens] = useState<string[]>([]);

    // const [allFilters, setAllFilters] = useState<string[]>([]);

    const { data: catData } = useGetCategoriesQuery({});

    const inputRef = useRef<HTMLInputElement>(null);

    const handleCategories = (category: string) => {
        if (categories?.includes(category)) {
            dispatch(removeCategoryOnFilter(category));
            console.log(categories);
        } else {
            dispatch(addCategoryOnFilter(category));
            console.log(categories);
        }
    };
    const handleAuthors = (author: string) => {
        if (authors?.includes(author)) {
            dispatch(removeAuthorsOnFilter(author));
        } else {
            dispatch(addAuthorOnFilter(author));
        }
    };

    const handleMeat = (m: string) => {
        if (meat?.includes(m)) {
            dispatch(removeMeatOnFilter(m));
        } else {
            dispatch(addMeatOnFilter(m));
        }
    };

    const handleGarnish = (g: string) => {
        if (garnish?.includes(g)) {
            dispatch(removeGarnishOnFilter(g));
        } else {
            dispatch(addGarnishOnFilter(g));
        }
    };

    const handleAllergens = (allergen: string) => {
        if (allergen === 'Томат (помидор)') {
            allergen = 'Томат';
        } else if (allergen === 'Клубника (ягоды)') {
            allergen = 'Клубника';
        }
        if (allergens?.includes(allergen)) {
            dispatch(removeAllergenOnFilter(allergen));
        } else {
            dispatch(addAllergenOnFilter(allergen));
            console.log(allergen);
        }
    };
    const handleSwitch = () => {
        if (isEliminateAllergensOn) {
            setLocalAllergens(allergens ? allergens : []);
            dispatch(setAllergensOnFilter([]));
            console.log('allergen placed:');
            console.log(allergens);
        } else {
            dispatch(setAllergensOnFilter(localAllergens));
            setLocalAllergens([]);
            console.log('allergenssetted:');
            console.log(allergens);
        }
    };

    const handleAllFilters = (item: string) => {
        if (allFilters?.includes(item)) {
            dispatch(removeFilterOnFilter(item));
        } else {
            dispatch(addFilterOnFilter(item));
        }
    };

    const resetFilters = () => {
        dispatch(resetSearchStateOnFilter());
    };

    const handleFindRecipe = () => {
        categories ? dispatch(setCategories(categories)) : '';
        meat ? dispatch(setMeat(meat)) : '';
        garnish ? dispatch(setGarnish(garnish)) : '';
        authors ? dispatch(setAuthors(authors)) : '';
        allergens ? dispatch(setAllergens(allergens)) : '';
        dispatch(setIsSearchStarted(true));
        dispatch(setIsFilterOpen());
        resetFilters();
    };

    const handleEliminate = () => {
        dispatch(setIsEliminatAllergensActivated());
    };
    const handleFilterChange = () => {
        dispatch(setIsFilterOpen());
    };

    // if (categories?.length) {
    //     categories.map((cat) => handleAllFilters(cat));
    // } else if(authors?.length) {
    //     authors?.length
    // }

    return (
        <Box
            position='fixed'
            h='100vh'
            bg='white'
            top='0'
            right='0'
            zIndex='9999'
            overflow='hidden'
            w={{ base: '344px', xl: '463px' }}
            minW={0}
            data-test-id={!isFilterOpen ? '' : 'filter-drawer'}
        >
            <Box
                maxH='calc(100vh - 100px)'
                minH='calc(100vh - 100px)'
                overflowY='auto'
                pt={{ xl: '16px' }}
                pl={{ xl: '16px' }}
                position='relative'
                zIndex='2222'
                minW={0}
            >
                {/* Heading plus exit button */}
                <HStack p={0} justifyContent='space-between' pl='16px' pr='28px' pt='16px'>
                    <Box w='fit-content'>
                        <Heading
                            fontFamily='Inter'
                            fontWeight={700}
                            fontSize={{ base: '24px' }}
                            lineHeight={{ base: '32px' }}
                            letterSpacing='0.5px'
                        >
                            Фильтр
                        </Heading>
                    </Box>
                    <Box
                        pt='4px'
                        pr={{ xl: '4px' }}
                        onClick={handleFilterChange}
                        data-test-id='close-filter-drawer'
                    >
                        <Icon as={ExitFilter} w='24px' h='24px' />
                    </Box>
                </HStack>
                {/* Category choice */}
                <Box
                    pl={{ base: '15px' }}
                    pr={{ base: '20px', xl: '32px' }}
                    mt={{ base: '30px', xl: '40px' }}
                >
                    <Menu
                        closeOnSelect={false}
                        onOpen={() => setIsCategoryMenuOpen(true)}
                        onClose={() => setIsCategoryMenuOpen(false)}
                        // onClose={() => setIsCategoryMenuOpen(false)}
                    >
                        <MenuButton
                            textAlign='left'
                            w='100%'
                            border='1px solid #00000014'
                            borderRadius='6px'
                            data-test-id='filter-menu-button-категория'
                        >
                            <HStack p='8px 12px 7px 16px' justifyContent='space-between'>
                                <HStack h='auto' flexWrap='wrap'>
                                    {categories && categories.length ? (
                                        categories.map((cat) => (
                                            <Box
                                                lineHeight='16px'
                                                fontSize='12px'
                                                fontWeight={500}
                                                fontFamily='Inter'
                                                color='#2DB100'
                                                border='1px solid #B1FF2E'
                                                borderRadius='6px'
                                                h='24px'
                                                px={2}
                                                py='2px'
                                            >
                                                <Text
                                                    fontFamily='Inter'
                                                    fontWeight={400}
                                                    fontSize='16px'
                                                    color='#000000A3'
                                                >
                                                    {cat}
                                                </Text>
                                            </Box>
                                        ))
                                    ) : (
                                        <Text
                                            fontFamily='Inter'
                                            fontWeight={400}
                                            fontSize='16px'
                                            lineHeight='24px'
                                            color='#000000A3'
                                        >
                                            Категория
                                        </Text>
                                    )}
                                </HStack>
                                <Image
                                    src='/src/components/shared/images/icons/arrowDown.png'
                                    display={isCategoryMenuOpen ? 'none' : ''}
                                />
                                <Image
                                    src='/src/components/shared/images/icons/arrowUp.png'
                                    display={isCategoryMenuOpen ? '' : 'none'}
                                />
                            </HStack>
                        </MenuButton>
                        <MenuList
                            w={{ base: '308px', xl: '399px' }}
                            h={{ base: '350px' }}
                            overflowY='scroll'
                        >
                            {catData &&
                                catData
                                    ?.filter((cat) => cat.subCategories !== undefined)
                                    .map((item, index) => (
                                        <MenuItem bg={index % 2 === 0 ? '#0000000F' : '#FFFFFF'}>
                                            <Checkbox
                                                isChecked={categories?.includes(item.title)}
                                                onChange={() => {
                                                    handleCategories(item.title);
                                                    handleAllFilters(item.title);
                                                }}
                                            >
                                                <Text
                                                    data-test-id={
                                                        item.category === 'vegan'
                                                            ? 'checkbox-веганская кухня'
                                                            : ''
                                                    }
                                                >
                                                    {item.title}
                                                </Text>
                                            </Checkbox>
                                        </MenuItem>
                                    ))}
                        </MenuList>
                    </Menu>
                </Box>
                {/* Search by Author */}
                <Box
                    pl={{ base: '15px' }}
                    pr={{ base: '20px', xl: '32px' }}
                    mt={{ base: '16px', xl: '23px' }}
                >
                    <Menu
                        closeOnSelect={false}
                        onOpen={() => setIsAuthorMenuOpen(true)}
                        onClose={() => setIsAuthorMenuOpen(false)}
                    >
                        <MenuButton
                            textAlign='left'
                            w='100%'
                            border='1px solid #00000014'
                            borderRadius='6px'
                        >
                            <HStack p='8px 12px 7px 16px' justifyContent='space-between'>
                                <HStack h='auto' flexWrap='wrap'>
                                    {authors?.length ? (
                                        authors.map((author) => (
                                            <Box
                                                lineHeight='16px'
                                                fontSize='12px'
                                                fontWeight={500}
                                                fontFamily='Inter'
                                                color='#2DB100'
                                                border='1px solid #B1FF2E'
                                                borderRadius='6px'
                                                h='24px'
                                                px={2}
                                                py='2px'
                                            >
                                                <Text
                                                    fontFamily='Inter'
                                                    fontWeight={400}
                                                    fontSize='16px'
                                                    color='#000000A3'
                                                >
                                                    {author}
                                                </Text>
                                            </Box>
                                        ))
                                    ) : (
                                        <Text
                                            fontFamily='Inter'
                                            fontWeight={400}
                                            fontSize='16px'
                                            lineHeight='24px'
                                            color='#000000A3'
                                        >
                                            Поиск по автору
                                        </Text>
                                    )}
                                </HStack>
                                <Image
                                    src='/src/components/shared/images/icons/arrowDown.png'
                                    display={isAuthorMenuOpen ? 'none' : ''}
                                />
                                <Image
                                    src='/src/components/shared/images/icons/arrowUp.png'
                                    display={isAuthorMenuOpen ? '' : 'none'}
                                />
                            </HStack>
                        </MenuButton>
                        <MenuList w={{ base: '308px', xl: '399px' }}>
                            {authorMockData.map((item, index) => (
                                <MenuItem
                                    bg={index % 2 === 0 ? '#0000000F' : '#FFFFFF'}
                                    onChange={() => {
                                        handleAuthors(item.title);
                                        handleAllFilters(item.title);
                                    }}
                                >
                                    <Checkbox
                                        isChecked={authors?.includes(item.title)}
                                        // value={item.authorName}
                                        // onChange={() => {
                                        //     handleAuthorCheckboxChange(item.authorName);
                                        //     toggleItemSelection(item.authorName);
                                        // }}
                                    >
                                        {item.title}
                                    </Checkbox>
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </Box>
                {/* Type of Meat */}
                <Box pl='16px' pr='20px' mt={{ base: '15px', xl: '24px' }}>
                    <Text
                        fontFamily='Inter'
                        fontWeight={500}
                        fontSize='16px'
                        lineHeight='24px'
                        textAlign='left'
                        mb='8px'
                    >
                        Тип мяса:
                    </Text>
                    <CheckboxGroup
                    // value={localSelectedMeatTypes?.map((meat) => meat?.title) || []}
                    // onChange={() => toggleMeat}
                    >
                        <VStack alignItems='flex-start'>
                            {meatMockData?.map((item) => (
                                <Checkbox
                                    isChecked={meat?.includes(item.title)}
                                    onChange={() => {
                                        handleMeat(item.title);
                                        handleAllFilters(item.title);
                                    }}
                                >
                                    {item.title}
                                </Checkbox>
                            ))}
                        </VStack>
                    </CheckboxGroup>
                </Box>
                {/* Type of side-dish */}
                <Box pl='16px' pr='20px' mt={{ base: '15px', xl: '24px' }}>
                    <Text
                        fontFamily='Inter'
                        fontWeight={500}
                        fontSize='16px'
                        lineHeight='24px'
                        textAlign='left'
                        mb='8px'
                    >
                        Тип гарнира:
                    </Text>
                    <CheckboxGroup>
                        <VStack alignItems='flex-start'>
                            {garnishMockData.map((item) => (
                                <Checkbox
                                    onChange={() => {
                                        handleGarnish(item.title);
                                        handleAllFilters(item.title);
                                    }}
                                    isChecked={garnish?.includes(item.title)}
                                >
                                    <Text
                                        data-test-id={
                                            item.title === 'Картошка' ? 'checkbox-картошка' : ''
                                        }
                                    >
                                        {item.title}
                                    </Text>
                                </Checkbox>
                            ))}
                        </VStack>
                    </CheckboxGroup>
                </Box>
                {/* Eliminate Allergens Element */}
                <Box pl='16px' pr='32px' mt={{ base: '23px', xl: '28px' }}>
                    <HStack ml='8px' spacing='14px'>
                        <Text fontSize='16px' fontFamily='Inter' lineHeight='24px' fontWeight='500'>
                            Исключить аллергены
                        </Text>
                        <Switch
                            isChecked={isEliminateAllergensOn}
                            onChange={() => {
                                handleEliminate();
                                handleSwitch();
                            }}
                            data-test-id='allergens-switcher-filter'
                        />
                    </HStack>
                    <Menu
                        closeOnSelect={false}
                        onOpen={() => setIsAllergenMenuOpen(true)}
                        onClose={() => setIsAllergenMenuOpen(false)}
                    >
                        <MenuButton
                            w='100%'
                            h='auto'
                            border='1px solid #00000014'
                            p='8px 12px 8px 16px'
                            borderRadius='6px'
                            mt='14px'
                            disabled={!isEliminateAllergensOn}
                            data-test-id='allergens-menu-button-filter'
                        >
                            <HStack justifyContent='space-between' h='auto'>
                                <HStack flexWrap='wrap'>
                                    {allFilters && allFilters.length > 0 ? (
                                        allFilters.map((item) => (
                                            <Box
                                                data-test-id='filter-tag'
                                                lineHeight='16px'
                                                fontSize='12px'
                                                fontWeight={500}
                                                fontFamily='Inter'
                                                color='#2DB100'
                                                border='1px solid #B1FF2E'
                                                borderRadius='6px'
                                                px={2}
                                            >
                                                {item}
                                            </Box>
                                        ))
                                    ) : (
                                        <Text
                                            color='#000000A3'
                                            fontFamily='Inter'
                                            fontWeight={400}
                                            fontSize='16px'
                                            lineHeight='24px'
                                        >
                                            Выберите из списка аллергенов...
                                        </Text>
                                    )}
                                </HStack>
                                <Image
                                    src='/src/components/shared/images/icons/arrowDown.png'
                                    display={isAllergenMenuOpen ? 'none' : ''}
                                />
                                <Image
                                    src='/src/components/shared/images/icons/arrowUp.png'
                                    display={isAllergenMenuOpen ? '' : 'none'}
                                />
                            </HStack>
                        </MenuButton>
                        <MenuList borderRadius={0} p={0} w='269px'>
                            {searchFormFiltersData.map((item, index) => (
                                <MenuItem bg={index % 2 === 0 ? '#0000000F' : '#FFFFFF'}>
                                    <Checkbox
                                        w='100%'
                                        isChecked={
                                            allergens?.includes(item.title) ||
                                            allergens?.includes(item.displayTitle)
                                                ? true
                                                : false
                                        }
                                        onChange={() => {
                                            handleAllergens(item.title);
                                            if (item.title === 'Томат (помидор)') {
                                                handleAllFilters('Томат');
                                            } else if (item.title === 'Клубника (ягоды)') {
                                                handleAllFilters('Клубника');
                                            } else {
                                                handleAllFilters(item.title);
                                            }
                                        }}
                                    >
                                        <Text
                                            data-test-id={!isFilterOpen ? '' : `allergen-${index}`}
                                        >
                                            {item.title}
                                        </Text>
                                    </Checkbox>
                                </MenuItem>
                            ))}
                            <HStack ml='24px' spacing='8px'>
                                <Input
                                    my='8px'
                                    w='205px'
                                    data-test-id={!isFilterOpen ? '' : 'add-other-allergen'}
                                    ref={inputRef}
                                    onKeyDown={(e) => {
                                        if (
                                            e.key === 'Enter' &&
                                            inputRef.current &&
                                            inputRef.current.value.length
                                        ) {
                                            handleAllergens(inputRef.current.value);
                                            handleAllFilters(inputRef.current.value);
                                        }
                                    }}
                                />
                                <Button
                                    bg='transparent'
                                    border='none'
                                    shadow='none'
                                    _hover={{ bg: 'transparent' }}
                                    p={0}
                                    onClick={() => {
                                        if (inputRef.current && inputRef.current.value.length) {
                                            handleAllergens(inputRef.current.value);
                                            handleAllFilters(inputRef.current.value);
                                        }
                                    }}
                                    data-test-id={!isFilterOpen ? '' : 'add-allergen-button'}
                                >
                                    <Icon as={Plus} />
                                </Button>
                            </HStack>
                        </MenuList>
                    </Menu>
                </Box>

                {/* Tags */}
                <Box pl='16px' pr='20px' position='fixed' bottom='111px' bg='white'>
                    <HStack flexWrap='wrap' spacing='14px'>
                        {/* {allFilterFilters.map((item) => ( */}
                        {/* <Box
                            lineHeight='16px'
                            fontSize='14px'
                            fontWeight={500}
                            fontFamily='Inter'
                            color='#2DB100'
                            border='1px solid #B1FF2E'
                            bg='#EAFFC7'
                            borderRadius='6px'
                            px={2}
                            py={1}
                        > */}
                        {/* <HStack>
                                {/* <Text>{item}</Text> */}
                        {/* <Icon as={ExitButtonIcon} w='10px' h='10px' /> */}
                        {/* </HStack> */}
                        {/* </Box> */}
                        {/* ))} */}
                    </HStack>
                </Box>
                {/* Buttons */}
                <Box
                    pl={{ base: '48px', xl: '30px' }}
                    pr='20px'
                    position='fixed'
                    bottom={{ base: '0', xl: '32px' }}
                    bg='white'
                    w='100%'
                    h='48px'
                >
                    <HStack spacing={2}>
                        {/* Clear Filter Button */}
                        <Button
                            w={{ base: '146px', xl: '205px' }}
                            h={{ base: '32px', xl: '48px' }}
                            borderRadius='6px'
                            px={{ base: '12px', xl: '24px' }}
                            border='1px solid #0000007A'
                            bg='transparent'
                            onClick={() => {
                                resetFilters();
                            }}
                            // onClick={() => {
                            //     setLocalSelectedFilterAuthor([]);
                            //     setLocalSelectedFilterCategory([]);
                            //     setDefaultAllergen([]);
                            //     setAllFilterFilters([]);
                            //     setLocalSelectedMeatTypes([]);
                            //     setLocalSelectedSideDishTypes([]);
                            //     setSelectedItems([]);
                            // }}
                            data-test-id={!isFilterOpen ? '' : 'clear-filter-button'}
                        >
                            <Text
                                color='#000000CC'
                                fontFamily='Inter'
                                fontWeight={600}
                                fontSize={{ base: '14px', xl: '18px' }}
                                lineHeight={{ base: '20px', xl: '28px' }}
                            >
                                Очистить фильтр
                            </Text>
                        </Button>
                        {/* Find Recipe Button */}
                        <Button
                            w={{ base: '121px', xl: '172px' }}
                            h={{ base: '32px', xl: '48px' }}
                            borderRadius='6px'
                            px={{ base: '12px', xl: '24px' }}
                            border='1px solid #00000014'
                            bg='#000000EB'
                            _hover={{ bg: '#000000EB' }}
                            // isDisabled={
                            //     localSelectedFilterCategory.length === 0 &&
                            //     localSelectedFilterAuthor.length === 0 &&
                            //     localSelectedMeatTypes.length === 0 &&
                            //     localSelectedSideDishTypes.length === 0 &&
                            //     defaultAllergen.length === 0
                            // }
                            data-test-id='find-recipe-button'
                            onClick={handleFindRecipe}
                            isDisabled={!allFilters?.length}
                            sx={{
                                _disabled: {
                                    bg: '#0000003D',
                                    color: '#FFFFFFA3',
                                    cursor: 'default',
                                    pointerEvents: 'none',
                                },
                            }}
                        >
                            <Text
                                color='#FFFFFF'
                                fontFamily='Inter'
                                fontWeight={600}
                                fontSize={{ base: '14px', xl: '18px' }}
                                lineHeight={{ base: '20px', xl: '28px' }}
                            >
                                Найти рецепт
                            </Text>
                        </Button>
                    </HStack>
                </Box>
            </Box>
            <Box
                position='fixed'
                top='0'
                bottom='0'
                left='0'
                right={{ base: '344px', xl: '463px' }}
                bg='rgba(0, 0, 0, 0.16)'
                onClick={handleFilterChange}
            ></Box>
        </Box>
    );
}
