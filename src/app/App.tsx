import './App.css';

import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import { Header } from '~/components/header/Header';
import { Main } from '~/components/main/Main';

import { switchTheme } from '../components/searchForm/CustomSwitchTheme';

export const theme = extendTheme({
    components: { Switch: switchTheme },
});
function App() {
    return (
        <>
            <ChakraProvider theme={theme}>
                <Grid minH='100vh' templateRows='auto 1fr auto'>
                    <GridItem>
                        <Header></Header>
                    </GridItem>
                    <GridItem>
                        <Main></Main>
                    </GridItem>
                    <GridItem>Footer</GridItem>
                </Grid>
            </ChakraProvider>
        </>
    );
}

export default App;
