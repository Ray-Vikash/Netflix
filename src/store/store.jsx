import {configureStore} from '@reduxjs/toolkit';

import {counterReducer} from '../Slices/CountSlice';

export const store = configureStore({
 reducer:{
    counterReducer: counterReducer
 }

})