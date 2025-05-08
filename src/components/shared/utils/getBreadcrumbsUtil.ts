import { Category } from '~/query/types/types';

export function GetBreadcrumb(
    displayPaths: string[],
    categories: Category[] | undefined,
    redirectedCategory: Category[] | undefined,
) {
    return displayPaths.slice(0, 2).map((path, index) => {
        const route = `/${displayPaths.slice(0, index + 1).join('/')}`;
        const name = categories?.find((c) => c.category === path)?.title || path;
        const secondRoute = `/${redirectedCategory?.[0]?.category}/${redirectedCategory?.[0]?.subCategories?.[0]?.category}`;
        return {
            key: route,
            name: name,
            secondRoute: secondRoute,
        };
    });
}
