import { Box, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useGetCategoriesQuery } from '~/query/services/categories';
import { useGetRecipeByLikesQuery } from '~/query/services/recipesnew';
import { recipeRequest } from '~/query/types/types';

import { Loader } from '../loader/Loader';
import { JuciestCards } from './JuciestCards';

export function JuciestOnJuciest() {
    const [pages, setPages] = useState<number[]>([1]);
    const [showLoader, setShowLoader] = useState(true);
    const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
    const { data, isError, isLoading, isFetching } = useGetRecipeByLikesQuery({
        limit: 8,
        page: pages[pages.length - 1],
    }) as { data: recipeRequest; isError: boolean; isLoading: boolean; isFetching: boolean };

    useEffect(() => {
        if (isLoading || isFetching) {
            setIsButtonLoading(true);
        } else {
            const timer = setTimeout(() => {
                setIsButtonLoading(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isLoading, isFetching]);
    const { data: catData } = useGetCategoriesQuery({});

    if (showLoader) {
        setTimeout(() => setShowLoader(false), 1000);
        return <Loader />;
    }

    if (isLoading || isFetching) {
        return <Loader />;
    }

    if (isError) {
        return null;
    }

    return (
        <Box w='100%' rowGap={{ base: '0px' }} pl={{ xl: '4px' }} mb='100px'>
            {catData && pages.map((page) => <JuciestCards key={page} page={page} />)}
            <Button
                data-test-id={pages.length >= data?.meta?.totalPages ? '' : 'load-more-button'}
                h={{ base: '40px' }}
                w={{ base: '152px' }}
                borderRadius='6px'
                bgColor='#B1FF2E'
                fontFamily='Inter'
                fontWeight={600}
                letterSpacing='0.3px'
                pl={3}
                fontSize={16}
                mt={4}
                onClick={() => setPages((prev) => [...prev, prev.length + 1])}
                display={pages.length >= data?.meta?.totalPages ? 'none' : 'block'}
                isDisabled={isButtonLoading}
                mx='auto'
                isLoading={isButtonLoading}
                loadingText='Загрузка'
                spinner={<Box></Box>}
                whiteSpace='nowrap'
            >
                Загрузить ещё
            </Button>
        </Box>
    );
}
