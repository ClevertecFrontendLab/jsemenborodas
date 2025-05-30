import { Box, Flex, FlexProps, Icon, Input, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

import { useUploadImageMutation } from '~/query/services/upload';
import { FipleUploadResponce } from '~/query/types/types';

import { DefaultImage } from './assets/Icons';
import { AddIngridients } from './header/AddIngridients';
import { Buttons } from './header/Buttons';
import { Header } from './header/Header';
import { Steps } from './header/steps';
export function CreateNewRecipe() {
    const [recipeImage, setRecipeImage] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const filePicker = useRef<HTMLInputElement>(null);
    const [fileUpload] = useUploadImageMutation();

    const handleImageClick = () => {
        filePicker.current?.click();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length) setSelectedFile(event.target.files[0]);
    };

    const recipeImageHeight = useBreakpointValue({
        base: '224px',
        xl: '410px',
    });

    const recipeImageWidth = useBreakpointValue({
        base: '328px',
        md: '232px',
        xl: '353px',
        '2xl': '553px',
    });

    const flexDirection = useBreakpointValue<FlexProps['direction']>({
        base: 'column',
        md: 'row',
    });

    useEffect(() => {
        if (selectedFile) {
            const uploadFile = async () => {
                const formData = new FormData();
                formData.append('file', selectedFile);
                const responce = (await fileUpload(formData)) as FipleUploadResponce;
                if ('data' in responce) {
                    setRecipeImage(responce.data.url);
                    return;
                }
                setRecipeImage('');
            };
            uploadFile();
        }
    }, [selectedFile, fileUpload]);
    return (
        <>
            <Box
                as='section'
                pt={{ base: 16, xl: 10 }}
                pl={{ xl: 1 }}
                px={{ base: 4, md: 0 }}
                w={{ base: '360px', md: '100%' }}
                h='100%'
                mb={{ base: '100px' }}
                mx={{ base: 'auto' }}
                maxW={{ md: '728px', xl: '100%' }}
            >
                <Flex direction={flexDirection} mt={{ base: 4 }}>
                    {recipeImage.length ? (
                        <Image
                            minW={recipeImageWidth}
                            maxW={recipeImageWidth}
                            minH={recipeImageHeight}
                            maxH={recipeImageHeight}
                            src={`https://training-api.clevertec.ru/${recipeImage}`}
                            borderRadius={8}
                            alt='defaultImage'
                            onClick={handleImageClick}
                        ></Image>
                    ) : (
                        <Box
                            minW={recipeImageWidth}
                            maxW={recipeImageWidth}
                            minH={recipeImageHeight}
                            maxH={recipeImageHeight}
                            bgColor='rgba(0, 0, 0, 0.08)'
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            borderRadius={8}
                            onClick={handleImageClick}
                        >
                            <Icon as={DefaultImage} w={8} h={8} />
                        </Box>
                    )}
                    <Header />
                </Flex>{' '}
                <VStack alignItems={{ xl: 'flex-start' }}>
                    <AddIngridients />
                    <Steps />
                    <Buttons />
                </VStack>
                <Input
                    type='file'
                    accept='image/*, .png, .jpg, .web'
                    opacity='0'
                    height={0}
                    w={0}
                    lineHeight={0}
                    p={0}
                    m={0}
                    overflow='hidden'
                    onChange={handleChange}
                    ref={filePicker}
                ></Input>
            </Box>
        </>
    );
}
