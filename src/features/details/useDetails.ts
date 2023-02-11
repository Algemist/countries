import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { useAppDispatch } from 'store';
import { clearDetails, loadCountryByName } from './detailsSlice';
import { selectDetails } from './detailsSelector';

export const useDetails = (name: string) => {
    const dispatch = useAppDispatch();
    const details = useSelector(selectDetails);

    useEffect(() => {
        dispatch(loadCountryByName(name));

        return () => {
            dispatch(clearDetails());
        };
    }, [name, dispatch]);

    return details;
};
