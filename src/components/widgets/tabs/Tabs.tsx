import { Box, Tab, TabList, Tabs as Tabb } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router';

import { useGetCategoriesQuery } from '~/query/services/categories';
import { SubCategory } from '~/query/types/types';

export function Tabs() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);

    const navigate = useNavigate();
    const { data, isError } = useGetCategoriesQuery({});
    const currentCategory = data?.find((item) => item?.category === pathSegments[0]);
    const selectedSubCategory =
        currentCategory &&
        currentCategory?.subCategories?.findIndex((item) => item?.category === pathSegments[1]);
    const handlerLink = (subcategory: SubCategory) => {
        const path = `/${pathSegments[0]}/${subcategory?.category}`;
        navigate(path);
    };
    if (isError) {
        return null;
    }
    return (
        <>
            <Box
                w={{ base: '100%', xl: '100%' }}
                mt={{ base: '32px', md: '30px', xl: '38px', '2xl': '34px' }}
                overflow={{ md: 'visible', xl: 'hidden', '2xl': 'visible' }}
                minW={{ xl: '946px' }}
                bg='transparent'
            >
                <Tabb
                    index={!pathSegments[1] ? 0 : selectedSubCategory}
                    borderBottom='1px solid #00000014'
                    w={{ '2xl': '100%' }}
                    mx={{ '2xl': 'auto' }}
                    overflowX='auto'
                    overflowY='hidden'
                    flexWrap='wrap'
                    sx={{
                        '-webkit-overflow-scrolling': 'touch',
                        '&::-webkit-scrollbar': {
                            width: '1px',
                            h: '1px',
                            background: '#0000000A',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: 'transparent',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#00000029',
                            borderRadius: '8px',
                        },
                        '&::-webkit-scrollbar-button': {
                            display: 'none',
                        },
                    }}
                    overflow='visible'
                >
                    <TabList
                        whiteSpace='nowrap'
                        display='flex'
                        flexWrap='wrap'
                        borderBottom='none'
                        justifyContent='center'
                    >
                        {currentCategory &&
                            currentCategory?.subCategories?.map(
                                (item: SubCategory, index: number) => (
                                    <Tab
                                        data-test-id={`tab-${pathSegments[0] === 'snacks' ? pathSegments[1] : item?.category}-${index}`}
                                        onClick={() => handlerLink(item)}
                                        key={item?._id}
                                        fontFamily='Inter'
                                        fontWeight={500}
                                        fontSize={{ base: '14px', xl: '16px' }}
                                        color='#134B00'
                                        letterSpacing={{ xl: '0.1px' }}
                                        sx={{
                                            _selected: {
                                                color: '#2DB100',
                                                borderBottomColor: '#2DB100',
                                                height: {
                                                    base: '30px',
                                                    md: '32px',
                                                    xl: '36px',
                                                    '2xl': '40px',
                                                },
                                            },
                                        }}
                                    >
                                        {item?.title}
                                    </Tab>
                                ),
                            )}
                    </TabList>
                </Tabb>
            </Box>
        </>
    );
}
