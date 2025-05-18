import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router';

import { Layout } from '~/components/widgets/Layout/Layout';
import { LoginLayout } from '~/components/widgets/Layout/LoginLayout';
import { setIsAuth, userAuthSelector } from '~/store/app-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';

import { theme } from './theme';
function App() {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(userAuthSelector);
    useEffect(() => {
        const isAuth = sessionStorage.getItem('isAuth') === 'true';
        dispatch(setIsAuth(isAuth));
    }, [dispatch]);

    return (
        <>
            <BrowserRouter>
                <ChakraProvider theme={theme}>
                    {isAuth ? <Layout /> : <LoginLayout />}
                </ChakraProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
