import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import racksReducer from './slices/racksSlice';

export const store = configureStore({
  reducer: {
    racks: racksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
