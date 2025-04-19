import { Box, Button, Icon } from '@chakra-ui/react';

import { leftArrow, rightArrow } from '~/icons/Icon';

export const SliderButton = ({ swiperRef }) => {
    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

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
                    bg='#000000'
                    w={{ xl: '40px', '2xl': '48px' }}
                    h={{ xl: '40px', '2xl': '48px' }}
                    position='absolute'
                    top='0px'
                    left='-8px'
                    borderRadius='6px'
                    zIndex='500'
                    onClick={handlePrev}
                >
                    <Icon as={leftArrow} w={{ '2xl': '24px' }}></Icon>
                </Button>
            </Box>

            <Box
                overflow={{ xl: 'hidden', '2xl': 'visible' }}
                position='absolute'
                top={{ xl: '208px', '2xl': '218px' }}
                right='0'
                w={{ xl: '40px', '2xl': '48px' }}
                h={{ xl: '40px', '2xl': '48px' }}
            >
                {' '}
                <Button
                    bg='#000000'
                    w={{ xl: '40px', '2xl': '48px' }}
                    h={{ xl: '40px', '2xl': '48px' }}
                    top='0px'
                    right='-8px'
                    borderRadius='6px'
                    position='absolute'
                    zIndex='500'
                    onClick={handleNext}
                >
                    <Icon as={rightArrow} w={{ '2xl': '24px' }}></Icon>
                </Button>
            </Box>
        </>
    );
};
