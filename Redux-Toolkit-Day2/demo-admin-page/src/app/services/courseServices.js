import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/admin/courses' }),
  tagTypes:["Course"],
  endpoints: (builder) => ({
   getAllCourse: builder.query({
      query: () => "/",
      providesTags:["Course"]
    }),
    getCourseById: builder.query({
        query: (id) => `/${id}`,
       
    }),
    createCourse: builder.mutation({
        query: (data) => ({
            url:"/",
            method:"POST",
            body : data
        }),
    }),
    updateCourse: builder.mutation({
        query: ({ id, ...data }) => ({
            url: "/",
            method: "PUT",
            body: data,
        }),
    }),
    deleteCourse: builder.mutation({
        query: (id) => ({
            url:`/${id}`,
            method:"DELETE",
          
        }),
        invalidatesTags:["Course"]
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllCourseQuery, useGetCourseByIdQuery,useCreateCourseMutation, useDeleteCourseMutation, useUpdateCourseMutation } = courseApi