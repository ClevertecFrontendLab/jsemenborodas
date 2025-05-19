import {
    Box,
    Button,
    Card,
    CardBody,
    Grid,
    GridItem,
    Heading,
    Hide,
    HStack,
    Icon,
    Show,
    useBreakpointValue,
    VStack,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { FavouriteNotes, Likes } from '~/icons/Icon';
import { useGetCategoriesQuery } from '~/query/services/categories';
import { useGetRecipeByLikesQuery } from '~/query/services/recipesnew';

import { Metrics } from '../../features/Metrics/Metrics';
import RightArrow from '../../shared/images/buttonImages/Vector.png';
export function Juciest() {
    const navigate = useNavigate();
    const { data, isError } = useGetRecipeByLikesQuery({
        limit: 4,
    });

    const { data: categoriesResponse } = useGetCategoriesQuery({});
    const categoryData = categoriesResponse?.length ? categoriesResponse : [];
    const catData = Array.isArray(categoryData) ? categoryData : [];
    const testId = useBreakpointValue({
        base: 'juiciest-link',
        md: 'juiciest-link-mobile',
        xl: 'juiciest-link',
    });
    const testIdReverse = useBreakpointValue({
        base: 'juiciest-link-mobile',
        md: 'juiciest-link',
        xl: 'juiciest-link-mobile',
    });
    if (isError) {
        return null;
    }
    return (
        <>
            <Box
                pr={{ base: '32px', md: '32px', xl: '0px' }}
                mt={{ base: '34px', xl: '34px', '3xl': '28px' }}
                ml={{ xl: '3.2px' }}
                minW={{ xl: '880px', '3xl': '100%' }}
                h={{ xl: '', '3xl': '585px' }}
            >
                <HStack justifyContent='space-between'>
                    <Heading
                        fontSize={{ base: '24px', xl: '36px', '3xl': '48px' }}
                        fontFamily='Inter'
                        fontWeight='500'
                        lineHeight={{ base: '32px', xl: '40px', '3xl': '48px' }}
                        letterSpacing={{ base: '0.4px', xl: '1px', '3xl': '1.6px' }}
                        textAlign='left'
                    >
                        Самое сочное
                    </Heading>

                    <Button
                        w={{ base: '167px', '3xl': '197px' }}
                        h={{ base: '40px', '3xl': '48px' }}
                        paddingX={{ base: '16.5px' }}
                        pt={{ base: '1px', '3xl': '4.5px' }}
                        pl={{ base: '15px', '3xl': '20px' }}
                        bg='#B1FF2E'
                        mt={{ md: '-2px' }}
                        borderRadius='6px'
                        data-test-id={testId}
                        onClick={() => {
                            navigate('/the-juiciest');
                            window.location.reload();
                        }}
                        // className='custom-cursor'
                        cursor='pointer'
                        display={{ base: 'none', md: 'block' }}
                    >
                        <HStack spacing='10px'>
                            <Text
                                fontWeight={600}
                                fontFamily='Inter'
                                lineHeight='24px'
                                letterSpacing={{ '3xl': '0.2px' }}
                                fontSize={{ base: '16px', '3xl': '18px' }}
                            >
                                Вся подборка
                            </Text>
                            <Image src={RightArrow} w='14px' h='8px'></Image>
                        </HStack>
                    </Button>
                </HStack>

                <Grid
                    border='none'
                    borderColor='transparent'
                    mt={{ base: '11px', xl: '16px', '3xl': '24px' }}
                    templateColumns={{
                        md: 'repeat(2, 1fr)',
                        xl: 'repeat(1,1fr)',
                        '3xl': 'repeat(2,50%)',
                    }}
                    gap={{ base: '12px', md: '16px', '3xl': '12px' }}
                    columnGap={{ md: '13.9px', '3xl': '12px' }}
                    rowGap={{ md: '16px', '3xl': '24px' }}
                >
                    {data &&
                        data?.data.map((recipe, index) => (
                            <GridItem key={`${recipe._id}${index}`}>
                                <Card
                                    border='1px solid #00000014'
                                    borderRadius={8}
                                    w={{ base: '100%', md: '100%', xl: '100%', '3xl': '100%' }}
                                    maxW={{ '3xl': '668px' }}
                                    h={{ base: '128px', xl: '244px' }}
                                    // className='custom-cursor'

                                    bg='transparent'
                                >
                                    <CardBody p={0} w='100%' h='100%' borderLeftRadius={8}>
                                        <HStack
                                            p={0}
                                            w={{ base: '100%', xl: '50%', '3xl': '51.8%' }}
                                            h='100%'
                                            spacing={0}
                                            borderLeftRadius={8}
                                        >
                                            <Box
                                                w={{
                                                    base: '158px',
                                                    xl: '78.5%',
                                                    '3xl': '100%',
                                                }}
                                                minW={{ xl: '78.5%', '3xl': '100%' }}
                                                h='100%'
                                                borderLeftRadius={8}
                                            >
                                                <Image
                                                    src={`https://training-api.clevertec.ru/${recipe.image}`}
                                                    h='100%'
                                                    w={{ base: '100%' }}
                                                    borderLeftRadius={8}
                                                ></Image>

                                                <Hide above='xl'>
                                                    <Box
                                                        w={{ base: '127px' }}
                                                        h='24px'
                                                        bg='#FFFFD3'
                                                        borderRadius='4px'
                                                        transform='translateY(-120px) translateX(8px)'
                                                    >
                                                        <HStack
                                                            p={{ base: '2px 4px' }}
                                                            spacing='2px'
                                                        >
                                                            <Image
                                                                src={`https://training-api.clevertec.ru/${
                                                                    catData?.find((cat) =>
                                                                        cat.subCategories?.some(
                                                                            (sub) =>
                                                                                sub._id ===
                                                                                recipe
                                                                                    .categoriesIds[0],
                                                                        ),
                                                                    )?.icon
                                                                }`}
                                                                w={{ base: '16px' }}
                                                            ></Image>
                                                            <Text
                                                                fontFamily='Inter'
                                                                fontWeight={400}
                                                                fontSize={{ base: '14px' }}
                                                                lineHeight='20px'
                                                                noOfLines={1}
                                                            >
                                                                {
                                                                    catData?.find((cat) =>
                                                                        cat.subCategories?.some(
                                                                            (sub) =>
                                                                                sub._id ===
                                                                                recipe
                                                                                    .categoriesIds[0],
                                                                        ),
                                                                    )?.title
                                                                }
                                                            </Text>
                                                        </HStack>
                                                    </Box>
                                                </Hide>
                                            </Box>
                                            <Box
                                                w={{
                                                    base: 'calc(100% - 158px)',
                                                    xl: '125%',
                                                }}
                                                h={{ xl: '100%' }}
                                                pl={{ xl: '24px', '3xl': 0 }}
                                            >
                                                <VStack
                                                    spacing={0}
                                                    mt={{
                                                        base: '6px',
                                                        xl: '3px',
                                                        '3xl': '4px',
                                                    }}
                                                    mr={{ base: '4px' }}
                                                    alignItems={{ base: 'flex-end' }}
                                                    textAlign='left'
                                                >
                                                    <HStack
                                                        w={{
                                                            base: '154px',
                                                            md: '183px',
                                                            xl: '506.5px',
                                                            '3xl': '274px',
                                                        }}
                                                        h={{ base: '24px' }}
                                                        spacing={{ base: '17px', '3xl': '8px' }}
                                                        ml={{
                                                            base: '0px',
                                                            md: '0px',
                                                            xl: '0px',
                                                            '3xl': '0px',
                                                        }}
                                                        mt={{ xl: '16.5px' }}
                                                        justifyContent={{ xl: 'space-between' }}
                                                    >
                                                        <Show above='xl'>
                                                            <HStack
                                                                w='fit-content'
                                                                h='24px'
                                                                fontWeight='400'
                                                                fontFamily='Inter'
                                                                fontSize='14px'
                                                                lineHeight='20px'
                                                                bg='#FFFFD3'
                                                                p={{
                                                                    xl: '0px 8px 0px 9px',
                                                                    '3xl': '0px 8px 0px 2px',
                                                                }}
                                                                spacing={{
                                                                    xl: '7px',
                                                                    '3xl': '7px',
                                                                }}
                                                            >
                                                                <Image
                                                                    src={`https://training-api.clevertec.ru/${
                                                                        catData?.find((cat) =>
                                                                            cat.subCategories?.some(
                                                                                (sub) =>
                                                                                    sub._id ===
                                                                                    recipe
                                                                                        .categoriesIds[0],
                                                                            ),
                                                                        )?.icon
                                                                    }`}
                                                                    w={4}
                                                                ></Image>
                                                                <Text>
                                                                    {' '}
                                                                    {
                                                                        catData?.find((cat) =>
                                                                            cat.subCategories?.some(
                                                                                (sub) =>
                                                                                    sub._id ===
                                                                                    recipe
                                                                                        .categoriesIds[0],
                                                                            ),
                                                                        )?.title
                                                                    }
                                                                </Text>
                                                            </HStack>
                                                        </Show>
                                                        <Box>
                                                            <HStack
                                                                mr={{
                                                                    xl: '24.5px',
                                                                    '3xl': '12px',
                                                                }}
                                                                spacing='16.5px'
                                                            >
                                                                <Metrics
                                                                    icon={FavouriteNotes}
                                                                    w={{ base: 'fit-content' }}
                                                                >
                                                                    <Text
                                                                        fontSize='12px'
                                                                        lineHeight='16px'
                                                                        color='#2DB100'
                                                                        fontWeight='600'
                                                                        fontFamily='Inter'
                                                                    >
                                                                        {recipe?.bookmarks}
                                                                    </Text>
                                                                </Metrics>
                                                                <Metrics
                                                                    icon={Likes}
                                                                    w={{ base: 'fit-content' }}
                                                                >
                                                                    <Text
                                                                        fontSize='12px'
                                                                        lineHeight='16px'
                                                                        color='#2DB100'
                                                                        fontWeight='600'
                                                                        fontFamily='Inter'
                                                                    >
                                                                        {recipe?.likes}
                                                                    </Text>
                                                                </Metrics>
                                                            </HStack>
                                                        </Box>
                                                    </HStack>
                                                    <HStack
                                                        w={{
                                                            base: '158px',
                                                            md: '194px',
                                                            xl: '506.5px',
                                                            '3xl': '280px',
                                                        }}
                                                    >
                                                        <Heading
                                                            as='h4'
                                                            w={{
                                                                base: '154px',
                                                                xl: '486px',
                                                                '3xl': '274px',
                                                            }}
                                                            h={{
                                                                base: '68px',
                                                                xl: '60px',
                                                                '3xl': '28px',
                                                            }}
                                                            fontSize={{
                                                                base: '15.5px',
                                                                xl: '19.7px',
                                                            }}
                                                            fontFamily='Inter'
                                                            lineHeight={{ base: '24px' }}
                                                            textAlign='left'
                                                            ml={{
                                                                base: '0px',
                                                                md: '8px',
                                                                xl: '0px',
                                                                '3xl': '0px',
                                                            }}
                                                            letterSpacing={{ base: '0' }}
                                                            pt={{
                                                                base: '1px',
                                                                xl: '25px',
                                                                '3xl': '0px',
                                                            }}
                                                            mt={{ '3xl': '26px' }}
                                                            sx={{ wordSpacing: '0.8px' }}
                                                            whiteSpace={{ '3xl': 'nowrap' }}
                                                            textOverflow={{ '3xl': 'ellipsis' }}
                                                            overflow={{ '3xl': 'hidden' }}
                                                            width={{ xl: '80%' }}
                                                        >
                                                            {recipe?.title}
                                                        </Heading>
                                                    </HStack>
                                                    <Show above='xl'>
                                                        <Text
                                                            w={{
                                                                xl: '506.5px',
                                                                '3xl': '280px',
                                                            }}
                                                            h='64px'
                                                            ml={{ '3xl': '25px' }}
                                                            fontFamily='Inter'
                                                            fontSize={{ xl: '13.98px' }}
                                                            lineHeight='20px'
                                                            textAlign='left'
                                                            mt={{ xl: '0', '3xl': '6px' }}
                                                            noOfLines={{ '3xl': 3 }}
                                                        >
                                                            {recipe?.description}
                                                        </Text>
                                                    </Show>

                                                    <HStack
                                                        w={{
                                                            base: '154px',
                                                            md: '100%',
                                                        }}
                                                        h={{ base: '24px' }}
                                                        justifyContent='flex-end'
                                                        mr={{
                                                            base: '4px',
                                                            md: '4px',
                                                            xl: '20px',
                                                            '3xl': '7px',
                                                        }}
                                                        mt={{
                                                            md: '1px',
                                                            xl: '29px',
                                                            '3xl': '28px',
                                                        }}
                                                        spacing={{
                                                            base: '12px',
                                                            md: '12px',
                                                            xl: '8px',
                                                        }}
                                                        pb={{ md: '1px' }}
                                                    >
                                                        <Button
                                                            size='base'
                                                            w={{ base: '24px', xl: '122px' }}
                                                            h={{ base: '24px', xl: '32px' }}
                                                            border='1px solid #0000007A'
                                                            borderRadius='6px'
                                                            bg='transparent'
                                                        >
                                                            <HStack>
                                                                <Icon
                                                                    as={FavouriteNotes}
                                                                    w='12px'
                                                                ></Icon>
                                                                <Show above='xl'>
                                                                    <Text
                                                                        fontFamily='Inter'
                                                                        fontWeight={600}
                                                                        fontSize='14px'
                                                                        lineHeight='20px'
                                                                    >
                                                                        Сохранить
                                                                    </Text>
                                                                </Show>
                                                            </HStack>
                                                        </Button>
                                                        <Button
                                                            w={{ base: '70px', xl: '88px' }}
                                                            h={{ base: '24px', xl: '32px' }}
                                                            bg='#000000EB'
                                                            borderRadius='6px'
                                                            onClick={() =>
                                                                navigate(
                                                                    `/the-juiciest/${recipe?._id}`,
                                                                )
                                                            }
                                                            data-test-id={`card-link-${index}`}
                                                        >
                                                            <HStack spacing='7.5px'>
                                                                <Text
                                                                    color='#FFFFFF'
                                                                    fontWeight={600}
                                                                    fontFamily='Inter'
                                                                    fontSize={{
                                                                        base: '12px',
                                                                        xl: '14px',
                                                                    }}
                                                                    lineHeight={{
                                                                        base: '16px',
                                                                    }}
                                                                >
                                                                    Готовить
                                                                </Text>
                                                            </HStack>
                                                        </Button>
                                                    </HStack>
                                                </VStack>
                                            </Box>
                                        </HStack>
                                    </CardBody>
                                </Card>
                            </GridItem>
                        ))}
                    <GridItem
                        data-test-id={testIdReverse}
                        height={{ xl: '0' }}
                        sx={{
                            display: {
                                md: 'none',
                            },
                        }}
                    >
                        <Button
                            w='167px'
                            h={{ base: '40px', xl: 0 }}
                            paddingX='16px'
                            mx={{ base: 'auto', md: '78.5%' }}
                            pl={{ base: '15px' }}
                            bg='#B1FF2E'
                            mt={{ md: '-3px' }}
                            onClick={() => navigate('/the-juiciest')}
                        >
                            <HStack spacing='10px' height={{ xl: '0' }}>
                                <Text
                                    height={{ xl: '0' }}
                                    fontWeight={600}
                                    fontFamily='Inter'
                                    lineHeight='24px'
                                    fontSize={{ base: '16px' }}
                                >
                                    Вся подборка
                                </Text>
                                <Image src={RightArrow} w='14px' h='8px'></Image>
                            </HStack>
                        </Button>
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
}
