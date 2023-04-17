import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const categoryApi = createApi({
    reducerPath: "categoryApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/v1/public" }),
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => "categories",
        }),
        getAllBlogOfCategory: builder.query({
            query: (name) => `categories/${name}`,
        })
    }),
});

export const {
    useGetAllCategoriesQuery, // use + end_point + type (query/mutation)
    useGetAllBlogOfCategoryQuery,
} = categoryApi;