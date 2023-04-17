import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./services/blogsServices";
import { categoryApi } from "./services/categoryServices";

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [blogApi.reducerPath]: blogApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            blogApi.middleware,
            categoryApi.middleware
        ),
});