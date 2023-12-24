import mainApi from './mainApi';

export const appointmentApi = mainApi.injectEndpoints({
	endpoints: builder => ({
		activeAppointments: builder.query({
			query: () => ({
				url: `/appointments/doctor-queue?sort=serial`,
				method: 'GET',
			}),
			providesTags: ['Appointment'],
		}),
		getAppointmentById: builder.query({
			query: id => ({
				url: `/appointments/${id}`,
				method: 'GET',
			}),
			providesTags: ['Appointment'],
		}),
		sendToDoctorRoom: builder.mutation({
			query: id => ({
				url: `/redirect/doctor-entry/${id}`,
				method: 'PUT',
			}),
			invalidatesTags: ['Appointment', 'room'],
		}),
		sendToVitalRoom: builder.mutation({
			query: id => ({
				url: `/redirect/vital-entry/${id}`,
				method: 'PUT',
			}),
			invalidatesTags: ['Appointment', 'room'],
		}),
		sendToPharmacyRoom: builder.mutation({
			query: id => ({
				url: `/redirect/doctor-exit/${id}`,
				method: 'PUT',
			}),
			invalidatesTags: ['Appointment', 'room'],
		}),
		getAppointmentsByPatientId: builder.query({
			query: id => ({
				url: `/appointments/patient/${id}?sort=-createdAt`,
				method: 'GET',
			}),
			providesTags: ['Appointment'],
		}),
		// getAppointmentsByPatientId: builder.query({
		// 	query: id => ({
		// 		url: `/v3/appointments-all/${id}?sort=-createdAt`,
		// 		method: 'GET',
		// 	}),
		// 	providesTags: ['Appointment'],
		// }),
	}),
});

export const {
	useActiveAppointmentsQuery,
	useGetAppointmentByIdQuery,
	useSendToDoctorRoomMutation,
	useSendToPharmacyRoomMutation,
	useGetAppointmentsByPatientIdQuery,
	useSendToVitalRoomMutation,

} = appointmentApi;
export default appointmentApi;
