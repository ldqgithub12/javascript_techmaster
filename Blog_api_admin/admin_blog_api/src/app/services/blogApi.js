import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1/admin',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
        query:({page,pageSize})=>`blogs?page=${page}&pageSize=${pageSize}`,
    }),
  }),
});
export const {
  useGetBlogQuery
} = blogApi