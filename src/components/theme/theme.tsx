import { extendTheme } from '@chakra-ui/react';

import { switchTheme } from '../components/searchForm/CustomSwitchTheme';

export const theme = extendTheme({
    components: { Switch: switchTheme },
});
