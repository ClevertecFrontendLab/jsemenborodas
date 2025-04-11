import './App.css';

import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router';

import { Footer } from '~/components/footer/Footer';
import { Header } from '~/components/header/Header';

import { AppRoutes } from '../components/routes/Routes';
import { theme } from '../components/theme/theme';
function App() {
    return (
        <>
            <BrowserRouter>
                <ChakraProvider theme={theme}>
                    <Grid
                        minH='100vh'
                        templateRows={{ base: 'auto 1fr auto' }}
                        maxW={{ xl: 'calc(100vw)' }}
                        overflow='hidden'
                    >
                        <GridItem>
                            <Header></Header>
                        </GridItem>
                        <GridItem>
                            <AppRoutes></AppRoutes>
                        </GridItem>
                        <GridItem>
                            <Footer></Footer>
                        </GridItem>
                    </Grid>
                </ChakraProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
