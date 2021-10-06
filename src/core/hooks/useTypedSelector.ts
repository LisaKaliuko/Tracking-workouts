import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '../redusers/rootReducer';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
