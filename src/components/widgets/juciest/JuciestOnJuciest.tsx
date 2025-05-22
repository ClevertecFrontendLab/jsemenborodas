import { Box, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { FetchConsts } from '~/components/consts/FetchConsts';
import { useGetCategoriesQuery } from '~/query/services/categories';
import { useGetRecipeByLikesQuery } from '~/query/services/recipesnew';

import { JuciestCards } from './JuciestCards';

export function JuciestOnJuciest() {
    const [pages, setPages] = useState([1]);
    const location = useLocation();
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const { data, isError, isLoading, isFetching } = useGetRecipeByLikesQuery({
        limit: FetchConsts.CARDSLIMIT,
        page: pages[pages.length - 1],
    });
    const { data: categoriesResponse, refetch } = useGetCategoriesQuery({});
    const catData = categoriesResponse?.length ? categoriesResponse : [];
    useEffect(() => {
        if (isLoading || isFetching) {
            setIsButtonLoading(true);
        } else {
            setIsButtonLoading(false);
        }
    }, [isLoading, isFetching]);
    useEffect(() => {
        refetch();
    }, [location.pathname, refetch]);
    if (isError) {
        return null;
    }

    return (
        <Box w='100%' rowGap={{ base: '0px' }} pl={{ xl: '4px' }} mb='100px'>
            {catData && pages.map((page) => <JuciestCards key={page} page={page} />)}
            <Button
                data-test-id={
                    pages.length >= (data?.meta?.totalPages ?? 0) ? '' : 'load-more-button'
                }
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
                display={pages.length >= (data?.meta?.totalPages ?? 0) ? 'none' : 'block'}
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
