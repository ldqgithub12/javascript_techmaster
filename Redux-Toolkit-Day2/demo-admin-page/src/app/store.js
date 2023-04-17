import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { courseApi } from './services/courseServices'
import { userApi } from './services/userService'
import { categoryApi } from './services/categorySevice'


export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [courseApi.reducerPath]: courseApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      courseApi.middleware,
      userApi.middleware,
      categoryApi.middleware
      ),
})