import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
export function LoginFormTabs() {
    const navigate = useNavigate();
    const location = useLocation();

    const [indexOfTab, setIndexOfTab] = useState(0);
    useEffect(() => {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        if (pathSegments[0] === 'register') {
            setIndexOfTab(1);
            return;
        }
        setIndexOfTab(0);
    }, [location.pathname]);
    return (
        <Tabs
            isLazy
            mt={{ sm: '16px', xl: '40px' }}
            mr={{ xl: '0px', '2xl': 0 }}
            ml={{ '2xl': '12px' }}
            index={indexOfTab}
        >
            <TabList
                gap='16px'
                h='54px'
                w={{ base: '328px', sm: '355px', xl: '451px' }}
                borderBottom='2px solid rgba(0, 0, 0, 0.08)'
            >
                <Tab
                    w={{ base: '150px', xl: '163px' }}
                    fontFamily='Inter'
                    fontSize={{ base: '16px', xl: '18px' }}
                    fontWeight='500'
                    lineHeight={{ base: '24px', xl: '28px' }}
                    color='rgba(19, 75, 0, 1)'
                    sx={{
                        _selected: {
                            bg: 'transparent',
                            borderBottom: '2px solid rgba(32, 126, 0, 1)',
                            color: 'rgba(32, 126, 0, 1)',
                        },
                    }}
                    onClick={() => {
                        navigate('/login');
                    }}
                >
                    Вход на сайт
                </Tab>
                <Tab
                    w={{ base: '151px', xl: '163px' }}
                    fontFamily='Inter'
                    fontSize={{ base: '16px', xl: '18px' }}
                    fontWeight='500'
                    lineHeight={{ base: '24px', xl: '28px' }}
                    color='rgba(19, 75, 0, 1)'
                    sx={{
                        _selected: {
                            bg: 'transparent',
                            borderBottom: '2px solid rgba(32, 126, 0, 1)',
                            color: 'rgba(32, 126, 0, 1)',
                        },
                    }}
                    onClick={() => {
                        navigate('/register');
                    }}
                >
                    Регистрация
                </Tab>
            </TabList>
        </Tabs>
    );
}
