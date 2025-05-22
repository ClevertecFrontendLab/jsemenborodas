import { extendTheme } from '@chakra-ui/react';

import { switchTheme } from './CustomSwitchTheme';

export const theme = extendTheme({
    components: {
        Switch: switchTheme,
        Progress: { baseStyle: { filledTrack: { bg: 'rgba(196, 255, 97, 1)' } } },
        Checkbox: {
            baseStyle: {
                control: {
                    borderColor: '#D7FF94',
                    bg: 'transparent',
                    _checked: {
                        bg: '#B1FF2E',
                        borderColor: 'none',
                        _hover: { bg: '#B1FF2E', borderColor: 'none' },
                    },
                },
                label: {
                    color: 'rgb(0, 0, 0)',
                },
            },
        },
    },
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
