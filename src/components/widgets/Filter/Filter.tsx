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
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { FilterAuthorsData } from '~/components/entities/Data/FilterData/FilterAuthorsData';
import { FilterCategoryData } from '~/components/entities/Data/FilterData/FilterCategoryData';
import { searchFormFiltersData } from '~/components/entities/Data/searchFormFiltersData';
import { TypeOfMeatData } from '~/components/entities/Data/TypeOfMeatData';
import { TypeOfSideDishData } from '~/components/entities/Data/TypeOfSideDishData';
import { ExitButtonIcon, ExitFilter, Plus } from '~/icons/Icon';

interface FilterProps {
    isFilterHidden: boolean;
    setIsFilterHidden: (value: boolean) => void;
    selectedMeatTypes: { title: string; name: string }[];
    setSelectedMeatTypes: (value: { title: string; name: string }[]) => void;
    selectedSideDishTypes: { title: string; name: string }[];
    setSelectedSideDishTypes: (value: { title: string; name: string }[]) => void;
    selectedFilterCategory: { id: number; title: string; name: string }[];
    setSelectedFilterCategory: (value: { id: number; title: string; name: string }[]) => void;
    selectedFilterAuthor: string[];
    setSelectedFilterAuthor: (value: string[]) => void;
    isCategoryMenuOpen: boolean;
    setIsCategoryMenuOpen: (value: boolean) => void;
    isAuthorMenuOpen: boolean;
    setIsAuthorMenuOpen: (value: boolean) => void;
}

export function Filter({
    isFilterHidden,
    setIsFilterHidden,
    selectedMeatTypes,
    setSelectedMeatTypes,
    selectedSideDishTypes,
    setSelectedSideDishTypes,
    selectedFilterCategory,
    setSelectedFilterCategory,
    selectedFilterAuthor,
    setSelectedFilterAuthor,
    isCategoryMenuOpen,
    setIsCategoryMenuOpen,
    isAuthorMenuOpen,
    setIsAuthorMenuOpen,
}: FilterProps) {
    const handleFilterChange = () => {
        setIsFilterHidden(!isFilterHidden);
    };

    const toggleSideDish = (item: { title: string; name: string }) => {
        setSelectedSideDishTypes((prev) => {
            if (prev.find((sideDish) => sideDish.name === item.name)) {
                return prev.filter((sideDish) => sideDish.name !== item.name);
            } else {
                return [...prev, item];
            }
        });
    };

    const toggleMeat = (item: { title: string; name: string }) => {
        setSelectedMeatTypes((prev) => {
            if (prev.find((meat) => meat.name === item.name)) {
                return prev.filter((meat) => meat.name !== item.name);
            } else {
                return [...prev, item];
            }
        });
    };

    const handleCatygoryCheckboxChange = (category: {
        id: number;
        title: string;
        name: string;
    }) => {
        setSelectedFilterCategory((prev) => {
            if (prev.some((item) => item.id === category.id)) {
                return prev.filter((item) => item.id !== category.id);
            } else {
                return [...prev, category];
            }
        });
    };

    const handleAuthorCheckboxChange = (authorName: string) =>
        setSelectedFilterAuthor((prev) => {
            if (prev.includes(authorName)) {
                return prev.filter((item) => item !== authorName);
            } else {
                return [...prev, authorName];
            }
        });

    const [allFilterFilters, setAllFilterFilters] = useState<string[]>([]);

    // const handleFilterFiltersChange = (filter: string) =>
    //     setAllFilterFilters((prev) => {
    //         if (prev.includes(filter)) {
    //             return prev.filter((item) => item !== filter);
    //         } else {
    //             return [...prev, filter];
    //         }
    //     });

    const [isOpen, setIsOpen] = useState(true);
    const [isListOpen, setIsListOpen] = useState(false);
    const [defaultAllergen, setDefaultAllergen] = useState<string[]>([]);

    const handleDefaultAllergenChange = (allergen: string) =>
        setDefaultAllergen((prev) => {
            if (prev.includes(allergen)) {
                return prev.filter((item) => item !== allergen);
            } else {
                return [...prev, allergen];
            }
        });

    const navigate = useNavigate();

    return (
        <Box
            display={isFilterHidden ? 'none' : ''}
            position='fixed'
            h='100vh'
            bg='white'
            top='0'
            right='0'
            zIndex='9999'
            overflow='hidden'
            w={{ base: '344px', xl: '463px' }}
            minW={0}
        >
            <Box
                maxH='calc(100% - 100px)'
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
                    <Box pt='4px' pr={{ xl: '4px' }} onClick={handleFilterChange}>
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
                    >
                        <MenuButton
                            textAlign='left'
                            w='100%'
                            border='1px solid #00000014'
                            borderRadius='6px'
                        >
                            <HStack p='8px 12px 7px 16px' justifyContent='space-between'>
                                <Text
                                    fontFamily='Inter'
                                    fontWeight={400}
                                    fontSize='16px'
                                    lineHeight='24px'
                                    color='#000000A3'
                                >
                                    {selectedFilterCategory.length > 0 ? (
                                        <HStack flexWrap='wrap'>
                                            {selectedFilterCategory.map((item) => (
                                                <Box
                                                    key={item.id}
                                                    lineHeight='16px'
                                                    fontSize='12px'
                                                    fontWeight={500}
                                                    fontFamily='Inter'
                                                    color='#2DB100'
                                                    border='1px solid #B1FF2E'
                                                    borderRadius='6px'
                                                    px={2}
                                                    flexWrap='nowrap'
                                                >
                                                    {item.title}
                                                </Box>
                                            ))}
                                        </HStack>
                                    ) : (
                                        'Категория'
                                    )}
                                </Text>
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
                        <MenuList w={{ base: '308px', xl: '399px' }}>
                            {FilterCategoryData.map((item) => (
                                <MenuItem
                                    key={item.id}
                                    bg={item.id % 2 === 0 ? '#0000000F' : '#FFFFFF'}
                                >
                                    <Checkbox
                                        isChecked={selectedFilterCategory.some(
                                            (c) => c.id === item.id,
                                        )}
                                        onChange={() => handleCatygoryCheckboxChange(item)}
                                    >
                                        {item.title}
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
                                <Text
                                    fontFamily='Inter'
                                    fontWeight={400}
                                    fontSize='16px'
                                    lineHeight='24px'
                                    color='#000000A3'
                                >
                                    {selectedFilterAuthor.length > 0 ? (
                                        <HStack flexWrap='wrap'>
                                            {selectedFilterAuthor.map((item) => (
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
                                                    flexWrap='nowrap'
                                                >
                                                    {item}
                                                </Box>
                                            ))}
                                        </HStack>
                                    ) : (
                                        'Поиск по автору'
                                    )}
                                </Text>
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
                            {FilterAuthorsData.map((item) => (
                                <MenuItem
                                    key={item.id}
                                    bg={item.id % 2 === 0 ? '#0000000F' : '#FFFFFF'}
                                >
                                    <Checkbox
                                        isChecked={selectedFilterAuthor.includes(item.authorName)}
                                        value={item.authorName}
                                        onChange={() => handleAuthorCheckboxChange(item.authorName)}
                                    >
                                        {item.authorName}
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
                    >
                        Тип мяса:
                    </Text>
                    <CheckboxGroup
                        value={selectedMeatTypes?.map((meat) => meat?.title) || []}
                        onChange={() => toggleMeat}
                    >
                        <VStack alignItems='flex-start'>
                            {TypeOfMeatData.map((item) => (
                                <Checkbox
                                    key={item.name}
                                    onChange={() => toggleMeat(item)}
                                    value={item.title}
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
                    >
                        Тип гарнира:
                    </Text>
                    <CheckboxGroup
                        value={selectedSideDishTypes?.map((sideDish) => sideDish?.title) || []}
                        onChange={() => toggleSideDish}
                    >
                        <VStack alignItems='flex-start'>
                            {TypeOfSideDishData.map((item) => (
                                <Checkbox
                                    key={item.name}
                                    onChange={() => toggleSideDish(item)}
                                    value={item.title}
                                >
                                    {item.title}
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
                        <Switch onChange={() => setIsOpen(!isOpen)} />
                    </HStack>
                    <Menu
                        closeOnSelect={false}
                        onOpen={() => setIsListOpen(true)}
                        onClose={() => setIsListOpen(false)}
                    >
                        <MenuButton
                            w='100%'
                            h='auto'
                            border='1px solid #00000014'
                            p='8px 12px 8px 16px'
                            borderRadius='6px'
                            mt='14px'
                            disabled={isOpen}
                        >
                            <HStack justifyContent='space-between'>
                                {defaultAllergen.length > 0 && !isOpen ? (
                                    <HStack
                                        p={2}
                                        overflow='hidden'
                                        flexWrap='wrap'
                                        position='relative'
                                        pr='64px'
                                    >
                                        {defaultAllergen.map((item) => (
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
                                        ))}
                                    </HStack>
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
                                <Image
                                    src='/src/components/shared/images/icons/arrowDown.png'
                                    display={isListOpen ? 'none' : ''}
                                />
                                <Image
                                    src='/src/components/shared/images/icons/arrowUp.png'
                                    display={isListOpen ? '' : 'none'}
                                />
                            </HStack>
                        </MenuButton>
                        <MenuList borderRadius={0} p={0} w='269px'>
                            {searchFormFiltersData.map((item) => (
                                <MenuItem
                                    key={item.id}
                                    bg={item.id % 2 === 0 ? '#0000000F' : '#FFFFFF'}
                                >
                                    <Checkbox
                                        isChecked={defaultAllergen.includes(item.title)}
                                        onChange={() => handleDefaultAllergenChange(item.title)}
                                    >
                                        {item.title}
                                    </Checkbox>
                                </MenuItem>
                            ))}
                            <HStack ml='24px' spacing='8px'>
                                <Input my='8px' w='205px' />
                                <Button
                                    bg='transparent'
                                    border='none'
                                    shadow='none'
                                    _hover={{ bg: 'transparent' }}
                                    p={0}
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
                        {allFilterFilters.map((item) => (
                            <Box
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
                            >
                                <HStack>
                                    <Text>{item}</Text>
                                    <Icon as={ExitButtonIcon} w='10px' h='10px' />
                                </HStack>
                            </Box>
                        ))}
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
                                setSelectedFilterCategory([]);
                                setSelectedFilterAuthor([]);
                                setDefaultAllergen([]);
                                setAllFilterFilters([]);
                                setSelectedMeatTypes([]);
                                setSelectedSideDishTypes([]);
                            }}
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
                            isDisabled={
                                selectedFilterCategory.length === 0 &&
                                defaultAllergen.length === 0 &&
                                selectedFilterAuthor.length === 0 &&
                                selectedMeatTypes.length === 0 &&
                                selectedSideDishTypes.length === 0
                            }
                            onClick={() =>
                                navigate(`/filtered`, {
                                    state: {
                                        selectedMeatTypes: selectedMeatTypes.map((meat) => meat),
                                        selectedSideDishTypes: selectedSideDishTypes.map(
                                            (sideDish) => sideDish,
                                        ),
                                        selectedFilterCategory: selectedFilterCategory.map(
                                            (category) => category,
                                        ),
                                        selectedFilterAuthor,
                                        defaultAllergen,
                                    },
                                })
                            }
                            sx={{
                                _disabled: {
                                    bg: '#0000003D',
                                    color: '#FFFFFFA3',
                                    cursor: 'default',
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
                zIndex='100000'
                bg='rgba(0, 0, 0, 0.16)'
                onClick={handleFilterChange}
            ></Box>
        </Box>
    );
}
