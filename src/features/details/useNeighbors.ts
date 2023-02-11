import {useSelector} from 'react-redux';
import { useEffect } from 'react';
import { useAppDispatch } from 'store';
import { loadNeighborsByBorder } from './detailsSlice';
import { selectNeighbors } from './detailsSelector';

export const useNeighbors = (borders: string[] = []) => {
    const dispatch = useAppDispatch();
    const neighbors = useSelector(selectNeighbors);

    useEffect(() => {
        if (borders.length) {
            dispatch(loadNeighborsByBorder(borders));
        }
    }, [borders, dispatch]);

    return neighbors;
}
