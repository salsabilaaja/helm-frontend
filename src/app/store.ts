import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import answearReducer from '../features/answearSlice'


export const store = configureStore({
  reducer: {
    answear: answearReducer
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
