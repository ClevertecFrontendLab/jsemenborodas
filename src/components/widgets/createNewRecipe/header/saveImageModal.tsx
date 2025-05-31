import {
    Box,
    Button,
    Heading,
    Icon,
    Image,
    Input,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

import { BreakfastExit } from '~/icons/Icon';
import { useUploadImageMutation } from '~/query/services/upload';
import { FipleUploadResponce } from '~/query/types/types';
import { useAppDispatch } from '~/store/hooks';
import { toggleIsStepUploadImageOpen, toggleIsUploadImageOpen } from '~/store/reducers/authModals';

import { DefaultImage } from '../assets/Icons';

interface Props {
    onclick: (e: string) => void;
}

interface StepImageProps {
    onclick: (index: number, value: string) => void;
    index: number;
}
export function SaveImageModal({ onclick }: Props) {
    const dispatch = useAppDispatch();
    const [recipeImage, setRecipeImage] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const recipeImageHeight = useBreakpointValue({
        base: '108px',
        xl: '206px',
    });

    const recipeImageWidth = useBreakpointValue({
        base: '108px',
        xl: '206px',
    });

    const filePicker = useRef<HTMLInputElement>(null);
    const handleImageClick = () => {
        filePicker.current?.click();
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length) setSelectedFile(event.target.files[0]);
    };
    const [fileUpload] = useUploadImageMutation();
    const handleIsModalOpen = () => {
        dispatch(toggleIsUploadImageOpen());
    };

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
                w='100%'
                h='100vh'
                position='absolute'
                display='flex'
                justifyContent='center'
                alignItems='center'
            >
                <Box
                    w={{ base: 316, xl: 396 }}
                    h={recipeImage.length ? { base: 316, xl: 414 } : { base: 244, xl: 342 }}
                    bg='rgba(255, 255, 255, 1)'
                    borderRadius={16}
                    zIndex={11}
                    position='relative'
                >
                    <Box position='absolute' right={6} top={6}>
                        <Icon as={BreakfastExit} w={6} h={6} onClick={handleIsModalOpen}></Icon>
                    </Box>
                    <Heading
                        fontFamily='Inter'
                        fontWeight={700}
                        fontSize={24}
                        lineHeight={8}
                        mt={8}
                    >
                        Изображение
                    </Heading>
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
                            mx='auto'
                            mt={8}
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
                            mx='auto'
                            mt={8}
                        >
                            <Icon as={DefaultImage} w={8} h={8} />
                        </Box>
                    )}
                    {recipeImage.length > 0 && (
                        <Button
                            w={{ base: '252px', xl: '332px' }}
                            h='48px'
                            borderRadius='6px'
                            bg='rgba(0, 0, 0, 0.92)'
                            mt={8}
                            onClick={() => {
                                onclick(recipeImage);
                                handleIsModalOpen();
                            }}
                        >
                            <Text
                                as='span'
                                fontFamily='Inter'
                                fontWeight={600}
                                fontSize={18}
                                lineHeight={7}
                                color='rgba(255, 255, 255, 1)'
                            >
                                Сохранить
                            </Text>
                        </Button>
                    )}
                </Box>
            </Box>
            <Box
                zIndex={10}
                top={0}
                bottom={0}
                left={0}
                right={0}
                position='fixed'
                sx={{
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                }}
            ></Box>
            <Input
                type='file'
                accept='image/*, .png, .jpg, .web'
                opacity='0'
                onClick={(e) => e.preventDefault}
                height={0}
                w={0}
                lineHeight={0}
                p={0}
                m={0}
                overflow='hidden'
                onChange={handleChange}
                ref={filePicker}
            ></Input>
        </>
    );
}

export function SaveStepImageModal({ onclick, index }: StepImageProps) {
    const dispatch = useAppDispatch();
    const [recipeImage, setRecipeImage] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const recipeImageHeight = useBreakpointValue({
        base: '108px',
        xl: '206px',
    });

    const recipeImageWidth = useBreakpointValue({
        base: '108px',
        xl: '206px',
    });

    const filePicker = useRef<HTMLInputElement>(null);
    const handleImageClick = () => {
        filePicker.current?.click();
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length) setSelectedFile(event.target.files[0]);
    };
    const [fileUpload] = useUploadImageMutation();
    const handleIsModalOpen = () => {
        dispatch(toggleIsStepUploadImageOpen());
    };

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
                top={0}
                bottom={0}
                left={0}
                right={0}
                position='fixed'
                display='flex'
                justifyContent='center'
                alignItems='center'
                zIndex={11}
            >
                <Box
                    w={{ base: 316, xl: 396 }}
                    h={recipeImage.length ? { base: 316, xl: 414 } : { base: 244, xl: 342 }}
                    bg='rgba(255, 255, 255, 1)'
                    borderRadius={16}
                    zIndex={11}
                    position='relative'
                >
                    <Box position='absolute' right={6} top={6}>
                        <Icon as={BreakfastExit} w={6} h={6} onClick={handleIsModalOpen}></Icon>
                    </Box>
                    <Heading
                        fontFamily='Inter'
                        fontWeight={700}
                        fontSize={24}
                        lineHeight={8}
                        mt={8}
                    >
                        Изображение
                    </Heading>
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
                            mx='auto'
                            mt={8}
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
                            mx='auto'
                            mt={8}
                        >
                            <Icon as={DefaultImage} w={8} h={8} />
                        </Box>
                    )}
                    {recipeImage.length > 0 && (
                        <Button
                            w={{ base: '252px', xl: '332px' }}
                            h='48px'
                            borderRadius='6px'
                            bg='rgba(0, 0, 0, 0.92)'
                            mt={8}
                            onClick={() => {
                                onclick(index, recipeImage);
                                handleIsModalOpen();
                            }}
                        >
                            <Text
                                as='span'
                                fontFamily='Inter'
                                fontWeight={600}
                                fontSize={18}
                                lineHeight={7}
                                color='rgba(255, 255, 255, 1)'
                            >
                                Сохранить
                            </Text>
                        </Button>
                    )}
                </Box>
            </Box>
            <Box
                zIndex={10}
                top={0}
                bottom={0}
                left={0}
                right={0}
                position='fixed'
                sx={{
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                }}
            ></Box>
            <Input
                type='file'
                accept='image/*, .png, .jpg, .web'
                opacity='0'
                onClick={(e) => e.preventDefault}
                height={0}
                w={0}
                lineHeight={0}
                p={0}
                m={0}
                overflow='hidden'
                onChange={handleChange}
                ref={filePicker}
            ></Input>
        </>
    );
}
