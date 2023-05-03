import { configureStore } from '@reduxjs/toolkit';
import { formulaOneApi } from 'services/formulaOneApi/formulaOneApi';

export const store = configureStore({
  reducer: {
    [formulaOneApi.reducerPath]: formulaOneApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([formulaOneApi.middleware]),
});
