import { Box, Button, Icon } from '@chakra-ui/react';

import { LeftArrow } from '~/icons/Icon';
type ButtonProps = {
    onClickFunc: () => void;
};

export function SliderButtonPrev({ onClickFunc }: ButtonProps) {
    return (
        <>
            <Box
                overflow={{ xl: 'hidden', '2xl': 'visible' }}
                position='absolute'
                top={{ xl: '208px', '2xl': '218px' }}
                w={{ xl: '40px', '2xl': '48px' }}
                h={{ xl: '40px', '2xl': '48px' }}
            >
                <Button
                    data-test-id='carousel-back'
                    bg='#000000'
                    w={{ xl: '40px', '2xl': '48px' }}
                    h={{ xl: '40px', '2xl': '48px' }}
                    position='absolute'
                    top='0px'
                    left='-8px'
                    borderRadius='6px'
                    zIndex='3'
                    onClick={onClickFunc}
                >
                    <Icon as={LeftArrow} w={{ '2xl': '24px' }}></Icon>
                </Button>
            </Box>
        </>
    );
}
