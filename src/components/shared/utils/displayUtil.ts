import { useAppSelector } from '~/store/hooks';
import { selectIsSearchStarted, selectIsSearchSuccessful } from '~/store/reducers/search';

export function DisplayUtil(isReverse: boolean) {
    const isSearchStarted = useAppSelector(selectIsSearchStarted);
    const isSearchSuccessful = useAppSelector(selectIsSearchSuccessful);
    if (isReverse) {
        return isSearchStarted && isSearchSuccessful ? '""' : 'none';
    }

    return isSearchStarted && isSearchSuccessful ? 'none' : '""';
}
