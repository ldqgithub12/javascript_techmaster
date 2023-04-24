import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import { authApi } from "./services/auth.API";
import { blogApi } from "./services/blogApi";
export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [authApi.reducerPath]: authApi.reducer,
        [blogApi.reducerPath]: blogApi.reducer,
        auth : authReducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
           authApi.middleware,
           blogApi.middleware
        ),
});