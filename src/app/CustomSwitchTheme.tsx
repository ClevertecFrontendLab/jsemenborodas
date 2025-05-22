import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    switchAnatomy.keys,
);

const baseStyle = definePartsStyle({
    container: {},
    thumb: {
        bg: '#FFFFFF',
    },
    track: {
        _checked: {
            bg: '#B1FF2E',
        },
    },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
