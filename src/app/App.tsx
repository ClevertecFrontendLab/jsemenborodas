import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router';

import { AppRoutes } from '~/components/routes/Routes';

import { theme } from './theme';
function App() {
    return (
        <>
            <BrowserRouter>
                <ChakraProvider theme={theme}>
                    <AppRoutes />
                </ChakraProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
