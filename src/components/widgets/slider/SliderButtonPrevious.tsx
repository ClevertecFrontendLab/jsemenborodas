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
                display={{ base: 'none', xl: 'block' }}
                top={{ xl: '214px', '2xl': '220px' }}
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
                    left={{ xl: '3px', '2xl': -2 }}
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
