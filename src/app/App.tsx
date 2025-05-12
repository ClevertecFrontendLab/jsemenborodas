import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router';

import { Layout } from '~/components/widgets/Layout/Layout';

import { theme } from './theme';
function App() {
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
