import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tags = ['Vital', 'Appointment', 'patient', 'prescription', 'medicine', 'room'];

export const mainApi = createApi({
	reducerPath: 'mainApi',

	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.NEXT_PUBLIC_BACKEND}`,

		prepareHeaders: (headers, { getState }) => {
			const token: string = (getState() as any).auth?.token;
			headers.set('content-type', 'application/json');
			headers.set('accept', '*/*');
			if (token) {
				headers.set('authorization', token);
			}
			return headers;
		},
	}),
	tagTypes: tags,
	endpoints: (builder) => ({
		getPatients: builder.query({
			query: ({ sort, page, limit, search }) => ({
				url: `${process.env.NEXT_PUBLIC_BACKEND}/patients/`,
				method: 'GET',
				params: {
					sort,
					page,
					limit,
					search,
				},
			}),
			providesTags: ['patient'],
		}),
	}),
});

export const { useGetPatientsQuery } = mainApi;

export default mainApi;
