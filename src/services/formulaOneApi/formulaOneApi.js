import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const formulaOneApi = createApi({
  reducerPath: 'formulaOneApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://ergast.com/api/f1/' }),
  endpoints: builder => ({
    getSchedule: builder.query({
      query: () => `current.json`,
    }),
    getNextRaceInfo: builder.query({
      query: () => `current/next.json`,
    }),
    getDriverStandings: builder.query({
      query: () => `current/driverStandings.json`,
    }),
    getConstructorStandings: builder.query({
      query: () => `current/constructorStandings.json`,
    }),
    getLastRaceResults: builder.query({
      query: () => `current/last/results.json`,
    }),
  }),
});

export const {
  useGetScheduleQuery,
  useGetNextRaceInfoQuery,
  useGetDriverStandingsQuery,
  useGetConstructorStandingsQuery,
  useGetLastRaceResultsQuery,
} = formulaOneApi;
