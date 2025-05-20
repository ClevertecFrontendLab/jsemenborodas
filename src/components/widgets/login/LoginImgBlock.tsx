import { Box, Image } from '@chakra-ui/react';

import image from './assets/Image.jpg';
export function LoginImgBlock() {
    return (
        <>
            <Box h='100%' w='100%' minW='100%'>
                <Image
                    src={image}
                    alt='image'
                    minH={{ base: '800px', sm: '1024px', xl: '1120px' }}
                    h='100vh'
                    maxH='100vh'
                    w='100%'
                ></Image>
            </Box>
        </>
    );
}
