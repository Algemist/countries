import { useAppDispatch } from 'store';
import { clearControls } from './ControlsSlice';

export const useCleanup = () => {
    const dispatch = useAppDispatch();

    const cleanUp = () => dispatch(clearControls());

    return cleanUp;
};
