import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jsonServerApi } from "./slices/example";

export const store = configureStore({
    reducer: {
        [jsonServerApi.reducerPath]: jsonServerApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(jsonServerApi.middleware),
});

setupListeners(store.dispatch);
