import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../services/cryptoApi'

export default configureStore({
  reducer: {
    // reducer is a function that takes in a state and an action and returns a new state
    [cryptoApi.reducerPath]: cryptoApi.reducer, // cryptoApi.reducerPath is the name of the reducer that we set in cryptoApi.js for the reducerPath
    // reducerPath is a property that we can access on the cryptoApi object where we can get the name of the reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
})
