import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const categoryApi = createApi({
    reducerPath: "categoryApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/v1/admin/courses" }),
    endpoints: (builder) => ({
        getAllCategory: builder.query({
            query: () => "categories"
        })
    })
});

export const {
    useGetAllCategoryQuery
} = categoryApi;