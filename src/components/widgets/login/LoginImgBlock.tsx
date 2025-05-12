import { Box, Image } from '@chakra-ui/react';

import image from './assets/Image.jpg';
export function LoginImgBlock() {
    return (
        <>
            <Box h='100%' w='100%'>
                <Image
                    src={image}
                    alt='image'
                    maxH='100vh'
                    maxW='100%'
                    minH='100vh'
                    minW='100%'
                ></Image>
            </Box>
        </>
    );
}
