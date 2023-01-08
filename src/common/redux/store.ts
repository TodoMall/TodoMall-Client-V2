import { configureStore } from '@reduxjs/toolkit';
import agreementSlice from './slices/agreementSlice';

export const store = configureStore({
  reducer: {
    agreement: agreementSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
