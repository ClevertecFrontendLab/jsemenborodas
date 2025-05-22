import { Box, Button, Icon } from '@chakra-ui/react';

import { RightArrow } from '~/icons/Icon';
type ButtonProps = {
    onClickFunc: () => void;
};

export function SliderButtonNext({ onClickFunc }: ButtonProps) {
    return (
        <>
            <Box
                overflow={{ xl: 'hidden', '2xl': 'visible' }}
                position='absolute'
                display={{ base: 'none', xl: 'block' }}
                top={{ xl: '214px', '2xl': '220px' }}
                right={{ xl: 0, '2xl': -1 }}
                w={{ xl: '40px', '2xl': '48px' }}
                h={{ xl: '40px', '2xl': '48px' }}
            >
                {' '}
                <Button
                    data-test-id='carousel-forward'
                    bg='#000000'
                    w={{ xl: '40px', '2xl': '48px' }}
                    h={{ xl: '40px', '2xl': '48px' }}
                    top='0px'
                    right='-8px'
                    borderRadius='6px'
                    position='absolute'
                    zIndex='3'
                    onClick={onClickFunc}
                >
                    <Icon as={RightArrow} w={{ '2xl': '24px' }}></Icon>
                </Button>
            </Box>
        </>
    );
}
