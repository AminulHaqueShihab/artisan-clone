import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import mainApi from './mainApi';

export const authApi = mainApi.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation({
			query: ({ email, password }) => ({
				url: `/auth/login`,
				method: 'POST',
				body: {
					email,
					password,
				},
			}),
		}),
		getSelf: builder.query({
			query: () => ({
				url: '/auth/self',
				method: 'GET',
			}),
		}),
	}),
});

export const { useLoginMutation, useGetSelfQuery } = authApi;
export default authApi;
