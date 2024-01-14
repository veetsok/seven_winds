import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { todoApi } from "../entities/api";

const allSliceReducersReducer = combineReducers({
  [todoApi.reducerPath]: todoApi.reducer,
});

export const store = configureStore({
  reducer: allSliceReducersReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
