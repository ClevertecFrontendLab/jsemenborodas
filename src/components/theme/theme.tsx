import { extendTheme } from '@chakra-ui/react';

import { switchTheme } from '../../components/searchForm/CustomSwitchTheme';

export const theme = extendTheme({
    components: { Switch: switchTheme },
    styles: {
        global: {
            '.custom-cursor': {
                cursor: 'pointer',
            },
        },
    },
    breakpoints: {
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '80em', // 1280px
        '2xl': '100em', // 1536px
        '3xl': '116em',
    },
});
