import { Box, Tab, TabList, Tabs as Tabb } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router';

import { NavMenuData } from '~/components/entities/Data/NavMenuData';

export function Tabs() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);

    const selectedCategory = NavMenuData.find((item) => item.category === pathSegments[0]);
    const selectedSubCategory = selectedCategory?.childrens.findIndex(
        (item) => item.subCategory === pathSegments[1],
    );
    const navigate = useNavigate();

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

                        // transform={{
                        //     base: 'translateX(-140px)',
                        //     md: 'translateX(-136px)',
                        //     xl: 'translateX(-56px) ',
                        //     '2xl': 'translateX(22px)',
                        // }}
                    >
                        {NavMenuData.map((item) =>
                            item.category === pathSegments[0]
                                ? item.childrens.map((child, index) => (
                                      <Tab
                                          data-test-id={`tab-${pathSegments[0] === 'snacks' ? pathSegments[0] : child.subCategory}-${index}`}
                                          onClick={() => {
                                              const path = `/${pathSegments[0]}/${child.subCategory}`;
                                              navigate(path);
                                          }}
                                          key={item.id}
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
                                          {child.title}
                                      </Tab>
                                  ))
                                : '',
                        )}
                    </TabList>
                </Tabb>
            </Box>
        </>
    );
}
