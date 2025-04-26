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
import { useLocation, useNavigate } from 'react-router';

import { searchFormFiltersData } from '~/components/entities/Data/searchFormFiltersData';
import { Plus } from '~/icons/Icon';
import { Filter, Search } from '~/icons/SearchInputIcon';

interface searchFormPropsInterface {
    setIsSearchStarted: (value: boolean) => void;
    searchValue: string;
    setSearchValue: (value: string) => void;
    selectedItems: string[];
    setSelectedItems: (items: string[]) => void;
    customAllergen: string[];
    setCustomAllergen: (allergens: string[]) => void;
    isDisabled: boolean;
    setIsDisabled: (value: boolean) => void;
    isFilterHidden: boolean;
    setIsFilterHidden: (value: boolean) => void;
    selectedFilterCategory: { id: number; title: string; name: string }[];
}
export function SearchForm2({
    setIsSearchStarted,
    searchValue,
    setSearchValue,
    selectedItems,
    setSelectedItems,
    customAllergen,
    setCustomAllergen,
    isDisabled,
    setIsDisabled,
    isFilterHidden,
    setIsFilterHidden,
    selectedFilterCategory,
}: searchFormPropsInterface) {
    const location = useLocation();
    const Name: Record<string, string> = {
        '/': 'Приятного аппетита!',
        Juciest: 'Самое сочное',
        vegan: 'Веганская кухня',
    };
    const navigate = useNavigate();
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
    const title = Name[firstSegment] || 'Приятного аппетита!';
    const [inputValue, setInputValue] = useState(searchValue);
    const handleSearch = () => {
        if (inputValue.length >= 3) {
            setIsSearchStarted(true);
            setSearchValue(inputValue);
        } else {
            setIsSearchStarted(false);
            setSearchValue('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAddAllergen = () => {
        const value = inputRef.current?.value.trim();
        if (value) {
            if (!customAllergen.includes(value)) {
                setCustomAllergen([...customAllergen, value]);
                if (inputRef.current) {
                    inputRef.current.value = '';
                }
            }
        }
    };

    const handleSelect = () => {
        setIsDisabled(!isDisabled);
    };

    const handleCheckboxChange = (id: string) => {
        setSelectedItems((prev) => {
            if (prev.includes(id)) {
                return prev.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const handleFilterChange = () => {
        setIsFilterHidden(!isFilterHidden);
    };

    useEffect(() => {
        if (searchValue && searchValue.length > 3) {
            handleSearch();
        }
    }, [searchValue, handleSearch]);

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
                                onClick={handleFilterChange}
                                data-test-id={isFilterHidden ? 'filter-button' : ''}
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
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    borderColor='#0000007A'
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
                                    onClick={
                                        selectedFilterCategory.length > 0
                                            ? (e) => {
                                                  e.preventDefault();
                                                  console.log('searchValue', inputValue);
                                                  navigate(`/filtered/`, {
                                                      state: {
                                                          selectedFilterCategory:
                                                              selectedFilterCategory.map(
                                                                  (category) => category,
                                                              ),
                                                          selectedItems,
                                                          inputValue,
                                                      },
                                                  });
                                              }
                                            : handleSearch
                                        // Костыль
                                    }
                                    w={{ base: '32px', xl: '48px' }}
                                    h={{ base: '32px', xl: '48px' }}
                                    pointerEvents={inputValue.length >= 3 ? '' : 'none'}
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
                                <Box w={isDisabled === true ? '268px' : '233px'} h='36px'>
                                    <HStack spacing='14px'>
                                        <Text
                                            fontSize='16px'
                                            fontFamily='Inter'
                                            lineHeight='24px'
                                            fontWeight='500'
                                            pt={{ xl: '6px' }}
                                        >
                                            {isDisabled === true
                                                ? 'Исключить мои аллергены'
                                                : 'Исключить аллергены'}
                                        </Text>
                                        <Switch
                                            pt={{ xl: '6px' }}
                                            onChange={handleSelect}
                                            data-test-id='allergens-switcher'
                                        ></Switch>
                                    </HStack>
                                </Box>
                                <Box>
                                    <Menu
                                        // disabled={isDisabled}
                                        // placeholder='Выберите из списка...'
                                        // color='#000000A3'
                                        // w='234px'
                                        // h='40px'
                                        // borderRadius='6px'
                                        // border='1px solid #00000014'
                                        // fontFamily='Inter'
                                        // fontSize='16px'
                                        // lineHeight='24px'

                                        closeOnSelect={false}
                                    >
                                        <MenuButton
                                            color='#000000A3'
                                            w={isDisabled === true ? '234px' : '269px'}
                                            h={isDisabled === true ? '40px' : 'auto'}
                                            borderRadius='6px'
                                            border='1px solid #00000014'
                                            fontFamily='Inter'
                                            fontSize='16px'
                                            lineHeight='24px'
                                            disabled={isDisabled}
                                            data-test-id='allergens-menu-button'
                                        >
                                            <HStack
                                                p={2}
                                                overflow='hidden'
                                                flexWrap='wrap'
                                                position='relative'
                                                pr={isDisabled === true ? '0px' : '64px'}
                                                h={isDisabled === true ? '40px' : 'auto'}
                                            >
                                                {(selectedItems.length > 0 &&
                                                    isDisabled === false) ||
                                                (customAllergen.length > 0 &&
                                                    isDisabled === false) ? (
                                                    selectedItems.map((id) => {
                                                        const item = searchFormFiltersData.find(
                                                            (item) => item.id.toString() === id,
                                                        );
                                                        return item ? (
                                                            <Box
                                                                key={id}
                                                                lineHeight='16px'
                                                                fontSize='12px'
                                                                fontWeight={500}
                                                                fontFamily='Inter'
                                                                color='#2DB100'
                                                                border='1px solid #B1FF2E'
                                                                borderRadius='6px'
                                                                px={2}
                                                            >
                                                                {item.displayTitle}
                                                            </Box>
                                                        ) : null;
                                                    })
                                                ) : (
                                                    <Text flexWrap='nowrap'>
                                                        Выберите из списка...
                                                    </Text>
                                                )}
                                                {customAllergen.length > 0 && isDisabled === false
                                                    ? customAllergen.map((item) => (
                                                          <Box
                                                              key={item}
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
                                                    : ''}

                                                <Image
                                                    src='/src/components/shared/images/icons/arrowDown.png'
                                                    display={
                                                        selectedItems.length > 0 ||
                                                        customAllergen.length > 0
                                                            ? 'none'
                                                            : ''
                                                    }
                                                    position='absolute'
                                                    right='10px'
                                                ></Image>
                                                <Image
                                                    src='/src/components/shared/images/icons/arrowUp.png'
                                                    display={
                                                        selectedItems.length > 0 ||
                                                        customAllergen.length > 0
                                                            ? ''
                                                            : 'none'
                                                    }
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
                                                        onChange={() => {
                                                            handleCheckboxChange(
                                                                item.id.toString(),
                                                            );
                                                            setTimeout(() => {
                                                                inputRef.current?.focus();
                                                            }, 300);
                                                        }}
                                                    >
                                                        <Checkbox w='100%' iconColor='black'>
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
                                                            isFilterHidden
                                                                ? 'add-other-allergen'
                                                                : ''
                                                        }
                                                        ref={inputRef}
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Enter') {
                                                                handleAddAllergen();
                                                            }
                                                        }}
                                                    />
                                                    <Button
                                                        bg='transparent'
                                                        border='none'
                                                        shadow='none'
                                                        _hover={{ bg: 'transparent' }}
                                                        p={0}
                                                        onClick={handleAddAllergen}
                                                        data-test-id={
                                                            isFilterHidden
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
