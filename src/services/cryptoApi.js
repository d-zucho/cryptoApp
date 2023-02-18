import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'X-RapidAPI-Key': 'd949ff6625msh8f2e53296d0aa1ap1a3cbdjsn44f4b38aae7d',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

// createRequest is a function that returns an object with the url and headers with exchanges as the endpoint
const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi', // name of the reducer
  baseQuery: fetchBaseQuery({ baseUrl }), // fetchBaseQuery is a fetch wrapper
  endpoints: (builder) => ({
    //** Following includes the different endpoints:  getCryptos, getCryptoNews.... */

    // create endpoints with a builder which has a query function
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`), // createRequest is a function that returns an object with the url and headers with exchanges as the endpoint
    }),
  }),
})

export const {
  useGetCryptosQuery, // useGetCryptosQuery is a hook that we can use to get the data from the endpoint
} = cryptoApi
// this destructures the useGetCryptosQuery function from the cryptoApi object
