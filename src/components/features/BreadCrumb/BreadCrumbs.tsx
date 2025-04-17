import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react';

interface BreadcrumbsProps {
    pathNames: string[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ pathNames }) => {
    const breadCrumbNames: Record<string, string> = {
        '/Juciest': 'Самое сочное',
        '/SecondDelicious': 'Вторые блюда',
        '/veganKitchen': 'Веганская кухня',
    };

    return (
        <Breadcrumb separator={<Text w='8px'> &gt; </Text>}>
            <BreadcrumbItem>
                <BreadcrumbLink href='/'>Главная</BreadcrumbLink>
            </BreadcrumbItem>
            {pathNames.map((_, index) => {
                const route = `/${pathNames[index]}`;
                const displayName = breadCrumbNames[route];
                return (
                    <BreadcrumbItem key={route}>
                        <BreadcrumbLink href={route}>{displayName}</BreadcrumbLink>
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};
