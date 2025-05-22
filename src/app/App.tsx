import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router';

import { Layout } from '~/components/widgets/Layout/Layout';
import { setIsAuth } from '~/store/app-slice';
import { useAppDispatch } from '~/store/hooks';

import { theme } from './theme';
function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const isAuth = localStorage.getItem('isAuth') === 'true';
        dispatch(setIsAuth(isAuth));
    }, [dispatch]);

    return (
        <>
            <BrowserRouter>
                <ChakraProvider theme={theme}>
                    <Layout />
                </ChakraProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
