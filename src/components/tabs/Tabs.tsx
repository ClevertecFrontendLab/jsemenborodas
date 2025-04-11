import { Box, Tab, TabList, Tabs as Tabb } from '@chakra-ui/react';

import { TabsData } from './TabsData';

export function Tabs() {
    return (
        <>
            <Box
                w={{ base: '1043px', xl: '100%' }}
                h={{ base: '30px', '2xl': '40px' }}
                mt={{ base: '32px', md: '30px', xl: '38px', '2xl': '34px' }}
                overflow={{ md: 'visible', xl: 'hidden', '2xl': 'visible' }}
                minW={{ xl: '946px' }}
            >
                <Tabb
                    defaultIndex={2}
                    borderBottom='1px solid #00000014'
                    h={{ base: '30px', '2xl': '40px' }}
                >
                    <TabList
                        whiteSpace='nowrap'
                        display='flex'
                        borderBottom='none'
                        h={{ base: '30px', '2xl': '40px' }}
                        transform={{
                            base: 'translateX(-140px)',
                            md: 'translateX(-136px)',
                            xl: 'translateX(-74px) ',
                            '2xl': 'translateX(4px)',
                        }}
                    >
                        {TabsData.map((item) => (
                            <Tab
                                key={item.id}
                                fontFamily='Inter'
                                fontWeight={500}
                                fontSize={{ base: '14px', xl: '16px' }}
                                color='#2DB100'
                                letterSpacing={{ xl: '0.1px' }}
                            >
                                {item.title}
                            </Tab>
                        ))}
                    </TabList>
                </Tabb>
            </Box>
        </>
    );
}
