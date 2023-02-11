import { ChangeEventHandler } from 'react';
import {useSelector} from 'react-redux';
import { useAppDispatch } from 'store';
import { selectSearch } from './ControlsSelectors';
import { setSearch } from './ControlsSlice';

type onSearch = ChangeEventHandler<HTMLInputElement>

export const useSearch = (): [string, onSearch] => {
    const dispatch = useAppDispatch();
    const search = useSelector(selectSearch);

    const handleSearch: onSearch = (e) => {
        dispatch(setSearch(e.target.value))
    }

    return [search, handleSearch];
}
