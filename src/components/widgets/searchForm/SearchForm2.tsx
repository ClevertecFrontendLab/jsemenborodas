import {
    Box,
    Button,
    Checkbox,
    Heading,
    HStack,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Portal,
    Show,
    Switch,
    VStack,
} from '@chakra-ui/react';
import { Image, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';

import { searchFormFiltersData } from '~/components/entities/Data/searchFormFiltersData';
import { Plus } from '~/icons/Icon';
import { Filter, Search } from '~/icons/SearchInputIcon';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import {
    selectAuthors,
    selectCategories,
    selectGarnish,
    selectMeat,
} from '~/store/reducers/filter';
import { selectorIsFilterOpen, setIsFilterOpen } from '~/store/reducers/open';
import {
    addAllergen,
    removeAllergen,
    selectAllergens,
    selectEliminateAllergens,
    selectIsError,
    selectIsLoading,
    selectIsSearchStarted,
    selectIsSearchSuccessful,
    setAllergens,
    setCategories,
    setIsEliminatAllergensActivated,
    setIsError,
    setIsSearchStarted,
    setSearchString,
} from '~/store/reducers/search';

import { ComponentLoader } from '../loader/ComponentLoader';

export function SearchForm2() {
    const location = useLocation();
    const Name: Record<string, string> = {
        '/': 'Приятного аппетита!',
        'the-juiciest': 'Самое сочное',
        vegan: 'Веганская кухня',
    };

    const dispatch = useAppDispatch();
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
    const title = Name[firstSegment] || 'Приятного аппетита!';
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [localAllergens, setLocalAllergens] = useState<string[]>([]);
    const [searchInput, setSearchInput] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);
    const allergens = useAppSelector(selectAllergens);
    const isSearchStarted = useAppSelector(selectIsSearchStarted);
    const isSuccessful = useAppSelector(selectIsSearchSuccessful);
    const isLoading = useAppSelector(selectIsLoading);
    const isErrorSearch = useAppSelector(selectIsError);
    const isEliminateAllergensOn = useAppSelector(selectEliminateAllergens);
    const isFilterOpen = useAppSelector(selectorIsFilterOpen);
    const categories = useAppSelector(selectCategories);
    const authors = useAppSelector(selectAuthors);
    const meat = useAppSelector(selectMeat);
    const garnish = useAppSelector(selectGarnish);
    const allergensr = useAppSelector(selectAllergens);
    const handleEliminate = () => {
        dispatch(setIsEliminatAllergensActivated());
    };
    const handleAllergens = (allergen: string) => {
        if (allergen === 'Томат (помидор)') {
            allergen = 'Томат';
        } else if (allergen === 'Клубника (ягоды)') {
            allergen = 'Клубника';
        }
        if (allergens?.includes(allergen)) {
            dispatch(removeAllergen(allergen));
        } else {
            dispatch(addAllergen(allergen));
        }
    };

    const handleFilter = () => {
        dispatch(setIsFilterOpen());
    };

    const handleSearch = () => {
        if ((searchRef.current && searchRef?.current?.value?.length >= 2) || allergens?.length) {
            dispatch(setSearchString(searchRef?.current?.value));
            dispatch(setIsSearchStarted(true));

            categories?.length ? setCategories(categories) : '';
            authors?.length ? setCategories(authors) : '';
            meat?.length ? setCategories(meat) : '';
            garnish?.length ? setCategories(garnish) : '';
            allergensr?.length ? setCategories(allergensr) : '';
        } else {
            dispatch(setIsSearchStarted(false));
            dispatch(setSearchString(''));
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSwitch = () => {
        if (isEliminateAllergensOn) {
            setLocalAllergens(allergens ? allergens : []);
            dispatch(setAllergens([]));
            console.log('allergen placed:');
            console.log(allergens);
        } else {
            dispatch(setAllergens(localAllergens));
            setLocalAllergens([]);
            console.log('allergenssetted:');
            console.log(allergens);
        }
    };
    useEffect(() => {
        if (isErrorSearch && searchRef.current) {
            searchRef.current.value = '';
            dispatch(setIsError(false));
        }
    }, [isErrorSearch, dispatch]);
    if (isLoading) {
        return (
            <>
                <Box
                    mt={{ base: '17px', xl: '32px', '2xl': '32px' }}
                    ml={{ xl: '5px' }}
                    w={{
                        base: 'calc(328px + (727 - 328) * ((100vw - 360px) / (768 - 360)))',
                        md: 'calc(727px + (880 - 727) * ((100vw - 768px) / (1440 - 768)))',
                        xl: '100%',
                    }}
                    mx={{ base: 'auto' }}
                    mr={{ base: '32px', xl: '0' }}
                >
                    <VStack>
                        <Box mb={{ xl: '16px' }}>
                            <Heading
                                fontWeight='700'
                                fontFamily='Inter'
                                fontSize={{ base: '24px', xl: '48px' }}
                                lineHeight={{ base: '32px', xl: '48px' }}
                                letterSpacing={{ base: '0.3px', xl: '1px' }}
                            >
                                {title}
                            </Heading>
                        </Box>

                        <Box
                            mt={{ base: '7px' }}
                            w={{
                                base: 'calc(328px + (448 - 328) * ((100vw - 360px) / (480 - 360)))',
                                sm: 'calc(328px + (727 - 328) * ((100vw - 360px) / (768 - 360)))',
                                md: 'calc(727px + (880 - 727) * ((100vw - 768px) / (1440 - 768)))',
                                xl: '518px',
                            }}
                        >
                            <ComponentLoader></ComponentLoader>
                        </Box>
                    </VStack>
                </Box>
            </>
        );
    }
    return (
        <>
            <Box
                mt={{ base: '17px', xl: '32px', '2xl': '32px' }}
                ml={{ xl: '5px' }}
                w={{
                    base: 'calc(328px + (727 - 328) * ((100vw - 360px) / (768 - 360)))',
                    md: 'calc(727px + (880 - 727) * ((100vw - 768px) / (1440 - 768)))',
                    xl: '100%',
                }}
                mx={{ base: 'auto' }}
                mr={{ base: '32px', xl: '0' }}
            >
                <VStack>
                    <Box mb={{ xl: '16px' }}>
                        <Heading
                            fontWeight='700'
                            fontFamily='Inter'
                            fontSize={
                                isSearchStarted
                                    ? isSuccessful
                                        ? { base: '24px', xl: '48px' }
                                        : { base: '16px' }
                                    : { base: '24px', xl: '48px' }
                            }
                            lineHeight={
                                isSearchStarted
                                    ? isSuccessful
                                        ? { base: '32px', xl: '48px' }
                                        : { base: '24px' }
                                    : { base: '32px', xl: '48px' }
                            }
                            letterSpacing={{ base: '0.3px', xl: '1px' }}
                            w={isSearchStarted ? (isSuccessful ? '""' : '400px') : '""'}
                        >
                            {isSearchStarted
                                ? isSuccessful
                                    ? title
                                    : 'По вашему запросу ничего не найдено. Попробуйте другой запрос.'
                                : title}
                        </Heading>
                    </Box>
                    {title === 'Веганская кухня' && (
                        <Box>
                            <Text
                                fontFamily='Inter'
                                color='#0000007A'
                                fontWeight={500}
                                fontSize={{ base: '14px', xl: '16px' }}
                                w={{ base: '328px', md: '727px', xl: '696px' }}
                                textAlign='center'
                                mt={{ base: '4px', md: '6px', xl: '-12px' }}
                                letterSpacing={{ xl: '0.1px' }}
                                mb={{ xl: '16px' }}
                            >
                                Интересны не только убеждённым вегетарианцам, но и тем, кто хочет
                                попробовать вегетарианскую диету и готовить вкусные вегетарианские
                                блюда.
                            </Text>
                        </Box>
                    )}

                    <Box
                        mt={{ base: '7px' }}
                        w={{
                            base: 'calc(328px + (448 - 328) * ((100vw - 360px) / (480 - 360)))',
                            sm: 'calc(328px + (727 - 328) * ((100vw - 360px) / (768 - 360)))',
                            md: 'calc(727px + (880 - 727) * ((100vw - 768px) / (1440 - 768)))',
                            xl: '518px',
                        }}
                    >
                        <HStack spacing='12px' justifyContent='center'>
                            <Button
                                bg='transparent'
                                border='1px solid #0000007A'
                                borderRadius='6px'
                                size={{ base: 'sm' }}
                                h={{ base: '32px', xl: '48px' }}
                                w={{ base: '32px', xl: '48px' }}
                                onClick={handleFilter}
                                data-test-id={!isFilterOpen ? 'filter-button' : ''}
                            >
                                <Icon
                                    as={Filter}
                                    w={{ base: '14px', xl: '24px' }}
                                    h={{ base: '14px', xl: '24px' }}
                                ></Icon>
                            </Button>
                            <InputGroup
                                w={{
                                    base: 'calc(284px + (404 - 284) * ((100vw - 360px) / (480 - 360)))',
                                    sm: '404px',
                                    xl: '458px',
                                }}
                                h={{ base: '32px', xl: '48px' }}
                            >
                                <Input
                                    ref={searchRef}
                                    onKeyDown={handleKeyDown}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    value={searchInput}
                                    borderColor={
                                        isSearchStarted
                                            ? isSuccessful
                                                ? '#2DB100'
                                                : 'red'
                                            : '#0000007A'
                                    }
                                    _focusVisible={{
                                        borderColor: isSearchStarted
                                            ? isSuccessful
                                                ? '#2DB100'
                                                : 'red'
                                            : '#0000007A',
                                    }}
                                    placeholder='Название или ингредиент...'
                                    h={{ base: '32px', xl: '48px' }}
                                    _placeholder={{ color: 'rgba(19, 75, 0, 1)' }}
                                    fontSize={{ base: '14px', xl: '18px' }}
                                    fontFamily='Inter'
                                    fontWeight='400'
                                    letterSpacing={{ xl: '0.15px' }}
                                    pl={{ base: '12px', xl: '16px' }}
                                    data-test-id='search-input'
                                ></Input>
                                <InputRightElement
                                    data-test-id='search-button'
                                    onClick={() => handleSearch()}
                                    w={{ base: '32px', xl: '48px' }}
                                    h={{ base: '32px', xl: '48px' }}
                                    pointerEvents={
                                        allergens && allergens.length
                                            ? 'auto'
                                            : searchInput.length > 2
                                              ? 'auto'
                                              : 'none'
                                    }
                                >
                                    <Icon
                                        as={Search}
                                        w={{ base: '32px', xl: '40px' }}
                                        h={{ base: '32px', xl: '40px' }}
                                    ></Icon>
                                </InputRightElement>
                            </InputGroup>
                        </HStack>
                    </Box>
                    <Show above='xl'>
                        <Box mt={{ xl: '8px' }} ml={{ xl: '8px' }}>
                            <HStack>
                                <Box w='233px' h='36px'>
                                    <HStack spacing='14px'>
                                        <Text
                                            fontSize='16px'
                                            fontFamily='Inter'
                                            lineHeight='24px'
                                            fontWeight='500'
                                            pt={{ xl: '6px' }}
                                        >
                                            Исключить аллергены
                                        </Text>
                                        <Switch
                                            pt={{ xl: '6px' }}
                                            isChecked={isEliminateAllergensOn}
                                            onChange={() => {
                                                handleEliminate();
                                                handleSwitch();
                                            }}
                                            data-test-id='allergens-switcher'
                                        ></Switch>
                                    </HStack>
                                </Box>
                                <Box>
                                    <Menu
                                        onOpen={() => setIsMenuOpen(true)}
                                        onClose={() => setIsMenuOpen(false)}
                                        closeOnSelect={false}
                                    >
                                        <MenuButton
                                            color='#000000A3'
                                            w='269px'
                                            h={
                                                isEliminateAllergensOn && allergens?.length
                                                    ? 'auto'
                                                    : '40px'
                                            }
                                            borderRadius='6px'
                                            border='1px solid #00000014'
                                            fontFamily='Inter'
                                            fontSize='16px'
                                            lineHeight='24px'
                                            disabled={!isEliminateAllergensOn}
                                            data-test-id='allergens-menu-button'
                                        >
                                            <HStack
                                                p={2}
                                                overflow='hidden'
                                                flexWrap='wrap'
                                                position='relative'
                                                pr='64px'
                                                h={
                                                    isEliminateAllergensOn && allergens?.length
                                                        ? 'auto'
                                                        : '40px'
                                                }
                                            >
                                                {' '}
                                                {allergens &&
                                                allergens.length &&
                                                isEliminateAllergensOn ? (
                                                    allergens.map((item) => (
                                                        <Box
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
                                                    <Text flexWrap='nowrap'>
                                                        Выберите из списка...
                                                    </Text>
                                                )}
                                                <Image
                                                    src='/src/components/shared/images/icons/arrowDown.png'
                                                    display={isMenuOpen ? 'none' : ''}
                                                    position='absolute'
                                                    right='10px'
                                                ></Image>
                                                <Image
                                                    src='/src/components/shared/images/icons/arrowUp.png'
                                                    display={isMenuOpen ? '' : 'none'}
                                                    position='absolute'
                                                    right='8px'
                                                ></Image>
                                            </HStack>
                                        </MenuButton>
                                        <Portal>
                                            <MenuList
                                                borderRadius={0}
                                                p={0}
                                                w='269px'
                                                data-test-id='allergens-menu'
                                            >
                                                {searchFormFiltersData.map((item, index) => (
                                                    <MenuItem
                                                        value={item.id.toString()}
                                                        bg={
                                                            item.id % 2 === 0
                                                                ? '#0000000F'
                                                                : '#FFFFFF'
                                                        }
                                                        key={`${item.id}_${index}_${item.title}`}
                                                    >
                                                        <Checkbox
                                                            w='100%'
                                                            iconColor='black'
                                                            isChecked={
                                                                allergens?.includes(item.title) ||
                                                                allergens?.includes(
                                                                    item.displayTitle,
                                                                )
                                                                    ? true
                                                                    : false
                                                            }
                                                            onChange={() => {
                                                                handleAllergens(item.title);
                                                                setTimeout(() => {
                                                                    inputRef.current?.focus();
                                                                }, 300);
                                                            }}
                                                        >
                                                            <Text
                                                                data-test-id={`allergen-${index}`}
                                                            >
                                                                {item.title}
                                                            </Text>
                                                        </Checkbox>
                                                    </MenuItem>
                                                ))}
                                                <HStack ml='24px' spacing='8px'>
                                                    <Input
                                                        my='8px'
                                                        autoFocus={true}
                                                        w='205px'
                                                        data-test-id={
                                                            !isFilterOpen
                                                                ? 'add-other-allergen'
                                                                : ''
                                                        }
                                                        ref={inputRef}
                                                        onKeyDown={(e) => {
                                                            if (
                                                                e.key === 'Enter' &&
                                                                inputRef.current &&
                                                                inputRef.current.value.length
                                                            ) {
                                                                handleAllergens(
                                                                    inputRef?.current?.value,
                                                                );
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
                                                            if (
                                                                inputRef.current &&
                                                                inputRef.current.value.length
                                                            ) {
                                                                handleAllergens(
                                                                    inputRef?.current?.value,
                                                                );
                                                            }
                                                        }}
                                                        data-test-id={
                                                            !isFilterOpen
                                                                ? 'add-allergen-button'
                                                                : ''
                                                        }
                                                    >
                                                        <Icon as={Plus}></Icon>
                                                    </Button>
                                                </HStack>
                                            </MenuList>
                                        </Portal>
                                    </Menu>
                                </Box>
                            </HStack>
                        </Box>
                    </Show>
                </VStack>
            </Box>
        </>
    );
}
