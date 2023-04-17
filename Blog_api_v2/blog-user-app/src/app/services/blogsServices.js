import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/v1/public" }),
    endpoints: (builder) => ({
        getAllBlogs: builder.query({
            query: () => "blogs",
        }),
        getBlogDetail: builder.query({
            query: ({blogId,blogSlug}) => `blogs/${blogId}/${blogSlug}`,
        }),
        findBlogByName: builder.query({
            query: (name) => `search?name=${name}`,
        })
    }),
});

export const {
    useGetAllBlogsQuery,
    useGetBlogDetailQuery,
    useFindBlogByNameQuery // use + end_point + type (query/mutation)
} = blogApi;